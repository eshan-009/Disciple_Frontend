
import React from 'react'

const InputField = ({register,errors,label,placeholder,type,size}) => {
  return (
<label className={`flex flex-col ${size=="half" ? " w-32 min-w-32 xl:w-44": "w-72 min-w-72 xl:w-96"} relative `}>
{label}
      <input
       type={type}
        placeholder={placeholder}
        className={`p-2  border ${errors[`${label}`] && "border-red-500 outline-red-500"} rounded-lg`}
        {...register(`${label}`, { required: true })} 
        />
         {errors[`${label}`] && <p className='text-red-500 max-xl:text-xs text-sm absolute top-16 '>*{label} is required.</p>}
    </label>

  )
}

export default InputField
