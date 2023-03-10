type Props = {
    value: string;
    disabled?: boolean;
    className?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    dataCy?: string;
    isPassword?: boolean;
    setValue: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
};

const TextInput = ({
    value,
    disabled,
    className,
    id,
    name,
    placeholder,
    dataCy,
    isPassword,
    setValue,
    onKeyDown,
}: Props) => {
    return (
        <>
            <input
                id={id}
                name={name}
                data-cy={dataCy ?? ''}
                type={isPassword ? 'password' : 'text'}
                placeholder={placeholder ?? ''}
                className={`pl-2 py-2 text-sm rounded-md border ${
                    disabled === true && 'bg-silver-ultra-light'
                } ${className}`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => onKeyDown && onKeyDown(e)}
                disabled={disabled ? true : false}
            />
        </>
    );
};

export default TextInput;
