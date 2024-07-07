import React from 'react'
import "./Detail.css"
import { useUserStore } from '../../lib/userStore';
import { auth, db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';


function Detail() {

    const { fetchUserInfo } = useUserStore();
    const handleLogout = () => {
        auth.signOut();
    }

    const { chatId,
        user,
        isCurrentUserBlocked,
        isReceiverBlocked, changeBlock } = useChatStore();
    const { currentUser } = useUserStore();

    const handleBlock = async () => {
        if (!user) return;
        const userDocRef = doc(db, "users", currentUser.id)
        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            })
            changeBlock()
        } catch (error) {

        }
    }
    return (
        <div className='detail'>
            <div className="user">
                <img src={user?.avatar || "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"} alt="" srcSet="" />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="info">
                <div className='bottom'>
                    <button className='blockButton' onClick={handleBlock}>{isCurrentUserBlocked ? "You are blocked" : isReceiverBlocked ? 'User blocked' : 'Block user'}</button>
                    <button className='logoutButton' onClick={handleLogout}>LogOut</button>
                </div>
            </div>
        </div>
    )
}

export default Detail
