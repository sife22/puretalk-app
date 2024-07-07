import React, { useState } from 'react'
import './ChatList.css'

function ChatList() {
    const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList'> 
        <div className='search'>
            <div className='searchBar'>
                <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" srcset="" />
                <input type="text" placeholder='Search...'/>
            </div>
            <img src={addMode ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/512/992/992651.png"} alt="" srcset="" className='add' 
            onClick={()=>setAddMode((prev)=>!prev)} />
        </div>
        <div className='item'>
            <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
            <div className='texts'>
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='item'>
            <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
            <div className='texts'>
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='item'>
            <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
            <div className='texts'>
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='item'>
            <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
            <div className='texts'>
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='item'>
            <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" srcset="" />
            <div className='texts'>
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>

    </div>
  )
}

export default ChatList
