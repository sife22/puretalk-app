import React, { useEffect, useState } from 'react'
import './ChatList.css'
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

function ChatList() {
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);
    const { currentUser } = useUserStore();
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id),
        async (response) => {
            const items = response.data().chats;

            const promises = items.map(async (item)=>{
                const userDocRef = doc(db, 'users', item.receiverId);
                const userDocSnap = await getDoc(userDocRef);

                const user = userDocRef.data();

                return { ...item, user}
            });

            const chatData = await Promise.all(promises);

            setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt));
        });
        return () => {
            unSub()
        }
    }, [currentUser.id])
    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" srcset="" />
                    <input type="text" placeholder='Search...' />
                </div>
                <img src={addMode ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/512/992/992651.png"} alt="" srcset="" className='add'
                    onClick={() => setAddMode((prev) => !prev)} />
            </div>

            {chats.map((chat) => {
                <div className='item' key={chat.chatId}>
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
                    <div className='texts'>
                        <span>Jane Doe</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            })}
            {addMode && <AddUser />}

        </div>
    )
}

export default ChatList
