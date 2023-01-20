type Props = {
    text: string | JSX.Element;
    className?: string;
    id?: string;
    icon?: JSX.Element;
    dataCy?: string;
    disabled?: boolean;
    onClick: () => void;
};

// @todo - add disabled state
const Button = ({ id, text, className, icon, dataCy, disabled, onClick }: Props) => {
    if (disabled) console.log('@todo - add disabled state');
    return (
        <div
            id={id}
            className={`w-full h-10 p-2 text-center bg-gray-dark hover:bg-[#2f3f52] text-white rounded cursor-default ${className}`}
            data-cy={dataCy ?? ''}
            onClick={onClick}
        >
            {icon}
            {text}
        </div>
    );
};

export default Button;
