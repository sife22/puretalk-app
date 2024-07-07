import React, { useEffect, useState } from 'react'
import './ChatList.css'
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useChatStore } from "../../../lib/chatStore";

function ChatList() {
    const [addMode, setAddMode] = useState(false);
    const { currentUser } = useUserStore();
    const { chatId, changeChat } = useChatStore();
    const [input, setInput] = useState('');

    console.log(chatId);

    const [chats, setChats] = useState([]);
    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const items = res.data().chats;
                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, 'users', item.receiverId);
                    const userDocSnap = await getDoc(userDocRef);
                    const user = userDocSnap.data();
                    return { ...item, user };
                })

                const chatData = await Promise.all(promises);
                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            });

        return () => {
            unSub();
        }

    }, [currentUser.id])

    const handleSelect = async (chat) => {
        const userChats = chats.map((item) => {
            const { user, ...rest } = item;
            return rest
        });

        const chatIndex = userChats.findIndex(item => item.chatId === chat.chatId)

        userChats[chatIndex].isSeen = true;
        const userChatsRef = doc(db, 'userchats', currentUser.id);

        try {
            await updateDoc(userChatsRef, {
                chats: userChats,
            });
            changeChat(chat.chatId, chat.user);
        } catch (error) {
            console.log(error);
        }
    }

    const filtredChats = chats.filter((c) =>
        c.user.username.includes(input)
    )
    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" srcSet="" />
                    <input type="text" placeholder='Search...' onChange={(e) => setInput(e.target.value)} />
                </div>
                <img src={addMode ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/512/992/992651.png"} alt="" srcSet="" className='add'
                    onClick={() => setAddMode((prev) => !prev)} />
            </div>
            {filtredChats.map((chat) => (
                <div className='item' key={chat.chatId} onClick={() => handleSelect(chat)} style={{ backgroundColor: chat?.isSeen ? 'transparent' : "#5183fe" }}>
                    <img src={chat.user.blocked.includes(currentUser.id) ? "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" : chat.user.avatar || "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"} alt="" srcSet="" />
                    <div className='texts'>
                        <span>{chat.user.blocked.includes(currentUser.id) ? 'User' : chat.user.username}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
            {addMode && <AddUser />}

        </div>
    )
}

export default ChatList
