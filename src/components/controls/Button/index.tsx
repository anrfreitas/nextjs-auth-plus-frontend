type Props = {
    text: string | JSX.Element;
    tooltip?: string;
    className?: string;
    id?: string;
    icon?: JSX.Element;
    dataCy?: string;
    disabled?: boolean;
    onClick: () => void;
};

const Button = ({ id, text, tooltip, className, icon, dataCy, disabled, onClick }: Props) => {
    const disabledStyle = 'bg-silver-ultra-light text-gray';
    const enabledStyle = 'bg-gray-dark hover:bg-[#2f3f52] text-white';

    return (
        <div
            id={id}
            className={`w-full h-10 p-2 text-center rounded cursor-pointer ${
                disabled ? disabledStyle : enabledStyle
            } ${className}`}
            data-cy={dataCy ?? ''}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick={disabled ? () => {} : onClick}
            title={tooltip}
        >
            {icon}
            {text}
        </div>
    );
};

export default Button;
