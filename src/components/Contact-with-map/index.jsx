import React from "react";
import appData from '../../data/app.json'
import cred from '../../data/emailjs-cred.json'

import emailjs from 'emailjs-com';


const ContactWithMap = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(cred.emailServiceId, cred.templateId, e.target, cred.publicKey)
      .then((result) => {
          alert("SuccessFully Sent")
      }, (error) => {
          alert("Failed To send the msg...Please, contact using the email or phone.")
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post" onSubmit={sendEmail}>
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
