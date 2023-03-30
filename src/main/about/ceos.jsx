const Ceos = () => {
    const about =<p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam.</p>
    return ( 
        <section className="ceos">
            <hr/>
            <article >
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="ceos image" />
                <span>
                    <h2>william ole</h2>
                    <h5>1.306.432.0065</h5>
                    <h6>CEO</h6>
                    {about}
                </span>
            </article>
            <article>
                <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="ceos image" />
                <span>
                    <h2>bamidele williams </h2>
                    <h5>1.306.432.0065</h5>
                    <h6>Executive Administrator</h6>
                    {about}
                </span>
            </article>
            <article >
                <img src="https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="ceos image" />
                <span>
                    <h2>jane yang</h2>
                    <h5>1.306.432.0065</h5>
                    <h6>Realitor</h6>
                    {about}
                </span>
            </article>
        </section>
     );
}
 
export default Ceos;