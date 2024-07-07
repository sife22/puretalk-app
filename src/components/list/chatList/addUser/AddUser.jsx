import React, { useState } from 'react'
import './AddUser.css'
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from '../../../../lib/firebase';

function AddUser() {

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
    return (
        <div className='addUser'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Enter the username : ' name='username' />
                <button>Search</button>
            </form>
            {user &&
                <div className='user'>
                    <div className="detail">
                        <img src={user.avatar || 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg'} alt="" srcset="" />
                        <span>{user.username}</span>
                    </div>
                    <button>Add user</button>
                </div>
            }
        </div >
    )
}

export default AddUser
