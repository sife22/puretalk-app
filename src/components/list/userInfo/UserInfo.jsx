import React from 'react'
import "./UserInfo.css"
import { useUserStore } from '../../../lib/userStore';
import { auth } from '../../../lib/firebase';

function UserInfo() {
  const { currentUser } = useUserStore();

  const handleLogout = () => {
    auth.signOut();
  }

  return (
    <div className='userInfo'>
      <div className='user'>
        <img src={currentUser.avatar || 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg'} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      {/* <div className='icons'>
            <img src="https://cdn.icon-icons.com/icons2/488/PNG/512/more_47707.png" alt="" srcSet="" />
            <img src="https://cdn-icons-png.flaticon.com/512/4237/4237818.png" alt="" srcSet="" />
            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" srcSet="" />
        </div> */}
      <div className='icons'>
        <img src="https://www.svgviewer.dev/static-svgs/33599/logout.svg" alt="" srcSet="" onClick={handleLogout} />
      </div>

    </div>
  )
}

export default UserInfo
