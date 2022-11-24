import React from 'react'

const Message = () => {
  return (
    <div className='message '>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1668479241831-bc9abe1b4c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      </div>
      <div className="messageContent">
        <p>Lorem  fugiat?</p>
        {/* <img src="https://images.unsplash.com/photo-1668479241831-bc9abe1b4c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /> */}
        {/* <br /><img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /> */}
        <span className='time'>Just Now</span>
      </div>
    </div>
  )
}

export default Message