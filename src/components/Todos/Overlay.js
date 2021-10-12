const Overlay = (props) => {
    return(
        <div className="backdrop" onClick={props.onClose} />
    );
};

export default Overlay;