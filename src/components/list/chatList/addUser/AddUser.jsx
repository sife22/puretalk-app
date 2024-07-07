import React, { useState } from 'react'
import './AddUser.css'
import { collection, query, where, getDocs, setDoc, serverTimestamp, doc, updateDoc, arrayUnion } from "firebase/firestore";

import { db } from '../../../../lib/firebase';
import { useUserStore } from '../../../../lib/userStore';

function AddUser() {
    const {currentUser} = useUserStore();

    const [user, setUser] = useState(null);
    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');

        try {
            const userRef = collection(db, 'users');
            const q = query(userRef, where('username', '==', username));

            const querySnapShot = await getDocs(q);

            if (!querySnapShot.empty) {
                setUser(querySnapShot.docs[0].data())
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleAdd = async () => {
        const chatRef = collection(db, 'chats')
        const userChatsRef = collection(db, 'userchats')
        try {
            const newChatRef = doc(chatRef)

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: []
            })
            await updateDoc(doc(userChatsRef, user.id), {
                chats:arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                })
            })

            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats:arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                })
            })

            

            console.log(newChatRef.id);
            
            
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='addUser'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Enter the username : ' name='username' />
                <button>Search</button>
            </form>
            {user &&
                <div className='user'>
                    <div className="detail">
                        <img src={user.avatar || 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg'} alt="" srcSet="" />
                        <span>{user.username}</span>
                    </div>
                    <button onClick={handleAdd}>Add user</button>
                </div>
            }
        </div >
    )
}

export default AddUser
