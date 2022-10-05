const ContactForm = () => {
    return ( 
        <form className="contact-form">
            <input
            data-aos="fade-down-left"
            data-aos-duration="1000"
            type="text"
            name="firstname"
            required
            placeholder="First name"
            />
            <input
            data-aos="fade-down-right"
            data-aos-duration="1000"
            type="text"
            name="lastName"
            required
            placeholder="Last name"
            />
            <input
            data-aos="fade-down-left"
            data-aos-duration="1000"
            type="email"
            name="email"
            required
            placeholder="Email address"
            />
            <textarea 
            data-aos="fade-down-right"
            data-aos-duration="1000"
            name="message" 
            id="message" 
            placeholder="Message"
            required
            type="text"
            ></textarea>
            <button>submit</button>
        </form>
     );
}
 
export default ContactForm;