type Props = {
    text: string;
    className?: string;
    id?: string;
    icon?: JSX.Element;
    dataCy?: string;
    onClick: () => Promise<void>;
};

// @todo - add disabled state
const Button = ({ id, text, className, icon, dataCy, onClick }: Props) => {
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
