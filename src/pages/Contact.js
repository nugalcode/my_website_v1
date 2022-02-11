import React from 'react';
import EmailForm from '../components/EmailForm';
import '../css/Contact.css';
import AnimatedPageSlow from "../components/AnimatedPageSlow"
import BlockAnimated from "../components/BlockAnimated"
import SubtitleAnimated from "../components/SubtitleAnimated"
/*<div>
    <li> <a href="mailto:nugaljed@gmail.com"> nugaljed@gmail.com </a> </li>
    <li> Phone: 510-449-6273</li>
</div>*/

const Contact = () => {
    return (
        <div className="contact">
            <SubtitleAnimated subtitle="Shoot me a message!"/>
            <BlockAnimated />
            <AnimatedPageSlow>
                <div id="contactform"> 
                    <EmailForm />
                </div>
            </AnimatedPageSlow>
        </div>
    );
}
export default Contact;
