import React, { useState } from 'react'
import "./Login.css"


function Login() {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = (e) =>{
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]) 
            })
        }
    }
    return (
        <div className='login'>
            <form className='loginForm'>
                <h1 className='title'>Welcome back</h1>
                <div className='actions'>
                    <input type="email" placeholder='Enter your email : ' />
                    <input type="password" placeholder='Enter your password : ' />
                    <button>Sign in</button>
                </div>
            </form>
            <form className='registerForm'>
                <h1 className='title'>Create your futur account</h1>
                <div className='actions'>
                    <div className='file'>
                        <img src={avatar.url || "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"} alt="" srcset="" />
                        <input type="file" placeholder='Enter an username : ' onChange={handleAvatar}/>
                    </div>
                    <input type="text" placeholder='Enter an username : ' />
                    <input type="email" placeholder='Enter an email : ' />
                    <input type="password" placeholder='Enter a password : ' />
                    <button>Sign up</button>
                </div>
            </form>

        </div>
    )
}

export default Login
