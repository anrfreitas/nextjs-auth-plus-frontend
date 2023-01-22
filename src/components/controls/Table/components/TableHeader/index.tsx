interface Props {
    headers: string[];
    indexKeysHidden: number[];
}

const TableHeader: React.FC<Props> = ({ headers, indexKeysHidden }) => {
    const isIndexKeyHidden = (keyIndex: number): boolean => {
        return indexKeysHidden.includes(keyIndex);
    };

    const TableHeader = (): JSX.Element => {
        return (
            <thead>
                <tr className="h-10 bg-silver-ultra-light text-sm">
                    {headers.map((item, index) => (
                        <th
                            key={index}
                            scope="col"
                            className={`uppercase ${isIndexKeyHidden(index) && 'hidden'} ${
                                index > 1 && 'hidden lg:table-cell'
                            }`}
                        >
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
