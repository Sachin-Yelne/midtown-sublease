import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
    const res = await fetch('/api/auth/sign-up', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    if (data.success == false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
    
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' text-dark-gray text-3xl text-center font-bold my-7'>Sign Up</h1>
      <form onSubmit= {handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder= 'Username' className='border p-3 rounded-lg' id='username'onChange={handleChange} />
        <input type="email" placeholder= 'Email' className='border p-3 rounded-lg' id='email'onChange={handleChange} />
        <input type="password" placeholder= 'Password' className='border p-3 rounded-lg' id='password'onChange={handleChange} />
        <button disabled={loading} className='bg-secondary text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
        <OAuthth/>
      </form>
      <div className=' text-dark-gray flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link className='text-blue-700'to={"/sign-in"}>Sign In</Link>
      </div>
      {error && <p className='text-red-error mt-5'>{error}</p>}
    </div>
  );
}
