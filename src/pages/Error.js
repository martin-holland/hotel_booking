import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <Hero>
      <Banner
        title="404"
        subtitle="Page Not found. Our pool cleaners even checked the bottom of the pool..."
      >
        <Link to="/" className="btn-primary">
          Return to home page
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
