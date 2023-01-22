import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

interface Props {
    page: number;
    onNextPageClick: () => void;
    onPreviousPageClick: () => void;
    onRefreshTableClick?: () => void;
}

const FooterBar: React.FC<Props> = ({
    page,
    onNextPageClick,
    onPreviousPageClick,
    onRefreshTableClick,
}) => {
    const PaginationItems = (): JSX.Element => {
        return (
            <div className="flex flex-row-reverse">
                <div
                    onClick={onNextPageClick}
                    title="Go to next page"
                    className="h-8 w-8 bg-gray-dark hover:bg-[#2f3f52] text-white text-center leading-8 cursor-pointer ml-2"
                >
                    <FontAwesomeIcon
                        icon={freeSolidIcons.faChevronRight}
                        className="h-4 w-4 align-middle"
                    />
                </div>

                <div
                    onClick={onPreviousPageClick}
                    title="Go to previous page"
                    className="h-8 w-8 bg-gray-dark hover:bg-[#2f3f52] text-white text-center leading-8 cursor-pointer ml-2"
                >
                    <FontAwesomeIcon
                        icon={freeSolidIcons.faChevronLeft}
                        className="h-4 w-4 align-middle"
                    />
                </div>

                {onRefreshTableClick && (
                    <div
                        onClick={onRefreshTableClick}
                        title="Refresh table"
                        className="h-8 w-8 bg-gray-dark hover:bg-[#2f3f52] text-white text-center leading-8 cursor-pointer ml-2"
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

    return <FooterBar />;
};

export default FooterBar;
