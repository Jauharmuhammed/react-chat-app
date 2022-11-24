import React from 'react'
import { BsCamera } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type a Message...' />
      <div className="send">
        <input type="file" id='image' hidden />
        <label htmlFor="image">
          <BsCamera color={'rgb(167, 167, 167)'} size={20}/>
        </label>
        <button>
          <AiOutlineSend color={'rgb(167, 167, 167)'} size={20}/>
        </button>
      </div>
    </div>
  )
}

export default Input