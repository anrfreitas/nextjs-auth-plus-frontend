interface Aria {
    /**
     * ID references to one or multiple elements that an assistive technology is
     * going to use to label the modal.
     *
     * Read more about `aria-labelledby` [here](https://w3c.github.io/aria/#aria-labelledby).
     */
    labelledby: string;

    /**
     * ID references to one or multiple elements that an assistive technology is
     * going to use to describe the modal.
     *
     * Read more about `aria-describedby` [here](https://w3c.github.io/aria/#aria-describedby).
     */
    describedby: string;
}

interface ModalStyles {
    /**
     * The max width of the modal, the full class needs to be sent (breakpoint prefix included),
     * since tailwind doesn't allow dynamic classes.
     */
    maxWidth: `sm:max-w-${string}`;
}

export interface ModalProps {
    /**
     * The accessibility label of the modal, what the screen reader will name
     * this modal.
     *
     * This property has lower priority for assistive techologies than
     * `aria-labelledby`.
     */
    contentLabel: string;

    /**
     * The aria properties for label and description of the modal, both are
     * optional.
     */
    aria: Partial<Aria>;

    /**
     * Object to style the modal. This is done to keep the classes in a structured way.
     */
    style: Partial<ModalStyles>;

    /**
     * A callback the modal will use when trying to close the modal.
     */
    requestClose?: () => void;

    /**
     * When given, the modal is wrapped on a form element and the form will use
     * this callback `onSubmit`.
     */
    submitForm?: () => void;

    /** JSX children */
    children: any;
}

export type LoaderProps = Omit<ModalProps, 'aria' | 'style'> &
    Partial<Pick<ModalProps, 'aria' | 'style'>> & {
        /**
         * Tells the component whether to render the modal.
         */
        isOpen: boolean;
    };
