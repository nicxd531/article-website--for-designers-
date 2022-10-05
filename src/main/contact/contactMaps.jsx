const ContactMaps = () => {
    return ( 
        <section className="contact-maps"
        data-aos="flip-up"
            data-aos-duration="1000"
        >
            <div>
                <h3>address:</h3><span>107 a street,a state,a country 1001</span>
            </div>
            <div>
                <h3>MOBILE NUMBER:</h3><span>+234 80 8629 8113</span>
            </div>
            <div>
                <h3>EMAIL ADDRESS: </h3><span>FINIXD531@GMAIL.COM</span>
            </div>
            <section
             data-aos="flip-left"
             data-aos-duration="1000"
            >
               <iframe style={{width:"100%",height:"100%",borderRadius:8}} src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </section>
           
        </section>
     );
}
 
export default ContactMaps;