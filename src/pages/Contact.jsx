export default function Contact() {
  return (
    <>
      <div className="contact-body">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          voluptates modi, impedit quas in ipsa veniam blanditiis ullam iste eos
          magnam quae nam, officia mollitia consectetur vero ipsum quod quos
          voluptatem ducimus dolorem. Hic illum ea a modi voluptatibus
          aspernatur, ipsam quis culpa totam maxime natus voluptatum
          perspiciatis veritatis expedita beatae dignissimos dolor alias quia
          praesentium maiores labore sequi? Provident.
        </p>
        <div className="contact-form-desc">
          <div className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="email" required />
            <label htmlFor="Subject">Subject</label>
            <textarea type="text" id="subject" className="subject" required />
            <button type="submit">Submit</button>
          </div>
          <div className="contact-desc">
            <h1>Conntact</h1>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, ullam.
              </p>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <p>+123 45 678 910</p>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <p>support@alatek.com</p>
            </div>
            <h3>Folow Us</h3>
            <div className="social-media">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-square-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
