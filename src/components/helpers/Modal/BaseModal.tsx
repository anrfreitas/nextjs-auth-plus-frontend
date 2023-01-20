import Portal from './components/Portal';
import { ModalProps } from './types';

const BaseModal: React.FC<ModalProps> = ({
    contentLabel,
    aria,
    requestClose,
    submitForm,
    children,
    style,
}) => {
    const contentClassname = 'flex flex-col w-full bg-white rounded-none sm:rounded-3xl';

    const classes = Object.values(style).join(' ');

    return (
        <Portal>
            <div
                role="dialog"
                className="flex fixed inset-0 justify-center items-center overflow-x-hidden overflow-y-auto no-scrollbar z-[99] sm:p-4 sm:min-w-[440px] md:min-w-fit"
                aria-modal
                aria-label={contentLabel}
                aria-labelledby={aria.labelledby}
                aria-describedby={aria.describedby}
            >
                {/* Modal container */}
                <div
                    className={`relative flex z-[99] w-full h-full sm:w-auto sm:h-auto ${classes} max-w-[45rem] max-h-full`}
                >
                    {/* Both must have the same classes for consistency */}
                    {submitForm ? (
                        <form
                            className={contentClassname}
                            onSubmit={(ev) => {
                                ev.preventDefault();
                                submitForm();
                            }}
                        >
                            {children}
                        </form>
                    ) : (
                        <div className={contentClassname}>{children}</div>
                    )}
                </div>

                {/* Modal backdrop */}
                <div
                    className="fixed inset-0 z-[98] bg-gray-light/60"
                    onClick={requestClose}
                    aria-hidden
                />
            </div>
        </Portal>
    );
};

export default BaseModal;
