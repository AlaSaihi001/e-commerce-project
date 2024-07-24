const About = () => {
  return (
    <>
      <div className="about-first-part">
        <h1>About Alatek</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quae
          repellat, veritatis atque perferendis animi velit, voluptates odio
          enim aliquid quisquam accusamus <br/>cum dolorem rerum recusandae? Alias
          modi repudiandae, consequuntur beatae facere odio, fugiat, voluptas
          consequatur nulla voluptates nihil saepe!
        </p>
        <img src="../../public/team.jpg" alt="" />
      </div>

      <div className="about-second-part">
        <h1>Why Choosing Us</h1>
        <div className="benefits">
          <div className="benefit">
            <i className="fa-solid fa-ranking-star"></i>
            <h2>54 Brands</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta, possimus odit aspernatur amet tempora.</p>
          </div>
          <div className="benefit">
            <i className="fa-solid fa-truck-fast"></i>
            <h2>Fast Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit optio dolorem alias nisi ut excepturi ratione reiciendis.</p>
          </div>
          <div className="benefit">
            <i className="fa-solid fa-file-invoice-dollar"></i>
            <h2>COD Service</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit optio dolorem nesciunt at temporibus.</p>
          </div>
          <div className="benefit">
            <i className="fa-solid fa-medal"></i>
            <h2>100% Original Products</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam quae corrupti nesciunt at temporibus impedit.</p>
          </div>
        </div>
      </div>

      <div className="about-third-part">
        <h1>Meet Our Team</h1>
        <div className="team-members">
          <div className="member">
            <div className="member-img"></div>
            <h3>Henry Seth</h3>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="member">
            <div className="member-img"></div>
            <h3>Henry Seth</h3>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="member">
            <div className="member-img"></div>
            <h3>Henry Seth</h3>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="member">
            <div className="member-img"></div>
            <h3>Henry Seth</h3>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
