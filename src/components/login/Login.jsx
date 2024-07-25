import React, { useState } from 'react'
import "./Login.css"
import { toast } from 'react-toastify'
import { auth, db } from '../../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import upload from '../../lib/upload';



function Login() {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);
        const {email, password} = Object.fromEntries(formData)

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Bienvenu chez vous")
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        setLoading(true);

        const imgUrl = await upload(avatar.file);

        // Pour récuperer toutes les valeurs de notre forme à partir de l'attribut name
        const formData = new FormData(e.target);

        // Cette fonction nous permet de créer une liste de clé valeur à partir de formData
        const { username, email, password } = Object.fromEntries(formData)

        console.log(username, email, password);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", response.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: response.user.uid,
                // Dans cet attribut, on va stocker la liste des gens qui sont bloqués par lui
                blocked: []
            });

            await setDoc(doc(db, "userchats", response.user.uid), {
                chats: []
            });

            toast.success("Vous avez crée votre compte avec succès");
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleLogin}>
                <h1 className='title__puretalk'>PureTalk App</h1>
                <h1 className='title'>Welcome back</h1>
                <div className='actions'>
                    <input type="email" placeholder='Enter your email : ' name='email' />
                    <input type="password" placeholder='Enter your password : ' name='password' />
                    <button disabled={loading}>{loading ? 'Loading' : 'Sign in'}</button>
                </div>
            </form>
            <form className='registerForm' onSubmit={handleRegister}>
                <h1 className='title'>Create your futur account</h1>
                <div className='actions'>
                    <div className='file'>
                        <img src={avatar.url || "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"} alt="" srcset="" />
                        <input type="file" placeholder='Enter an username : ' onChange={handleAvatar} />
                    </div>
                    <input type="text" placeholder='Username : ' name='username' />
                    <input type="email" placeholder='Email : ' name='email' />
                    <input type="password" placeholder='Password : ' name='password' />
                    <button disabled={loading}>{loading ? 'Loading' : 'Sign up'}</button>
                </div>
            </form>

        </div>
    )
}

export default Login
