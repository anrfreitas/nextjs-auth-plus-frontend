interface Props {
    headers: string[];
}

const TableHeader: React.FC<Props> = ({ headers }) => {
    const TableHeader = (): JSX.Element => {
        return (
            <thead>
                <tr className="h-10 bg-silver-ultra-light text-sm">
                    {headers.map((item, index) => (
                        <th key={index} scope="col" className="uppercase">
                            {item}
                        </th>
                    ))}
                    <th className="uppercase">Actions</th>
                </tr>
            </thead>
        );
    };

    return <TableHeader />;
};

export default TableHeader;
