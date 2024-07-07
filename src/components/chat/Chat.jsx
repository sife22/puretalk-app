import React, { useState, useRef, useEffect } from 'react'
import "./Chat.css"
import EmojiPicker from 'emoji-picker-react'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import upload from '../../lib/upload';

function Chat() {
    const { chatId, user, isCurrentUserBlocked,
        isReceiverBlocked } = useChatStore();
    const { currentUser } = useUserStore();

    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [img, setImg] = useState({
        file: null,
        url: ""
    });
    const [chat, setChat] = useState(false);
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [])

    const handleSend = async () => {
        if (text === "") return;

        let imgUrl = null;

        try {

            if (img.file) {
                imgUrl = await upload(img.file)
            }
            await updateDoc(doc(db, 'chats', chatId), {
                messages: arrayUnion({
                    senderId: currentUser.id,
                    text,
                    createdAt: new Date(),
                    ...(imgUrl && { img: imgUrl })
                })
            })

            const userIDs = [currentUser.id, user.id];

            userIDs.forEach(async (id) => {


                const userChatsRef = doc(db, 'userchats', id);
                const userChatsSnapshot = await getDoc(userChatsRef);

                if (userChatsSnapshot.exists()) {
                    const userChatsData = userChatsSnapshot.data()
                    const chatIndex = userChatsData.chats.findIndex(c => c.chatId === chatId)

                    userChatsData.chats[chatIndex].lastMessage = text;
                    userChatsData.chats[chatIndex].isSeen =
                        id === currentUser.id ? true : false;
                    userChatsData.chats[chatIndex].updatedAt = Date.now();

                    await updateDoc(userChatsRef, {
                        chats: userChatsData.chats,
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
        setImg({
            file: null,
            url: ""
        })
        setText('')
    }

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
            setChat(res.data());
        })
        return () => {
            unSub();
        }
    }, [chatId])
    console.log(chat);
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }

    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImg({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                <img src={user?.avatar || "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" } alt="" srcSet="" />
                    <div className='texts'>
                        <span>{user?.username}</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid" alt="" srcSet="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/4503/4503915.png" alt="" srcSet="" />
                    <img src="https://cdn-icons-png.flaticon.com/256/64/64159.png" alt="" srcSet="" />
                </div>
            </div>


            <div className='center'>
                {chat?.messages?.map((message) => (
                    <div className={message.senderId === currentUser?.id ? 'message own' : 'message'} key={message?.createdAt}>
                        <div className="texts">
                            {message.img &&
                                <img src={message.img} alt="" srcSet="" />
                            }

                            <p>{message.text}</p>
                            {/* <span>2 min ago</span> */}
                        </div>
                    </div>
                ))}

                {img.url && (

                    <div className="message own">
                        <div className="texts">
                            <img src={img.url} alt="" srcset="" />
                        </div>
                    </div>
                )}

                <div ref={endRef}></div>
            </div>


            <div className='bottom'>
                <div className='icons'>
                    <label htmlFor="file">
                        <img src="https://cdn-icons-png.flaticon.com/512/1375/1375106.png" alt="" />
                    </label>
                    <input type="file" id='file' style={{ display: "none" }} onChange={handleImg} />
                </div>
                <input type="text"
                    placeholder={isCurrentUserBlocked || isReceiverBlocked ? '' : 'Enter something...'}
                    value={text}
                    disabled={isCurrentUserBlocked || isReceiverBlocked}
                    onChange={(e) => setText(e.target.value)} />
                <div className='emoji'>
                    <img src="https://static-00.iconduck.com/assets.00/emoji-smile-icon-2048x2048-93ogyjms.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                    <div className='picker'>

                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className='sendButton' onClick={handleSend} disabled={isCurrentUserBlocked || isReceiverBlocked} >Send</button>
            </div>
        </div>
    )
}

export default Chat
