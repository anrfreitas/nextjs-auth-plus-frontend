import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

interface Props {
    headers: string[];
    items: Record<string, string>[];
    keyItemName: string;
    page: number;
    title?: string;
    onEditClick: (id: string) => void;
    onNextPageClick: () => void;
    onPreviousPageClick: () => void;
    onRemoveClick?: (id: string) => void;
    onRefreshTableClick?: () => void;
}

const Table: React.FC<Props> = ({
    headers,
    items,
    keyItemName,
    page,
    title,
    onEditClick,
    onRemoveClick,
    onNextPageClick,
    onPreviousPageClick,
    onRefreshTableClick,
}) => {
    console.log(
        headers,
        items,
        keyItemName,
        onEditClick,
        onRemoveClick,
        onNextPageClick,
        onPreviousPageClick,
    );

    const TableHeaders = (): JSX.Element => {
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

    const getTableActionItems = (keyItemId: string): JSX.Element => {
        return (
            <>
                <button onClick={() => onEditClick(keyItemId)}>
                    <FontAwesomeIcon
                        icon={freeSolidIcons.faEdit}
                        className="h-4 w-4 ml-4 align-middle"
                    />
                </button>
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
                                <td key={rowItemDataIndex}>{rowItemData}</td>
                            ))}
                            <td>{getTableActionItems(rowItem[keyItemName])}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    };

    const SearchBar = (): JSX.Element => {
        return (
            <div className="flex flex-row-reverse">
                <div
                    onClick={() => console.log('@todo - clicked on search')}
                    className="h-8 w-8 bg-gray-dark text-white text-center leading-8 cursor-pointer rounded-r"
                >
                    <FontAwesomeIcon icon={freeSolidIcons.faSearch} className="h-4 w-4" />
                </div>
                <input
                    type="text"
                    className="pl-2 mb-3 w-64 h-8 border rounded-l focus:border-0"
                    placeholder="Start typing your search..."
                />
            </div>
        );
    };

    const HeaderBar = (): JSX.Element => {
        return (
            <div className="flex w-full mb-3">
                <div className="w-full h-8 leading-8 text-lg font-semibold">{title}</div>
                <div className="w-full h-8">
                    <SearchBar />
                </div>
            </div>
        );
    };

    const PaginationItems = (): JSX.Element => {
        return (
            <div className="flex flex-row-reverse">
                <div
                    onClick={onNextPageClick}
                    className="h-8 w-8 bg-gray-dark text-white text-center leading-8 cursor-pointer ml-2"
                >
                    <FontAwesomeIcon
                        icon={freeSolidIcons.faChevronRight}
                        className="h-4 w-4 align-middle"
                    />
                </div>

                <div
                    onClick={onPreviousPageClick}
                    className="h-8 w-8 bg-gray-dark text-white text-center leading-8 cursor-pointer ml-2"
                >
                    <FontAwesomeIcon
                        icon={freeSolidIcons.faChevronLeft}
                        className="h-4 w-4 align-middle"
                    />
                </div>

                {onRefreshTableClick && (
                    <div
                        onClick={onRefreshTableClick}
                        className="h-8 w-8 bg-gray-dark text-white text-center leading-8 cursor-pointer ml-2"
                    >
                        <FontAwesomeIcon
                            icon={freeSolidIcons.faRefresh}
                            className="h-4 w-4 align-middle"
                        />
                    </div>
                )}
            </div>
        );
    };

    const FooterBar = (): JSX.Element => {
        return (
            <div className="flex w-full mt-3">
                <div className="w-full h-8 leading-8 text-sm">Current page: {page}</div>
                <div className="w-full h-8">
                    <PaginationItems />
                </div>
            </div>
        );
    };

    return (
        <>
            <HeaderBar />

            <table className="table-auto">
                <TableHeaders />
                <TableBody />
            </table>

            <FooterBar />
        </>
    );
};

export default Table;
