import FormButton from '@/lib/ui/FormButton'
import InputField from '@/lib/ui/InputField'
import OptionTabs from '@/lib/ui/OptionTabs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form';
const LoginForm = () => {
    const router = useRouter()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  return (
    <div className='max-md:min-w-[40%] h-full w-full flex flex-col justify-center'>
    <div className="m-4  rounded-lg bg-white h-[80%] flex flex-col justify-center gap-14">

    <h1 className="font-bold text-center text-5xl   ">Login Form</h1>
    <form 
    onSubmit={handleSubmit((data) => console.log(data))}
    className='p-3 flex  flex-col items-center '>
<div className='flex flex-col gap-5'>
<InputField register={register} errors={errors} label={`Email`} type={`email`} placeholder={`Enter Your Email`} />
  <InputField register={register} errors={errors} label={`Password`} type={`password`} placeholder={`Enter Your Password`} />

<FormButton clickHandler={(e)=>{
    // e.preventDefault()
    // router.push("/")
}} text={"Sign In"}/>
<p>New user? <span onClick={()=>router.push("/signup")} className='text-blue-400 cursor-pointer'>Sign Up</span></p>
</div>
    </form>
    </div>
    </div>
  )
}

export default LoginForm
