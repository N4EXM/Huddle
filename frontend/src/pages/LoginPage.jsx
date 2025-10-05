import React, { useEffect, useState } from 'react'

const LoginPage = () => {

  // toggles
  const [showPassword, setShowPassword] = useState(false)

  // state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div
      className='w-full h-screen bg-gradient-to-tl from-secondBackground via-background to-primary  flex items-center justify-center'
    >

      <div
        className='flex flex-col p-10 gap-10 shadow-background shadwo-2xl bg-secondBackground border-2 border-primary rounded-md w-96 h-[30rem]'
      >

        {/* title */}
        <div
          className='flex flex-col gap-2 '
        >
          <h1
            className='text-4xl font-bold text-text'
          >
            Sign In
          </h1>
          <p
            className='text-sm font-medium text-dimText'
          >
            Welcome back! please login in to your account.        
          </p>
        </div>

        {/* input fields */}
        <div
          className='flex flex-col gap-5 w-full h-fit text-text relative'
        >
          {/* email */}
          <div
            className='flex flex-col gap-2 w-full h-fit'
          >
            <label 
              htmlFor=""
              className='pl-1 text-xs font-medium'  
            >
              Email
            </label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-sm w-full p-2 pl-3 rounded-md  bg-background border-2 border-primary/70 outline-none '
              placeholder='Enter your email'  
            />
          </div>

          {/* password */}
          <div
            className='flex flex-col gap-2 w-full h-fit relative'
          >
            <label 
              htmlFor=""
              className='pl-1 text-xs font-medium'  
            >
              Password
            </label>
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className=' text-sm w-full p-2 pl-3 rounded-md outline-none border-primary/70 bg-background border-2'
              placeholder='Enter your password'  

            />
            <button
              className='absolute top-6 right-0 p-2 py-2.5 text-primary'
              onClick={() => setShowPassword(!showPassword)}
            >
              {
                showPassword
                ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" />
                    <path fill="currentcolor" fillRule="evenodd" d="M12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066c.49.705 1.186 1.429 2.036 2.08C7.028 17.45 9.382 18.5 12 18.5s4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08C16.972 6.55 14.618 5.5 12 5.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd" />
                  </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentcolor" fillRule="evenodd" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l3.035-3.035C8.883 18.103 10.392 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08q-.406-.313-.86-.601zm-5.4 5.402l-1.1 1.098a2.25 2.25 0 0 1-3 3l-1.1 1.1a3.75 3.75 0 0 0 5.197-5.197" clipRule="evenodd" />
                    <path fill="currentcolor" d="M12.67 8.31a.26.26 0 0 0 .23-.07l1.95-1.95a.243.243 0 0 0-.104-.407A10.2 10.2 0 0 0 12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066a9.3 9.3 0 0 0 1.672 1.79a.246.246 0 0 0 .332-.017l2.94-2.94a.26.26 0 0 0 .07-.23q-.06-.325-.06-.669a3.75 3.75 0 0 1 4.42-3.69" />
                  </svg>
              }
            </button>
          </div>

          {/* forgot password */}
          <button className='text-start text-xs text-dimText pl-0.5 absolute top-40 right-0 hover:text-primary/80 duration-200'>
              Forgot your password?
          </button>

          <button
            className='mt-10 bg-primary p-2 rounded-md font-medium text-sm duration-200 hover:bg-primary/80 active:bg-primary/60 hover:text-text/80 active:text-text/60'
          >
            Log In
          </button>

          <button
            className='text-xs text-dimText hover:text-primary/80 duration-200 '
          >
            Already have an account? <span className='font-medium'>Sign In</span>
          </button>

        </div>

      </div>

    </div>
  )
}

export default LoginPage