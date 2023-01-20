import BaseModal from './BaseModal';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { LoaderProps } from './types';

interface Loader extends React.FC<LoaderProps> {
    Header: typeof Header;
    Content: typeof Content;
    Footer: typeof Footer;
}

/**
 * For proper styles, use `Modal.Header`, `Modal.Content` and `Modal.Footer`.
 *
 * By passing a callback to the prop `submitForm`, a form element will wrap this
 * component's children.
 *
 * For accessibility, the content label must be given. But it can also receive
 * the modal's `aria-labelledby` and `aria-describedby` by passing an object to
 * the `aria` prop.
 */
const BaseModalLoader: Loader = ({
    isOpen,
    contentLabel,
    aria = {},
    style = {},
    requestClose,
    submitForm,
    children,
}) => {
    if (!isOpen) return null;

    const styleWithMaxWidth: typeof style = style.maxWidth
        ? style
        : { ...style, maxWidth: 'sm:max-w-[45rem]' };

    return (
        <BaseModal
            contentLabel={contentLabel}
            requestClose={requestClose}
            submitForm={submitForm}
            aria={aria}
            style={styleWithMaxWidth}
        >
            {children}
        </BaseModal>
    );
};

BaseModalLoader.Header = Header;
BaseModalLoader.Content = Content;
BaseModalLoader.Footer = Footer;

export default BaseModalLoader;
