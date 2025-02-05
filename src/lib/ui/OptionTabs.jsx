
// import React from 'react'

// const OptionTabs = ({label,tabOptions}) => {
//   return (

//     <select className='p-2 rounded-lg border'>
//       {
//         tabOptions?.map((item,index)=>(<option className=' appearance-none hover:bg-red-500' key={index} value={item?.value}>{item?.option}</option>))
//       }
//     </select>

//   )
// }

// export default OptionTabs


import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const OptionTabs = ({setValue,register,errors,label,tabOptions}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected,setSelected]=useState('Select a Role')

  const dropdownRef = useRef(null);

  // Function to toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
<label className="flex flex-col">
{label}
<div className="relative inline-block " ref={dropdownRef}>
      <button
       type="button"
        onClick={toggleDropdown}
        className={`px-4 py-2 border rounded-lg flex justify-between items-center gap-3 min-w-[50%] ${errors[`${label}`] && "border-red-500 outline-red-500"} `}
  
        {...register(`${label}`, { required: true })} 
      >
        {selected} <Image alt="up" src={isOpen ? `/arrow/arrowUp.svg` : `/arrow/arrowDown.svg`} height={15} width={15}/>
      </button>
      {errors[`${label}`] && <p className='text-red-500 text-sm absolute'>*{label} is required.</p>}
      {isOpen && (
        <div className="absolute mt-2  min-w-[50%] bg-white border rounded-md shadow-lg z-50">
          <ul className="py-2">
            {
              tabOptions?.map((item,index)=>(<li onClick={(e)=>{
                toggleDropdown(e)
                setSelected(item?.value)
                setValue(`${label}` , item?.value )
              }} className=' px-4 py-2 hover:bg-[#ea7aa74b] cursor-pointer ' key={index} value={item?.value}>{item?.option}</li>))
            }

          </ul>
        </div>
      )}
    </div>

</label>
  );
};

export default OptionTabs;
