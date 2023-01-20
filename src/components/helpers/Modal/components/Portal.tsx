import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
    const modalContainer = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let portalElement = document.getElementById('modal-container');
        if (!portalElement) {
            // this is for testing since modal-container doesn't exist
            portalElement = document.createElement('div');
            portalElement.setAttribute('id', 'modal-container');
            document.body.appendChild(portalElement);
        }

        modalContainer.current = portalElement;
        document.querySelector('body')?.style.setProperty('overflow', 'hidden');
        setMounted(true);
        return () => {
            document.querySelector('body')?.style.removeProperty('overflow');
            setMounted(false);
        };
    }, []);

    if (!mounted || !modalContainer.current) return null;

    return ReactDOM.createPortal(children, modalContainer.current);
};

export default Portal;
