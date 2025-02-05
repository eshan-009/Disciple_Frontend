
import React from 'react'

const InputField = ({register,errors,label,placeholder,type}) => {
  return (
<label className='flex flex-col min-w-72 xl:min-w-96 relative'>
{label}
      <input
       type={type}
        placeholder={placeholder}
        className={`p-2  border ${errors[`${label}`] && "border-red-500 outline-red-500"} rounded-lg`}
        {...register(`${label}`, { required: true })} 
        />
         {errors[`${label}`] && <p className='text-red-500 text-sm absolute top-16 '>*{label} is required.</p>}
    </label>

  )
}

export default InputField
