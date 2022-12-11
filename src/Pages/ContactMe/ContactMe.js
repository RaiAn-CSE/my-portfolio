import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const formInfo = useRef();

    const sendEmailInfo = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qozfn3i', 'template_cu9t0ri', formInfo.current, 'bRta5-UTQGwt5suqH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <form className='grid gap-3 justify-items-center' ref={formInfo} onSubmit={sendEmailInfo}>
            <input type="text" name="user_name" placeholder="Type Name" className="input input-bordered input-sm w-full max-w-xs" />

            <input type="email" name="user_email" placeholder="Type Email" className="input input-bordered input-md w-full max-w-xs" />

            <input type="text" name="message" placeholder="Type Message" className="input input-bordered input-lg w-full max-w-xs" />
            <button class="btn btn-outline btn-success h-6 w-20" type="submit" value="Send">Send</button>
        </form>
    );
};

export default ContactMe;