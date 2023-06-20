import React from 'react'
import { useForm } from "react-hook-form";
const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
  return (
<>
 
 <div class="h-screen bg-indigo-200 flex justify-center items-center">
  <form class="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" action="">
    <label class="text-gray-700 font-bold py-2" for="">Username</label>
    <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Username" />
    <label class="text-gray-700 font-bold py-2" for="">Password</label>
    <input class="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline" type="password" placeholder="********" />
    <div class="flex justify-between items-center my-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
        Sign In
      </button>
      <a class="text-blue-600 hover:text-blue-800 font-bold" href="#">
        Forgot Password?
      </a>
    </div>
    
  </form>
</div>


   </>
  )
}

export default Login