import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "We welcome all of our guests to our resort with free cocktails, you can get more at any time!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Hiking trials can be found all around the local surroundings of the Hotel, our location is perfectly matched for those who love nature!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Transfers",
        info: "We provide free Shuttle transfers to and from the airport at any time as well as to the local town center, running every 10 minutes between 10am and 7pm so you can explore and shop the local culture! ",
      },
      {
        icon: <FaBeer />,
        title: "Imported Beers",
        info: "We have the best imported Beers from around the world to ensure you do not miss out on that taste from home!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="service-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
