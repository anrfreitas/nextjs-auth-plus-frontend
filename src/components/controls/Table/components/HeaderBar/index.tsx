import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';

interface Props {
    title?: string;
}

const HeaderBar: React.FC<Props> = ({ title }) => {
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

    return <HeaderBar />;
};

export default HeaderBar;
