import React from "react";

function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// used to assign a default value to the Hero component without passing it through the Home page, works the same as: <Hero hero="defaultHero"/>
Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
