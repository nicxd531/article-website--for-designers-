const Ceos = () => {
    const about =<p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam.</p>
    return ( 
        <section className="ceos">
            <hr/>
             <article
             data-aos="fade-down-right"
             data-aos-duration="1000"
             className="hov"
             >
                <img src="image/black_lion_face_statue_hd_black-1366x768.jpg" alt="ceos image" data-aos="flip-up" data-aos-duration="3000"/>
                <span>
                    <h2>JANE DOE</h2>
                    <h5>1.306.432.0065</h5>
                    <h6>CEO</h6>
                    {about}
                </span>
            </article>
            <article
            data-aos="fade-down-left"
            data-aos-duration="1000"
            >
                <img src="image/black_lion_face_statue_hd_black-1366x768.jpg" alt="ceos image" data-aos="flip-up" data-aos-duration="3000"/>
                <span>
                    <h2>JOHN DOEE</h2>
                    <h5>1.306.432.0065</h5>
                    <h6>Executive Administrator</h6>
                    {about}
                </span>
            </article>
            <article
            data-aos="fade-down-right"
            data-aos-duration="1000"
            >
                <img src="image/black_lion_face_statue_hd_black-1366x768.jpg" alt="ceos image" data-aos="flip-up" data-aos-duration="3000"/>
                <span>
                    <h2>JANE DOE</h2>
                    <h5>1.306.432.0065</h5>
                    <h6>Realitor</h6>
                    {about}
                </span>
            </article>
        </section>
     );
}
 
export default Ceos;