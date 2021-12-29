import './Contact.css'
import React from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmailMessage', 'template_v7csa3h', e.target, 'user_dpFhTyv77pHOh9rFJNKk4')
          .then((result) => {
              alert('Mensagem enviada com sucesso!')
          }, (error) => {
            alert(`Erro: ${error.message}`)
          });
          e.target.reset()
    };

    return (
        <div id="contact" className="contact">
            <h2>{'<Contato>'}</h2>

            <div className='content'>
                <div className='form'>
                    <form id='contact-form' onSubmit={sendEmail}>
                        <input type='text' name='name' class="feedback-input" placeholder='Name' />
                        <input type='email' name='email' class="feedback-input" placeholder='Email' />
                        <textarea name='message' class="feedback-input" placeholder='Message' />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
                <div className='icons'>
                    <div className='item'>
                        <i className="icon fa fa-whatsapp fa-3x"></i>
                        <p>(37) 99937-0570</p>
                    </div>
                    <div className='item'>
                        <i className="icon fa fa-envelope-o fa-3x"></i>
                        <p>aroucajohann@gmail.com</p>
                    </div>
                    <div className='item'>
                        <i className="icon fa fa-instagram fa-3x"></i>
                        <p>@JohannArouca</p>
                    </div>
                </div>
            </div>
        </div>
    )
}