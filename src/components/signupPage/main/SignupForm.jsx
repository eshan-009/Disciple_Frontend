import FormButton from '@/lib/ui/FormButton'
import InputField from '@/lib/ui/InputField'
import OptionTabs from '@/lib/ui/OptionTabs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const SignupForm = () => {
      const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm();
  const router = useRouter()
  // const [isChecked, setIsChecked] = useState(false);
  const isChecked = watch("termsAndConditions", false);
  // const handleCheckboxChange = (e) => {
  //   console.log(e.target.checked)
  //   setIsChecked(e.target.checked);
  // };
    const tabData = [{value:"Instructor",option:"Instructor"},{value:"Student",option:"Student"},{value:"Organization",option:"Organization"}]
console.log(isChecked)
  return (
    <div className='max-md:min-w-[40%] h-full w-full flex flex-col justify-center  '>
    <div className="m-4 rounded-lg bg-white h-[90%] flex flex-col justify-evenly">

    <h1 className="font-bold text-center text-5xl  ">Signup Form</h1>
    <form 
    onSubmit={handleSubmit((data) => console.log(data))}
    className='p-3 flex  mx-auto  '>
<div className='flex flex-col items-start gap-3'>
<div className='flex justify-between w-full'>
<InputField size={"half"} register={register} errors={errors} label={`First Name`}  placeholder={`First Name`} />
<InputField size={"half"} register={register} errors={errors} label={`First Name`}  placeholder={`Last Name`} />
</div>
<InputField register={register} errors={errors} label={`Email`} type={`email`} placeholder={`Enter Your Email`} />
  <InputField register={register} errors={errors} label={`Password`} type={`password`} placeholder={`Enter Your Password`} />

  <OptionTabs setValue={setValue} register={register} errors={errors} label={"Role"} tabOptions={tabData} />

<label className='flex items-center gap-4 relative'>
  <input type='checkbox'
  //  onChange={handleCheckboxChange} 
  className={`appearance-none border h-4 w-4 rounded checked:bg-[#E93D82]`} 
  {...register(`termsAndConditions`,{required:true})} 
  />
      {isChecked && <Image alt='check' className=' absolute  ' src={`/tickMark.svg`} height={15} width={15} />}
  Agree to Terms and Conditions
</label>
{errors.termsAndConditions && <p className='text-red-500 max-xl:text-xs text-sm  translate-y-[-10px] '>*Terms & Conditions is required.</p>}
<FormButton   text={"Sign Up"}/>
<p>Already a user? <span onClick={()=>router.push("/login")} className='text-blue-400 cursor-pointer'>Sign in</span></p>

</div>
    </form>
    </div>
    </div>
  )
}

export default SignupForm
