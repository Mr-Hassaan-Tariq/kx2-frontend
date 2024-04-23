import React, { useState } from 'react'
import style from "./Form.module.css";
import SideLog from "../../Assets/sideLogo.png";

import { Link } from "react-router-dom";

import {toast,ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const LinkStyle = {
    textDecoration: 'none',
    color: '#000'
}


export default function Login() {
    const navigator = useNavigate()

    const [user,setUser] = useState({
        name:'',
        password:''
    })

    const change = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submit = ()=>{
        if(user.name === 'admin' && user.password === 'admin')
        {
            localStorage.setItem('user',JSON.stringify({user:'admin'}))
            navigator('/');
        }
        else{
            toast.warning('Username or password is in-valid.')
        }
    }
    return (

        <div className={style.mainBox}>

            <div className={style.bottomBox}>
                <h3>Welcome!</h3>
                <p>
                    Use these awesome forms to login or create new account in your project
                    for free.
                </p>
            </div>
            <div className={style.imgAndForm}>
                <div className={style.sideBox}>
                    <img src={SideLog} width="100%" />
                </div>
                <div className={style.formBox}>
                    <h2>Sign In With Credentials</h2>

                    <section>
                        <input type="email" value={user.name} name='name' onChange={change} placeholder="Email" />
                        <br /> 
                        <input type="password" value={user.password} name='password' onChange={change} placeholder="Password" />
                        {/* <p>Remember Me</p> */}
                    </section>
                        <button onClick={submit}>SIGN IN</button>
                </div>

                <ToastContainer className={'mt-5'} />
            </div>
        </div>
    )
}
