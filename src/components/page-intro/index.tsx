import SwiperCore, { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PageIntro = () => {
  SwiperCore.use([EffectFade, Navigation]);

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>GigiBrave Cakes  Bite into Elegance</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right" />
                  Order Your Sweet Fix!
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Where Flavor Meets Art!</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right" />
                  Get Your Cake Magic!
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>Within Nairobi</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Value for Money</h4>
                <p>Our cakes don’t just look good—they taste even better!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
