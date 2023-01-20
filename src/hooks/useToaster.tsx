import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';
import config, { ConfigType } from '@config';

type MessageType = 'success' | 'error' | 'info';

type UseToaster = () => {
    messageBox: (message: string, type?: MessageType, error?: ErrorInfo) => void;
};

export type ErrorInfo = { error?: unknown; serviceName?: string };

export const printError = (
    configuration: ConfigType,
    messageType: MessageType,
    errorInfo?: ErrorInfo,
): boolean => {
    if (!configuration.PRODUCTION_BUILD && messageType === 'error' && errorInfo) {
        if (process.env.NODE_ENV !== 'test')
            // eslint-disable-next-line no-console
            console.error(
                errorInfo && errorInfo.serviceName
                    ? `[${errorInfo.serviceName.toUpperCase()}]`
                    : '',
                errorInfo?.error,
            );
        return true;
    }
    return false;
};

const useToaster: UseToaster = () => {
    const handleMessage = (
        message: string,
        type: MessageType = 'success',
        errorInfo?: ErrorInfo,
    ) => {
        printError(config, type, errorInfo);
        switch (type) {
            case 'success': {
                toast.success(message);
                break;
            }
            case 'error': {
                toast.error(message);
                break;
            }
            case 'info': {
                toast.custom((t) => (
                    <div
                        className={`flex gap-x-2 items-center font-bold p-3 border-2 border-b-4 rounded-2xl border-info-100 shadow-md z-[100] bg-surface-100 ${
                            t.visible ? 'animate-enter' : 'animate-leave'
                        }`}
                    >
                        <FontAwesomeIcon
                            icon={freeSolidIcons.faCircleInfo}
                            className="h-5 w-5 text-info-100"
                        />
                        {message}
                    </div>
                ));
                break;
            }
            default:
                toast.success(message);
        }
    };

    return { messageBox: handleMessage };
};

export default useToaster;
