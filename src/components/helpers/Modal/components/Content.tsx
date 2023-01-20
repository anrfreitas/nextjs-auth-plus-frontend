/**
 * A wrapper that adds the paddings and enables the vertical scrolling on the
 * content of the modal.
 */
const ModalContent = ({ children }) => (
    // last:pb-10 provides the proper bottom padding when no footer is present
    <div className="overflow-hidden px-10 pt-2 pb-4 first:pt-10 last:pb-10">
        {/* 2 top padding inside the child because inputs are clipping */}
        <div className="h-full overflow-auto pt-2">{children}</div>
    </div>
);

export default ModalContent;
