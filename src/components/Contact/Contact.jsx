import './Contact.css'
import React from 'react'

export default props =>
    <React.Fragment>
        <div id="contact" className="contact">
            <h2>{'<Contato>'}</h2>

            <div className='content'>
                <div className='form'>
                    <form id='contact-form'>
                        <input type='text' name='user_name' placeholder='Nome' />
                        <br />
                        <input type='email' name='user_email' placeholder='Email' />
                        <br />
                        <textarea name='message' placeholder='Mensagem' />
                        <br />
                        <input type='submit' value='Enviar' />
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
                        <p>@johannarouca</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>