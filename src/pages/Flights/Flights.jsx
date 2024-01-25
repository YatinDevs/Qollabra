import React from "react";
import FlightsDiscount from "./FlightsDiscount/FlightsDiscount";
import HeroBanner from "./HeroBanner/HeroBanner";
import FlightsOffers from "./FlightsOffers/FlightsOffers";
import WhyIxigo from "./WhyIxigo/WhyIxigo";

function Flights() {
  return (
    <div className="homePage">
      <FlightsDiscount />
      <FlightsOffers />
      <WhyIxigo />
    </div>
  );
}

export default Flights;
