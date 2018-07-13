import React from 'react';
import './index.scss';

export default (props) => (
  <div>
    <iframe name="hide" className='is-hidden'></iframe>
    <form name='contact' target='hide' method="POST" id='contact' data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />

      <p id='formResponse'>Thanks for reaching out to me. I'll be in contact as soon as possible!</p>
      
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
      <p style={{display:'none'}}>Empty: <input type="text" name="url" /></p>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" name="submit" onClick={() => formSumbit()}>{props.buttonText}</button>
    </form>
  </div>
)

const formSumbit = () => {
  setTimeout( () => {
    document.getElementById('contact').reset();
    document.getElementById('formResponse').style.display = 'block';
    document.getElementById('formResponse').style.opacity = '1';
  }, 1000)
}