import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

interface Props {
    title?: string;
    hideSearchBar?: boolean;
    onSearchClick?: (searchTerm: string) => void;
}

const HeaderBar: React.FC<Props> = ({ title, hideSearchBar, onSearchClick }) => {
    const searchTerm = useRef<HTMLInputElement>();

    const SearchBar = (): JSX.Element => {
        return (
            <div className="flex flex-row-reverse">
                <div
                    onClick={() => onSearchClick && onSearchClick(searchTerm.current.value)}
                    className={`h-8 w-8 bg-gray-dark text-white text-center leading-8 cursor-pointer rounded-r ${
                        hideSearchBar && 'hidden'
                    }`}
                >
                    <FontAwesomeIcon icon={freeSolidIcons.faSearch} className="h-4 w-4" />
                </div>
                <input
                    type="text"
                    className={`pl-2 mb-3 w-64 h-8 border rounded-l focus:border-0 ${
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
