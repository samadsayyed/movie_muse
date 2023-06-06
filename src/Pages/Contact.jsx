import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
