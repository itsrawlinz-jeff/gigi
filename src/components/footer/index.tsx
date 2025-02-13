import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span></span>
            </h6>
            <p>
            At GIGI Brave Cakes, we bake with passion and perfection, bringing you delicious, handcrafted treats for every occasion. From classic flavors to custom creations, every bite is made to delight!
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              {/* <li>
                <a href="#">Order Status</a>
              </li> */}
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>Information</li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Shop Map Location</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              {/* <li>
                <a href="#">Bacome a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li> */}
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">shop@gigibravecakes.co.ke</a>
              </li>
              <li>
                <a href="#">Call To Order: +254 748 817 572</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>COPYRIGHTS GIGIBRAVE CAKES- © 2025. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
