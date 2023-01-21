import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';

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
    return (
        <>
            <HeaderBar title={title} />

            <table className="table-auto">
                <TableHeader headers={headers} />
                <TableBody
                    items={items}
                    keyItemName={keyItemName}
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
        </>
    );
};

export default Table;
