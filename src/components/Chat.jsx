import React from 'react'
import { BsCameraVideo } from 'react-icons/bs';
import { BsCamera } from 'react-icons/bs';
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <div>
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          <div className="userChatInfo">
            <span>Shaikh Zayid</span>
          </div>
        </div>
        <div className="chatIcons">
          <BsCameraVideo size={22} color={'rgb(167, 167, 167)'}/>
          <BsCamera size={22} color={'rgb(167, 167, 167)'} />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat