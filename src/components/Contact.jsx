import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="content-fit">
        <div className="number">03</div>
        <div className="des">
          <div className="title">CONTACT</div>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>test@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+841.231.235</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>lundevweb.com</td>
              </tr>
              <tr>
                <td>Youtube</td>
                <td>@lundeveloper</td>
              </tr>
            </tbody>
          </table>
          <div className="sign">Lundev</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;