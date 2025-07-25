import React from 'react'

const Contact = () => {
  return (
    <div className='container contact-header'>
      <h1>Contact Us</h1>
      <div>
        <form action="" style={{textAlign:'center'}} className='flex contact-form'>
          <input type="text" placeholder='Enter Your Good Name' />
          <input type="email" name="" id="" placeholder='Enter Your Email'/>
          <textarea name="" id="" placeholder='Enter Your Message'></textarea>
          <button>Send</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact