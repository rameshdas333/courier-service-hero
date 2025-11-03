import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {register,handleSubmit,formState:{errors}}= useForm()
    const onSubmit = data=>{
        console.log(data)
    }
    return (

  
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="fieldset">
        <h1 className="text-5xl font-bold">Create An Account.</h1>

          <label className="label">Email</label>
          <input type="email"
          {...register('email',
            {required:true})}
           className="input"
            placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" 
          {...register('password',
            {required:true, 
              pattern:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/ , minLength:6})}
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

             {
                errors.password?.type === "pattern" && (
                    <p className='text-red-600'>least one lowercase, one uppercase, and one number</p> )
                
            }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
      </div>
    </div>
 
 
   
 

    );
};

export default Register;