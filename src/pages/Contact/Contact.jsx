import React from 'react'
import './Contact.css';
import Input from '../../components/Input/Input';

const Contact = () => {
    return (
        <>
            <div className="contact_box">
                <h1 className="Contact_heading">
                    Contacte-nos
                </h1>
                <form className='contact_form' action="">
                    <Input type="text" label="Your Name" />
                    <Input type="text" label="Your Email" />
                    <Input type="text" label="Subject" />
                    <label className='textArea_label' htmlFor="">Your message (optional)</label>
                    <textarea className='textArea' type="text"></textarea>
                    <button type='submit' className='action_btn'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact