import React from 'react'

const FormButton = ({text,clickHandler}) => {
  return (

    <button onClick={clickHandler} className='min-w-72 xl:min-w-96 mt-10 border border-[#E93D82] p-2 rounded-xl text-[#E93D82] bg-[#ea7aa74b] '>{text}</button>
  )
}

export default FormButton
