import {Link} from 'react-router-dom';

const Login = () => {
 
  return (
 <div className='w-full h-screen md:flex items-start'>
    <div className='relative w-2/3 h-full flex flex-col'>
      <div className='absolute top-[20%] left-[10%] flex flex-col'>
        <h1 className='text-4xl text-white font-normal my-4'>MyABCM Support Portal</h1>
      </div>
      <img src='https://cdn.eadplataforma.app/client/myabcm/upload/crop/others/f625aec40ff01c8adbfafa8b50d6c031.png-login-cover.png' className='w-full h-full object-cover' alt=''/>
    </div> 

    <div className='w-1/3 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
      <img src='https://cdn.eadplataforma.app/client/myabcm/upload/others/753689c9b3db9008b0296c49aadc0ad9.png' alt=''/>


      <div className='w-full flex flex-col max-w-[100%%]'>
        <div className='w-full flex flex-col mb-2'>
          <h3 className='text-3xl text-[#14335C] font-semibold mb-2'>Login</h3>  
          <p className='text-base mb-2'></p>
        </div>
      

      <div className='w-full flex flex-col'>
        <input 
        type="email"
        placeholder="Email"
        className='w-full text-[#14335C] py-2 my-2 bg-transparent border-b border-[#14335C] outline-none focus:outline-none'/>
        <input 
        type="password"
        placeholder="Password"
        className='w-full text-[#14335C] py-2 my-2 bg-transparent border-b border-[#14335C] outline-none focus:outline-none'/>      
      </div>
      
      <div className='w-full flex items-center justify-between my-3'>
        <div>
        </div>
        <p className='text-sm font-medium text-[#14335C] whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
      </div>
      <div className='w-full flex flex-col'>
      <Link to='/Home'><button type='button' className='w-full text-white my-2 font-semibold bg-[#14335C] hover:bg-[#14335C]/70 rounded-md p-4 text-center flex intems-center justify-center cursor-pointer'>
        Log in
        </button></Link>
        <button type='button' className='w-full text-[#14335C] my-2 bg-white border hover:bg-[#14335C]/10 border-black/40 rounded-md p-4 text-center flex intems-center justify-center cursor-pointer'>
        Register
        </button>
      </div>
      <div className='w-full flex items-center justify-center relative py-2'>
        <div className='w-full h-[1px] bg-black'></div>
        <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>OR</p>
      </div>
      <div className='w-full text-[#060606] my-2 bg-white border border-black/40 rounded-md p-4 text-center flex intems-center justify-center cursor-pointer'>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAARVBMVEXzUyWBvAYFpvD/ugjz8/Pz8/T08/Pz9PTz9PP/ugCAvADzTx7/uRDz8O/u8fPw8e7+ux/zVyyEvRgeqfDzXziJwCn+vSiw838OAAAA20lEQVRoge3ayw6CMBCF4aKdmVJALorv/6hSLro9JamJ5vxr8qWB1UlxvmCuOC4GJeuzYJ+TByhvi61YQTZcfIM1dib9VEFNSV9wC41DOvAIVFWah7sNj8jBI3HixIkTJ06cOHHixIn/Dg7p++BC9lZ84+JHrEfC5wlq3qeitw4sDegeTI4Fja1zs1PzHJzcegq/gWnGa7ENV7uD3VT654C1f1C1C1jC2xqqzcXXkw/1FYg4ceLEiRMnTpw4ceLE/w4vOrhWfGixju0fMua5YXfhIXxnnhf9qaBUL172fWpjLCAuAAAAAElFTkSuQmCC' className='h-6 mr-2' alt=''/> Sign In with SSO
      </div>
    </div>

      <div className='w-full flex items-center justify-center'>
      <p className='text-sm font-normal text-[#14335C]'>Don't have a account ? <Link to='https://forms.office.com/Pages/ResponsePage.aspx?id=8Cpd8_38tkOX4MpDvuttySoNTdTv6wtOsNUoCOTLFEFURjJNRVRJQkw4NkpXRlA1QVROR0owN01ZVi4u' className='font-semibold underline underline-offset-2 cursor-pointer' >Create profile</Link></p>  
      </div> 
      
    </div>
 </div>
  )
  
}

export default Login;
