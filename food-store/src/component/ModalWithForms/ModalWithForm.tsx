// import  { useHandleClose } from "../../../src/lib/hooks/useHandleClose";


function ModalWithForm({children, title, handleClose, isOpen, onSubmit, buttonText, hideSubmit = false}: any) {
    return (
        <div><div>
            <h2>{title}</h2>
            <button onClick={handleClose} type="button">{buttonText}</button>
            <form onSubmit={onSubmit}>
                {children}
                {!hideSubmit && <button type="submit">{buttonText}</button>}
            </form>
        </div></div>
    );
}