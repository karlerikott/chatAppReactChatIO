import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='1d6150de-4f5c-420d-b791-0fe9dc596b6a'
                username={props.user.username}
                secret={props.user.secter}
                style={{height: '100%'}}
                />
        </div>
    )
}

export default ChatsPage