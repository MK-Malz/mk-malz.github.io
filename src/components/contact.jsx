import { useState } from 'react'
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)

    let messageicon = document.getElementById("messageicon");
    messageicon.className = "fa fa-cog fa-spin fa-3x fa-fw";
    document.getElementById("messagestatus").innerHTML = "Please wait while your message is being sent..."
    document.getElementById("myBtn").disabled = true;

    emailjs
      .sendForm(
        'service_0qz3for', 'template_yodovl9', e.target, 'user_ZfZ1D3owUD1qkrxQi00dM'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()

          var messageicon = document.getElementById("messageicon");
          messageicon.className = "fa fa-check-square-o";
          document.getElementById("messagestatus").innerHTML = " Your message was sent successfully!"
          document.getElementById("myBtn").disabled = false;

        },
        (error) => {
          console.log(error.text)
          document.getElementById("messagestatus").innerHTML = error.text
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg' id ='myBtn'>
                  Send Message
                </button>
                 <p><i id="messageicon"></i><span id="messagestatus"></span></p>
              </form>
              
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            {/*<div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>*/}
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          {/*<div className='col-md-11'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.meetup : '/'}>
                      <i className='fa fa-hand-o-right'></i>
                    </a>
                     Join our Meetup!
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Doing Good Together Düsseldorf | &nbsp;
            <Link to="/Impressum">Impressum und Datenschutz</Link><br />
              Built using the <a target="_blank" rel="noopener noreferrer" href='https://github.com/issaafalkattan/React-Landing-Page-Template'>"React Land Page Template"</a> Theme by Issaaf Kattan.
            
          </p>
        </div>
      </div>
    </div>
  )
}
