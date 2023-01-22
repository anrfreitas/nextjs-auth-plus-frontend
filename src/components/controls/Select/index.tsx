export type Option = {
    text: string;
    value: string;
};

type Props = {
    value: string;
    options: Option[];
    disabled?: boolean;
    className?: string;
    id?: string;
    name?: string;
    dataCy?: string;
    setValue: (value: string) => void;
};

const Select = ({ value, options, disabled, className, id, name, dataCy, setValue }: Props) => {
    return (
        <>
            <select
                id={id}
                name={name}
                data-cy={dataCy ?? ''}
                className={`pl-2 py-2 text-sm rounded-md border ${
                    disabled === true && 'bg-silver-ultra-light'
                } ${className}`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled ? true : false}
            >
                {options.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>
                            {item.text}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default Select;
