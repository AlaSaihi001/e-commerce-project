export default function OtherBody() {
  return (
    <>
      <main>
        <section className="first-part">
          <h2>Categories</h2>
          <ul>
            <li>
              <i className="fa-solid fa-computer"></i> Computers
            </li>
            <li>
              <i className="fa-solid fa-tv"></i> TVs
            </li>
            <li>
              <i className="fa-solid fa-mobile-screen-button"></i> Phones
            </li>
            <li>
              <i className="fa-solid fa-house-circle-check"></i> Electromanager
            </li>
            <li>
              <i className="fa-solid fa-heart"></i> Accessories
            </li>
          </ul>
        </section>
        <section className="second-part">
          <h2>New Arrival</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rerum,
            reiciendis odio repudiandae magnam harum?
          </p>
          <ul className="new-products">
            <li className="new-product">
              <p className="new-word">New</p>
              <img src="../../../public/phone1.webp" alt="" />
              <h3>Galaxy S24 Ultra</h3>
              <p className="price">$ 1,419</p>
              <p className="desc">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="new-product">
              <p className="new-word">New</p>
              <img src="../../../public/smartwatch1.webp" alt="" />
              <h3>Smartwatch Phone</h3>
              <p className="price">$ 549</p>
              <p className="desc">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="new-product">
              <p className="new-word">New</p>
              <img src="../../../public/tv1.webp" alt="" />
              <h3>Pantalons Smart Tv</h3>
              <p className="price">$ 1,099</p>
              <p className="desc">Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </section>
        <section className="third-part">
          <h2>New Arrival</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rerum,
            reiciendis odio repudiandae magnam harum?
          </p>
          <div className="discounts">
            <div className="discount product1">
              <h3>Wireless Microphone</h3>
              <p>
                <span>$1099.00</span> $999.00
              </p>
              <img src="../../../public/phone1.webp" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                odio perferendis nostrum neque eum quia totam adipisci animi
                excepturi voluptas.
              </p>
              <button className="offer-button">Order Now</button>
            </div>
            <div className="discount product2">
              <h3>New Discount Collection</h3>
              <p>
                <span>$2749.00</span> $2299.00
              </p>
              <img src="../../../public/photo3.jpg" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                odio perferendis nostrum neque eum quia totam adipisci animi
                excepturi voluptas.
              </p>
              <button className="offer-button">Order Now</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
