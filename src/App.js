import React, {useState} from 'react';
import './style.css'

export default function App() {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            isJoined: false
        }
    )

    function handleChange(event) {
        const {name, type, value, checked} = event.target
        setFormData((prevData) => {
            return (
                {
                    ...prevData,
                    [name]: type === "checkbox" ? checked : value
                }
            )
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmPassword){
            if (formData.isJoined){
                console.log("Sign Up Successful \nThanks for signing up for our newsletter!")
            }
            else{
                console.log("Sign Up Successfull")
            }
        }
        else {
            console.log("Passwords do not match")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                placeholder='Email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type='password'
                placeholder='Password' 
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type='password'
                placeholder='Confirm Password' 
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <div className='checkbox-container'>
            <input
                id='isJoined'
                type='checkbox'
                name='isJoined'
                checked={formData.isJoined}
                onChange={handleChange}
            />
            <label 
            htmlFor='isJoined'>
                I want to join the newsletter
            </label>
            </div>
            <button>Sign up</button>
        </form>
        </>
    )
}