import React from "react";
import "./homereview.scss";
import user from "../../assets/img/sky.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const reviews = [
  {
    name: "Emma Leona",
    position: "CEO of InnovateTech",
    text: "Working with Sky has been a game-changer for us. Their innovative AI solutions helped us streamline our workflows and make data-driven decisions effortlessly.",
    rating: 5,
    userImg: user,
  },
  {
    name: "John Doe",
    position: "CTO of TechCorp",
    text: "The team provided exceptional service and cutting-edge AI solutions that transformed our business operations.",
    rating: 4,
    userImg: user,
  },
  {
    name: "John Doe",
    position: "CTO of TechCorp",
    text: "The team provided exceptional service and cutting-edge AI solutions that transformed our business operations.",
    rating: 4,
    userImg: user,
  },
];

const HomeReview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="review py" id="pricing">
      <div className="container">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-delay="300">
            Stories of Success Innovation
          </h2>
          <div className="content" data-aos="fade-up" data-aos-delay="500">
            <p>
              we’re proud to partner with forward-thinking businesses and
              individuals who are shaping the future.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="review-box"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="user">
                  <img src={review.userImg} alt={review.name} />
                  <div className="head">
                    <h5>{review.name}</h5>
                    <p>{review.position}</p>
                  </div>
                </div>
                <p>{review.text}</p>

                <div className="rating-share">
                  <div className="rat">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.74953 0.771108C9.96178 0.11789 10.8859 0.11789 11.0982 0.771108L13.0193 6.68381C13.1142 6.97594 13.3864 7.17372 13.6936 7.17372H19.9106C20.5974 7.17372 20.883 8.05262 20.3273 8.45633L15.2977 12.1106C15.0492 12.2911 14.9452 12.6112 15.0401 12.9033L16.9613 18.816C17.1735 19.4692 16.4259 20.0124 15.8702 19.6087L10.8406 15.9544C10.5921 15.7739 10.2556 15.7739 10.0071 15.9544L4.97745 19.6087C4.42179 20.0124 3.67416 19.4692 3.8864 18.816L5.80755 12.9033C5.90247 12.6112 5.79849 12.2911 5.54999 12.1106L0.520347 8.45633C-0.0353136 8.05262 0.250258 7.17372 0.937092 7.17372H7.15407C7.46124 7.17372 7.73346 6.97594 7.82838 6.68381L9.74953 0.771108Z"
                          fill="#FCEC36"
                        />
                      </svg>
                    ))}
                  </div>
                  <Link to="">
                    <svg
                      width="61"
                      height="61"
                      viewBox="0 0 61 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_10_338"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="61"
                        height="61"
                      >
                        <rect
                          x="0.932739"
                          y="30.9644"
                          width="42.4707"
                          height="42.4707"
                          transform="rotate(-45 0.932739 30.9644)"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_10_338)">
                        <path
                          d="M40.9749 35.9689L37.4086 35.9064L37.4086 27.0221L22.2053 42.2254L19.7027 39.7228L34.906 24.5195L26.0218 24.5195L25.9592 20.9533L40.9749 20.9533L40.9749 35.9689Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="swiper-button-next"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {/* <svg
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.56128 0.913086L11.6792 11.0311L1.56128 21.149"
                stroke="white"
                stroke-width="2"
              />
            </svg> */}
          </div>
          <div
            className="swiper-button-prev"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {/* <svg
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
            </svg> */}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeReview;
