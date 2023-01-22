import Button from '@components/controls/Button';

type FooterType = 'default' | 'centered';

interface Props {
    submitButton: string | JSX.Element;
    disableSubmitButton?: boolean;
    cancelButton?: string | JSX.Element;
    type?: FooterType;
    onSubmitClick?: () => void;
    onCancelClick?: () => void;
}

/**
 * Footer with a submit button, and optionally a cancel button on the right side
 * of the footer.
 *
 * The buttons are rendered and labelled with by the `submitButton` prop
 * and `cancelButton` prop.
 *
 * The cancel button needs `cancelButton` to render and `onCancel` to be
 * functional.
 */
const ModalFooter: React.FC<Props> = ({
    type = 'default',
    submitButton,
    disableSubmitButton,
    cancelButton,
    onSubmitClick,
    onCancelClick,
}) => (
    <div className="pt-6 px-10 pb-10">
        {type === 'default' && (
            <div className="flex items-center flex-col-reverse md:flex-row md:justify-end gap-x-10 gap-y-6">
                {cancelButton && (
                    <div>
                        <Button onClick={onCancelClick} text={cancelButton} />
                    </div>
                )}
                {submitButton && (
                    <div className="w-full md:w-max">
                        <Button
                            disabled={disableSubmitButton}
                            onClick={onSubmitClick}
                            text={submitButton}
                        />
                    </div>
                )}
            </div>
        )}

        {type === 'centered' && (
            <div className="w-full flex flex-col justify-center gap-x-10 gap-y-6">
                {submitButton && (
                    <Button
                        disabled={disableSubmitButton}
                        onClick={onSubmitClick}
                        text={submitButton}
                    />
                )}
                {cancelButton && <Button onClick={onCancelClick} text={cancelButton} />}
            </div>
        )}
    </div>
);

export default ModalFooter;
