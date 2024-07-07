import React from 'react'
import "./UserInfo.css"
import { useUserStore } from '../../../lib/userStore';

function UserInfo() {
  const {currentUser} = useUserStore();

  return (
    <div className='userInfo'>
        <div className='user'>
            <img src={currentUser.avatar || 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg'} alt=""/>
            <h2>{currentUser.username}</h2>
        </div>
        <div className='icons'>
            <img src="https://cdn.icon-icons.com/icons2/488/PNG/512/more_47707.png" alt="" srcset="" />
            <img src="https://cdn-icons-png.flaticon.com/512/4237/4237818.png" alt="" srcset="" />
            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" srcset="" />
        </div>
    </div>
  )
}

export default UserInfo
