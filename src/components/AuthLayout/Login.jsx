import React from 'react';
import { useForm } from 'react-hook-form';
import {  Link } from 'react-router';

const Login = () => {
    const {register,handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)
    }
    return (
        // react awesome components /'react hook form'

               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
           <h1 className="text-5xl font-bold">Please Login</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
           type="email"
          
            {...register('email',{required: true })}
            aria-invalid={errors.email ? "true" : "false" }
              className="input"
              placeholder="Email" />

           {errors.email && <p className='text-red-600' role="alert">Email Address is required</p>}

          <label className="label">Password</label>
          <input
           type="password"
           {...register('password',
           {required:true, 
           minLength: 6})} 
           className="input" 
           placeholder="Password" />

               {
                  errors.password?.type === "required" && (
                  <p className='text-red-600'>Password is required</p> )
               }

               {
                errors.password?.type === "minLength" && (
                    <p className='text-red-600'>Password must be 6 characters and longer</p> )
                
               }
     

          <div><Link className="link link-hover">Forgot password?</Link></div>
           <button className="btn bg-[#CAEB66] text-black mt-4">Login</button>
        </fieldset>
        <p>New to this website?<Link className='btn btn-link' to={'/register'}>Register</Link></p>
       </form>
       </div>
       </div>

    );
};

export default Login;