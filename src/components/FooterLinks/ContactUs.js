import React from 'react';
import './ContactUs.css';
import lucasProfile from './lucasGitHubPic.jpg';
import kellyProfile from './kellyGitHubPic.jpg';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <h2>Find us on GitHub</h2>
      <img className="github-profile-pic" src={lucasProfile} alt='GitHub profile picture'/>
      <a target="_blank" href="https://github.com/lbmerchant93">lbmerchant93</a>
      <img className="github-profile-pic" src={kellyProfile} alt='GitHub profile picture'/>
      <a target="_blank" href="https://github.com/kellydinneen">kellydinneen</a>
    </div>
  )
}

export default ContactUs;
