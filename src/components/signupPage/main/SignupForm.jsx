import FormButton from '@/lib/ui/FormButton'
import InputField from '@/lib/ui/InputField'
import OptionTabs from '@/lib/ui/OptionTabs'
import { Checkbox, Flex, Text } from '@radix-ui/themes'
import React from 'react'

const SignupForm = () => {
    const tabData = [{value:"Instructor",option:"Instructor"},{value:"Student",option:"Student"},{value:"Organization",option:"Organization"}]

  return (
    <div className='max-md:min-w-[40%] h-full w-full flex flex-col justify-center  '>
    <div className="m-4 rounded-lg bg-white h-[90%] flex flex-col justify-center gap-14">

    <h1 className="font-bold text-center text-5xl  ">Signup Form</h1>
    <form className='p-3 flex flex-col items-center '>
<div className='flex flex-col items-start gap-3'>
  
<InputField label={`Email`} type={`email`} placeholder={`Enter Your Email`} />
  <InputField label={`Password`} type={`password`} placeholder={`Enter Your Password`} />

  <OptionTabs label={"Role"} tabOptions={tabData} />

  <Text as="label" size="2">
	<Flex gap="2">
		<Checkbox defaultChecked />
		Agree to Terms and Conditions
	</Flex>
</Text>

<FormButton text={"Sign Up"}/>
<p>New user? <span onClick={()=>router.push("/signup")} className='text-blue-400 cursor-pointer'>Sign Up</span></p>

</div>
    </form>
    </div>
    </div>
  )
}

export default SignupForm
