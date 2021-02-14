import React from 'react';
import './ContactUs.css';
import lucasProfile from './lucasGitHubPic.jpg';
import kellyProfile from './kellyGitHubPic.jpg';

const ContactUs = () => {
  return (
    <main className='contact-us'>
      <h2>Find us on GitHub</h2>
      <section className='gh-profiles'>
        <article className='lucas-profile'>
          <img className="github-profile-pic" src={lucasProfile} alt='GitHub profile'/>
          <a className='github-profile-link' href="https://github.com/lbmerchant93">lbmerchant93</a>
        </article>
        <article className='kelly-profile'>
          <img className="github-profile-pic" src={kellyProfile} alt='GitHub profile'/>
          <a className='github-profile-link' href="https://github.com/kellydinneen">kellydinneen</a>
        </article>
      </section>
    </main>
  )
}

export default ContactUs;
