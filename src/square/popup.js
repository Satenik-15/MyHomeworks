import "../styles/square.css";

const Popup = ({ count, open, onClose }) => {
    if (!open) return null;
    return (
        <div className="popup" onClick={ onClose }>
            <p style={{textAlign: "center"}}>You clicked { count } times</p>
        </div>
    )
}


export default Popup;