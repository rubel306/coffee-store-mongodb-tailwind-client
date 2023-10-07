import "./HeaderHero.css";
import bg from "/hero.png";
const HeaderHero = () => {
  return (
    <div
      className="header-hero flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-left hero-texts w-1/2">
        <h2>Would you like a Cup of Delicious Coffee?</h2>
        <p className="mt-4">
          Its coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn mt-10">Learn More</button>
      </div>
    </div>
  );
};

export default HeaderHero;
