type Props = {
    text: string;
    className?: string;
};

const H1 = ({ text, className }: Props) => {
    return <span className={`h-8 leading-8 text-lg font-semibold mb-3 ${className}`}>{text}</span>;
};

export default H1;
