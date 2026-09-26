import profile from "../../assets/profile.jpg";

function Hero() {
  return (
    <section id="top" className="hero">
      <img src={profile} alt="Christian Lagula" className="profile-img" />
      <h1>CHRISTIAN LAGULA</h1>
      <p>Philippines – Davao</p>
    </section>
  );
}

export default Hero;