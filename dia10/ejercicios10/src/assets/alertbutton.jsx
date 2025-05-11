function AlertButton({ message, buttonText ="Show Alert" }) {
    const handleClick = () => {
        alert(message);
    };
    return (
        <button className="button" onClick={handleClick}>
            {buttonText}
        </button>
    );
}
export default AlertButton;