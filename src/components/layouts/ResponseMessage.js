import './ResponseMessage.css';
function ResponseMessage(props) {
    return (
        <span className={'message-dialog '+props.messageType}>
            <p>{props.message}</p>
        </span>
    );
}

export default ResponseMessage;