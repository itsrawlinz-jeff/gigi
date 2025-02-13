import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ProductsFeatured from "@/components/products-featured";
import Subscribe from "@/components/subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faUtensils, faAward, faGift } from "@fortawesome/free-solid-svg-icons";


import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Signature Buttercream Cakes</h3>
              <a href="#" className="btn btn--rounded">
              Indulge Now!
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Luxury Fondant Cakes</h3>
              <a href="#" className="btn btn--rounded">
                Make Inquiry!
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Decadent Drip Cakes</h3>
              <a href="#" className="btn btn--rounded">
              Order Today!
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
          <li>
  <FontAwesomeIcon icon={faPaintBrush} />
  <div className="data-item__content">
    <h4>Stunning Custom Designs</h4>
    <p>
      No generic cakes here! Every cake is a work of art, tailored to match your vibe, occasion, and personality. From elegant wedding cakes to fun, playful birthday treats—we make your cake dreams come true!
    </p>
  </div>
</li>

<li>
  <FontAwesomeIcon icon={faUtensils} />
  <div className="data-item__content">
    <h4>Unmatched Taste</h4>
    <p>
      Looks amazing? Yes! Tastes even better? Absolutely! Our cakes are baked fresh with premium ingredients to give you the perfect balance of softness, flavor, and sweetness. One bite and you’re hooked!
    </p>
  </div>
</li>

<li>
  <FontAwesomeIcon icon={faAward} />
  <div className="data-item__content">
    <h4>Quality You Can Trust</h4>
    <p>
      We believe in no shortcuts—just top-tier ingredients, expert craftsmanship, and a passion for perfection. Every cake is made with love, care, and the finest quality products to ensure freshness, richness, and elegance in every bite.
    </p>
  </div>
</li>

<li>
  <FontAwesomeIcon icon={faGift} />
  <div className="data-item__content">
    <h4>We Make Every Occasion Extra Special</h4>
    <p>
      Birthdays, weddings, anniversaries, or just because—you deserve a cake that makes moments unforgettable. Whether it's a simple treat or an extravagant showstopper, we deliver cakes that steal the spotlight!
    </p>
  </div>
</li>

          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
