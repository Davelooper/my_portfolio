import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import '../Styles/Contact/Contact.sass'

function Contact(props) {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_2vrecja', 'template_mcvj3at', form.current, '-7mMwiir4gHXfgWhp')
        e.target.reset()
    }
    return (
        <div className='contact'>
            <h2 className='contact__title'>Me contacter</h2>
            <div className="contact__content">
                <div className="contact__wrapper">
                    <h3 className='contact__subtitle'>Envoyez-moi un message</h3>
                    <p className='contact__text'>(tous les champs sont requis)</p>
                </div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <div className="form__section">
                    <div className="form__wrapper">
                        <label htmlFor="name" className='form__label'>Votre nom</label>
                        <input className='form__input' type='text' name='name' required />
                    </div>
                    <div className="form__wrapper">
                        <label htmlFor="email" className='form__label'>Votre email</label>
                        <input className='form__input' type='email' name='email' required />
                    </div>
                </div>
                <div className="form__section">
                    <div className="form__wrapper">
                        <label htmlFor="message" className='form__label'>Votre message</label>
                        <textarea className='form__input form__input--textarea' type='message' name='message' required ></textarea>
                    </div>
                    <button className='form__button' type='submit'>Envoyer</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact;