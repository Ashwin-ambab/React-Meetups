const Modal = (props) => {

    const onConfirmhandler = () => {
        props.onConfirm();
    };

    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={props.onCancel}>cancel</button>
            <button className="btn" onClick={onConfirmhandler}>confirm</button>
        </div>
    );
};

export default Modal;