import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import axios from "axios";

const offers = [
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fupload%2Fd62f9eff1c2bdf42f7d38c4a3f5d7854-npqjp.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fupload%2F4f2cbd4328a4923d012b8bad9b62ec9d-qfhfg.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2F73%2Fc0d96cc0a8c4a035ccabbe2db480cda0-lnsmq.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2F9251863c1803cf29a4489c9644f4492e-belgv.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2Fa9f66a9464f33313833d98588fc478f7-jazbe.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2Fef528852d0ace334ea45a3269035bbea-hikuv.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2F54ed78c29602f0e4e9306447bb2aca14-tpjby.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2Fc001c659524150c90923a6dcb1f6a6c3-ghowy.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fupload%2F8fbbc15a2a4aada04c1cf61c7da8868e-rokjm.png&w=640&q=75",
  },
];
function FlightsOffers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const response = await axios.post(
          "https://academics.newtonschool.co/api/v1/bookingportals/airport",
          {
            projectID: "f104bi07c490",
          }
        );

        const resData = response.data;
        console.log(resData.offers);
        setData(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataFromAPI();
  }, []);

  return (
    <div className="bg-orange-50 py-2 shadow-2xl ">
      <div className="bg-white py-2">
        <h1 className="text-center text-xl font-semibold my-2 ">
          Today's Flight Offers
        </h1>
        <Carousel data={offers} />
      </div>
    </div>
  );
}

export default FlightsOffers;
