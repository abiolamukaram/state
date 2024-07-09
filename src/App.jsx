// import React from 'react'
// // step1: declare state useState hook
// import { useState} from 'react'
// const App = () => {
//   // step 2: state variable and function
//   const [nameState,setNameState] = useState("Abiola")
//   const [jobState,setJobState] = useState('full-stack developer')
//   const [nokState,setNokState] = useState('two kids')
//   // step3: create event
//   const induction =() => {
//     setNameState("Engr. Abiola")
//     setJobState("solar Engineer")
//     setNokState("3 kids")
//   }
//   const reset=() => {
//     setNameState("Abiola")
//     setJobState("full-stack developer")
//     setNokState("two kids")
//   }
//   return (
//   <>
//     <h1 className=''> Hello my name is {nameState}, i'm a  {jobState} and i have {nokState}.</h1>
//     <button className='ring p-1 rounded m-1'onClick={induction}>induction</button>
//     <button className='ring p-1 rounded m-1'onClick={reset}>reset</button>
//   </>
//   )
// }

// export default App

//  Creating a form 
import React from 'react'
import { useState} from 'react'
const App = () => {
  const [emailState,setEmailState] = useState("")
  const [passwordState,setPasswordState] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {emailState, passwordState}
    console.log(formData)
  }
  return (
    <div className='bg-slate-100 min-h-screen flex items-center justify-center'>
      <form className='border min-w-[300px] p-3 bg-slate-50 rounded' action="" onSubmit={submitForm}>
        <div className='flex justify-between items-center mb-3 '>
        <label htmlFor="email">Email Address</label>
        <input 
        value={emailState}
        onChange={(e) => setEmailState(e.target.value)}
        className='rounded p-1 m-1' 
        type="email" 
        name='email' 
        id='email' 
        placeholder='enter your email address' />
        </div>
        <div className='flex justify-between items-center'>
        <label htmlFor="password">password</label>
        <input 
        value={passwordState}
        onChange={(e) => setPasswordState(e.target.value)}
        className='rounded p-1 m-1' 
        type="password" 
        name='password' 
        id='password' 
        placeholder='enter your password' />
        </div>
        <button className='w-full rounded bg-black text-white hover:bg-gray-900 mt-3 text-center'>Login</button>
      </form>
    </div>
  )
}

export default App
