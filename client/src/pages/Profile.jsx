import React from 'react'
import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-dark-gray text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-3'>
      <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
      <input type="text" placeholder='Username' id= 'username' className='border p-3 rounded-lg'/>
      <input type="email" placeholder='Email' id= 'email' className='border p-3 rounded-lg'/>
      <input type="password" placeholder='Password' id= 'password' className='border p-3 rounded-lg'/>
      <button className='bg-secondary text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Update</button>
      
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-error cursor-pointer'>Delete Account</span>
        <span className='text-red-error cursor-pointer'>Sign Out</span>

      </div>
    </div>
  )
}
