import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

function Rooms(props) {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return to home page
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}

export default Rooms;
