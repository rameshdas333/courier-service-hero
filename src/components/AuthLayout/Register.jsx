import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLink from './socialLogin/SocialLink';
import UseAuth from '../../hooks/UseAuth';



const Register = () => {
    const { createUser} = UseAuth()
    const {register,handleSubmit,formState:{errors}}= useForm()
    const onSubmit = data=>{
        console.log(data)
         createUser(data.email,data.password)
         .then(result =>{
          console.log(result.user)
        })
          .catch(error =>{
            console.error(error.message)
          })
    }
    return (
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <h1 className="text-5xl font-bold">Create An Account.</h1>

              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  minLength: 6,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be 6 characters and longer
                </p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  least one lowercase, one uppercase, and one number
                </p>
              )}
              <div>
                <Link className="link text-right link-hover">Forgot password?</Link>
              </div>
              <button className="btn bg-[#CAEB66] text-black mt-4">Register</button>
            </fieldset>
            <p>Already have an Account?<Link className='btn btn-link' to={'/login'}>Login</Link></p>
            {/* Google button  */}
            <SocialLink/>
          </form>
        </div>
      </div>
    );
};

export default Register;