import heroImage from "../assets/hero-image.png";
import Button from "./Button";
const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left">
          <h1 className="hero-heading">Your Feet deserve the best</h1>
          <h3 className="hero-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            eum similique tempora placeat natus dolor commodi neque cum, at
            perferendis?
          </h3>
          <div className="button-groups">
            <Button text="Shop Now" category="btn-showpnow " />
            <Button text="Category" category="btn-category " />
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="hero-image" className="hero-right-image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
