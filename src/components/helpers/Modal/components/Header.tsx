import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

type HeaderType = 'default' | 'withIcon' | 'withSideIcon';

/**
 * This represent a header without an icon
 */
type DefaultProps = {
    type?: 'default';
    icon?: never;
};

/**
 * This represent a header with an icon on top of the title
 */
type WithIconProps = {
    type: 'withIcon';
    icon: JSX.Element;
};

/**
 * This represent a header with an icon beside the title
 */
type WithSideIconProps = {
    type: 'withSideIcon';
    icon: JSX.Element;
};

type Props = {
    title: string;
    subtitle?: string | JSX.Element;
    type?: HeaderType;
    requestClose?: () => void;
} & (DefaultProps | WithIconProps | WithSideIconProps);

/**
 * Header with a title and optionally a close button and subtitle.
 *
 * @TODO Add translation for aria-label on the close button
 */
const ModalHeader: React.FC<Props> = ({
    type = 'default',
    title,
    subtitle,
    requestClose,
    icon,
}) => (
    <div className="space-y-2 grow-0 select-none pb-6 last:pb-0 pt-10 px-10">
        {type === 'default' && (
            <>
                <div className="flex gap-x-6 items-center">
                    <h1 className="text-xl font-bold tracking-wide w-full">{title}</h1>

                    {requestClose && (
                        <button
                            type="button"
                            aria-label="close"
                            className="grow-0"
                            onClick={requestClose}
                        >
                            <FontAwesomeIcon
                                icon={freeSolidIcons.faXmark}
                                className="h-6 w-6 align-middle text-gray hover:text-black active:text-black"
                            />
                        </button>
                    )}
                </div>

                {subtitle && (
                    // Padding right of 20px (icon) + 24px (gap) for the text to be the
                    // same width as the title.
                    <p className="text-md font-semibold w-full pr-11">{subtitle}</p>
                )}
            </>
        )}

        {type === 'withIcon' && (
            <>
                {requestClose && (
                    <div className="flex justify-end">
                        <button
                            type="button"
                            aria-label="close"
                            className="grow-0"
                            onClick={requestClose}
                        >
                            <FontAwesomeIcon
                                icon={freeSolidIcons.faXmark}
                                className="h-6 w-6 align-middle text-gray hover:text-black active:text-black"
                            />
                        </button>
                    </div>
                )}
                <div className="relative flex justify-center px-4">{icon}</div>
                <h1 className="text-xl font-bold tracking-wide">{title}</h1>

                {subtitle && (
                    // Padding right of 20px (icon) + 24px (gap) for the text to be the
                    // same width as the title.
                    <p className="text-md font-semibold w-full">{subtitle}</p>
                )}
            </>
        )}

        {type === 'withSideIcon' && (
            <div className="flex gap-x-6 items-start justify-between">
                <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16">{icon}</div>
                    <div>
                        <h1 className="text-xl font-bold tracking-wide w-full">{title}</h1>
                        {subtitle && (
                            <h2 className="text-md font-semibold w-full pr-11">{subtitle}</h2>
                        )}
                    </div>
                </div>

                {requestClose && (
                    <button
                        type="button"
                        aria-label="close"
                        className="grow-0"
                        onClick={requestClose}
                    >
                        <FontAwesomeIcon
                            icon={freeSolidIcons.faXmark}
                            className="h-6 w-6 align-middle text-gray hover:text-black active:text-black"
                        />
                    </button>
                )}
            </div>
        )}
    </div>
);

export default ModalHeader;
