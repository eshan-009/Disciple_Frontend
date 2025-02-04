
import React from 'react'

const InputField = ({label,placeholder,type}) => {
  return (
    <label className='flex flex-col min-w-72 xl:min-w-96'>
{label}
      <input
       type={type}
        placeholder={placeholder}
        className='p-2 outline-gray-500 border rounded-lg '
        />
    </label>

  )
}

export default InputField
