import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';

interface Props {
    headers: string[];
    items: Record<string, string>[];
    primaryKeyItemName: string;
    indexKeysHidden: number[];
    page: number;
    title?: string;
    className?: string;
    hideSearchBar?: boolean;
    onNextPageClick: () => void;
    onPreviousPageClick: () => void;
    onEditClick?: (id: string) => void;
    onSearchClick?: (searchTerm: string) => void;
    onRemoveClick?: (id: string) => void;
    onRefreshTableClick?: () => void;
}

const Table: React.FC<Props> = ({
    headers,
    items,
    primaryKeyItemName,
    indexKeysHidden,
    page,
    title,
    className,
    hideSearchBar,
    onEditClick,
    onRemoveClick,
    onNextPageClick,
    onPreviousPageClick,
    onRefreshTableClick,
    onSearchClick,
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <HeaderBar title={title} hideSearchBar={hideSearchBar} onSearchClick={onSearchClick} />

            <table className="table-auto">
                <TableHeader headers={headers} indexKeysHidden={indexKeysHidden} />
                <TableBody
                    items={items}
                    primaryKeyItemName={primaryKeyItemName}
                    indexKeysHidden={indexKeysHidden}
                    onEditClick={onEditClick}
                    onRemoveClick={onRemoveClick}
                />
            </table>

            <FooterBar
                page={page}
                onNextPageClick={onNextPageClick}
                onPreviousPageClick={onPreviousPageClick}
                onRefreshTableClick={onRefreshTableClick}
            />
        </div>
    );
};

export default Table;
