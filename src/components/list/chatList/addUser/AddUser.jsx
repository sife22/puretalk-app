import React from 'react'
import './AddUser.css'

function AddUser() {
    return (
        <div className='addUser'>
            <form>
                <input type="text" placeholder='Enter the username : ' />
                <button>Search</button>
            </form>
            <div className='user'>
                <div className="detail">
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
                    <span>Jane Doe</span>
                </div>
                <button>Add user</button>
            </div>
        </div >
    )
}

export default AddUser
