import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

interface Props {
    title?: string;
    hideSearchBar?: boolean;
    onAddNewTableClick?: () => void;
    onSearchClick?: (searchTerm: string) => void;
}

const HeaderBar: React.FC<Props> = ({
    title,
    hideSearchBar,
    onAddNewTableClick,
    onSearchClick,
}) => {
    const searchTerm = useRef<HTMLInputElement>();

    const SearchBar = (): JSX.Element => {
        return (
            <div className="flex flex-row-reverse">
                <div
                    onClick={() => onAddNewTableClick && onAddNewTableClick()}
                    title="Add new"
                    className={`h-8 w-8 ml-2 bg-gray-dark hover:bg-[#2f3f52] text-white text-center leading-8 cursor-pointer ${
                        onAddNewTableClick ?? 'hidden'
                    }`}
                >
                    <FontAwesomeIcon icon={freeSolidIcons.faPlus} className="h-4 w-4" />
                </div>

                <div
                    onClick={() => onSearchClick && onSearchClick(searchTerm.current.value)}
                    title="Search now"
                    className={`h-8 w-8 bg-gray-dark hover:bg-[#2f3f52] text-white text-center leading-8 cursor-pointer rounded-r ${
                        hideSearchBar && 'hidden'
                    }`}
                >
                    <FontAwesomeIcon icon={freeSolidIcons.faSearch} className="h-4 w-4" />
                </div>

                <input
                    type="text"
                    className={`pl-2 mb-3 w-60 grow h-8 border rounded-l focus:border-0 ${
                        hideSearchBar && 'hidden'
                    }`}
                    placeholder="Start typing your search..."
                    ref={searchTerm}
                />
            </div>
        );
    };

    const HeaderBar = (): JSX.Element => {
        return (
            <>
                <div className="w-full h-8 leading-8 text-lg font-semibold lg:hidden sm:block">
                    {title}
                </div>
                <hr className="mb-4 lg:hidden" />
                <div className="flex w-full mb-3">
                    <div className="w-full h-8 leading-8 text-lg font-semibold hidden lg:block">
                        {title}
                    </div>
                    <div className="w-full h-8">
                        <SearchBar />
                    </div>
                </div>
            </>
        );
    };

    return <HeaderBar />;
};

export default HeaderBar;
