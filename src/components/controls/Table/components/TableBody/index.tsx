import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

interface Props {
    items: Record<string, string>[];
    primaryKeyItemName: string;
    indexKeysHidden: number[];
    onEditClick: (id: string) => void;
    onRemoveClick?: (id: string) => void;
}

const TableBody: React.FC<Props> = ({
    items,
    primaryKeyItemName,
    indexKeysHidden,
    onEditClick,
    onRemoveClick,
}) => {
    const isIndexKeyHidden = (keyIndex: number): boolean => {
        return indexKeysHidden.includes(keyIndex);
    };

    const getTableActionItems = (keyItemId: string): JSX.Element => {
        return (
            <>
                {onEditClick && (
                    <button onClick={() => onEditClick(keyItemId)}>
                        <FontAwesomeIcon
                            icon={freeSolidIcons.faEdit}
                            className="h-4 w-4 ml-4 align-middle"
                        />
                    </button>
                )}
                {onRemoveClick && (
                    <button onClick={() => onRemoveClick(keyItemId)}>
                        <FontAwesomeIcon
                            icon={freeSolidIcons.faTrashCan}
                            className="h-4 w-4 ml-4 align-middle"
                        />
                    </button>
                )}
            </>
        );
    };

    const TableBody = (): JSX.Element => {
        return (
            <tbody className="text-center">
                {items.map((rowItem, rowItemIndex) => {
                    return (
                        <tr key={rowItemIndex} className="h-10 border-b border-silver-ultra-light">
                            {Object.values(rowItem).map((rowItemData, rowItemDataIndex) => (
                                <td
                                    key={rowItemDataIndex}
                                    className={`${isIndexKeyHidden(rowItemDataIndex) && 'hidden'} ${
                                        rowItemDataIndex > 1 && 'hidden lg:table-cell'
                                    }`}
                                >
                                    {rowItemData}
                                </td>
                            ))}
                            <td>{getTableActionItems(rowItem[primaryKeyItemName])}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    };

    return <TableBody />;
};

export default TableBody;
