import React, { useState } from 'react'
import CustomCard from '../../components/customCard';
import { FiHexagon } from 'react-icons/fi';
import { BsFillHexagonFill } from 'react-icons/bs';

const ReactOut = ({setScene}) => {
  return (
    <CustomCard setScene={setScene} className={" z-1 max-h-[75svh] "}>
        <div className='sm:flex sm:justify-between space-y-4 sm:space-y-0 sm:gap-4 text-white overflow-y-auto  max-h-[70svh] sm:max-h-fit px-2 '>
<div className=' text-lg  flex flex-col justify-between'>
    <p className='font-light'>We’re absolutely thrilled to hear from you! Whether you need our help or just want to dive into a fun chat about games, don’t hesitate to reach out. We’re here, excited, and ready to connect with you! </p>
    <div className=' hidden sm:block mt-4  space-y-4'>
      <h1 className='text-[28px] font-bold mb-6'>  Contact Email</h1>
      <div className='flex justify-between flex-wrap gap-4'>

      <div className='space-y-1'>

<h2 className='text-xl font-semibold'> General Enquiry</h2>
<p className='text-sm text-gray-300'> contact@liquidnitrogames.com</p>
      </div>
      <div className='space-y-1'>

<h2 className='text-xl font-semibold'> Business Developement</h2>
<p className='text-sm text-gray-300'> info@liquidnitrogames.com</p>
      </div>
      <div className='space-y-1'>

<h2 className='text-xl font-semibold'> P&R Media Request</h2>
<p className='text-sm text-gray-300'> contact@liquidnitrogames.com</p>
      </div>
      </div>
        </div>
        <div className='sm:block hidden'>

    <p className='mt-4 mb-2  text-2xl font-bold '>You can visit at:</p>
    <p className=' sm:block hidden text-[20px] font-light'>THE DISTRICT <br />
    5th floor, The District, Myscape Rd, Financial District, <br /> Nanakramguda, Telangana 500032</p>
        </div>
</div>
        <FormCard/>
        <div className='sm:hidden mt-4 text-center space-y-4'>
      <h1 className='text-xl font-bold mb-6'>  Contact Email</h1>
      <div className='space-y-1'>

<h2 className='font-lg font-semibold'> General Enquiry</h2>
<p className='text-sm text-gray-300'> contact@liquidnitrogames.com</p>
      </div>
      <div className='space-y-1'>

<h2 className='font-lg font-semibold'> Business Developement</h2>
<p className='text-sm text-gray-300'> info@liquidnitrogames.com</p>
      </div>
      <div className='space-y-1'>

<h2 className='font-lg font-semibold'> P&R Media Request</h2>
<p className='text-sm text-gray-300'> contact@liquidnitrogames.com</p>
      </div>
        </div>
        </div>

    </CustomCard>
  )
}

const FormCard = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <div className="bg-[#0d1117] p-4 rounded-lg w-full max-w-md mx-auto z-10">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-sm">FULL NAME</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="mt-2 p-2 bg-transparent border-b border-[#5A8AC4] text-white outline-none placeholder-[#5A8AC4]"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="text-white text-sm">EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="Enter your email Address..."
              className="mt-2 p-2 bg-transparent border-b border-[#5A8AC4] text-white outline-none placeholder-[#5A8AC4]"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="text-white text-sm">PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number..."
              className="mt-2 p-2 bg-transparent border-b border-[#5A8AC4] text-white outline-none placeholder-[#5A8AC4]"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="text-white text-sm">YOUR MESSAGE</label>
            <textarea
              placeholder="Enter your message..."
              className="mt-2 p-2 bg-transparent border-b border-[#5A8AC4] text-white outline-none placeholder-[#5A8AC4]"
              rows="3"
            />
          </div>
  
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="privacyPolicy"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="text-[#5A8AC4] form-checkbox hidden"
            />
               <div className='text-lg text-white inline hover:cursor-pointer'
               onClick={()=>document.querySelector("#privacyPolicy").click() }
               >
 {isChecked ? <BsFillHexagonFill color='#5A8AC4'/>:  <FiHexagon/>}
   </div>
            <label htmlFor="privacyPolicy" className="text-white text-sm">
              I accept the <a href="#" className="text-[#5A8AC4] hover:underline">privacy policy</a>*
            </label>

          </div>
          <div>

          </div>
  
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  
export default ReactOut