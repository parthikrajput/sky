import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homefuturis.scss";
import sky from "../../assets/img/sky.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeFuturis = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const boxes = [
    {
      id: 1,
      text: "Bring your ideas to life with cutting-edge technology designed to shape the future. At Sky, we merge innovation.",
    },
    {
      id: 2,
      text: "Bring your ideas to life with cutting-edge technology designed to shape the future. At Sky, we merge innovation.",
    },
    {
      id: 3,
      text: "Bring your ideas to life with cutting-edge technology designed to shape the future. At Sky, we merge innovation.",
    },
  ];

  return (
    <section className="py futuris" id="about">
      <div className="container">
        <div className="headtile">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Your Vision with Futuristic
          </h2>
          <Slider {...settings}>
            {boxes.map((box) => (
              <div
                key={box.id}
                data-aos="fade-up"
                data-aos-delay="300"
                className="futu-slider"
              >
                <p>{box.text}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="futuris-wrapp">
          <div className="futuris-boxs">
            <div
              className="futuris-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4>What’s Our Benefit</h4>
              <ul>
                <li>AI-Powered Analytics</li>
                <li>Cloud Infrastructure Solutions</li>
                <li>IoT Integration Services</li>
                <li>Blockchain Development</li>
              </ul>
            </div>
            <div
              className="futuris-box-img"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={sky} alt="" />
            </div>
          </div>
          <div className="futuris-boxs-1">
            <div className="futuris-right-box">
              <div className="futu-box" data-aos="fade-up" data-aos-delay="500">
                <div className="titl">40%</div>
                <p>Automation Impact</p>
              </div>
              <div className="futu-box" data-aos="fade-up" data-aos-delay="600">
                <div className="titl">73%</div>
                <p>User-Centric Growth</p>
              </div>
              <div className="futu-box" data-aos="fade-up" data-aos-delay="700">
                <div className="titl">81%</div>
                <p>Blockchain Adoption</p>
              </div>
              <div className="futu-box" data-aos="fade-up" data-aos-delay="800">
                <h4>Innovation Meets Possibility</h4>
              </div>
            </div>
            <div className="tags">
              <div className="tag" data-aos="fade-up" data-aos-delay="900">
                Quantum
              </div>
              <div className="tag" data-aos="fade-up" data-aos-delay="1000">
                Blockchain
              </div>
              <div className="tag" data-aos="fade-up" data-aos-delay="1100">
                Impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="left-arrow"
      data-aos="fade-up"
      data-aos-delay="300"
      onClick={onClick}
    >
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99561 0.757202L1.72335 7.02945L7.99561 13.3017"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="right-arrow"
      data-aos="fade-up"
      data-aos-delay="300"
      onClick={onClick}
    >
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.39661 0.757202L7.66886 7.02945L1.39661 13.3017"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default HomeFuturis;
