import React from 'react'
import { useForm } from "react-hook-form";
const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
  return (
   <>
   <section>
   <div className='relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100'>

   <div className='relative sm:max-w-sm w-full'>
    <div className='bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6'>
        <div className='bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6'>
        <div className='relative w-full rounded-3xl ox-6 py-4 bg-gray-100 shadow-md'>
            <label for="" className='block mt-3 text-sm text-gray-700 text-center font-semibold '>
                register
            </label>
        </div>

        </div>
    </div>
   </div>



   </div>
   </section>


   </>
  )
}

export default Login