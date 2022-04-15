import React from 'react'
// import Loader from "react-loader-spinner"
import {Rings} from 'react-loader-spinner';

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
       <Rings 
        color="#00BFFF" 
        height={50}
        width={200} 
        className="m-2"/>
        <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner



{/* <Loader
            type="Circles"
            color="#00bFFF"
            height={50}
            width={200}
            className="m-2"
         /> */}