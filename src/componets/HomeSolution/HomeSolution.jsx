import React from "react";
import "./solution.scss";
import solu from "../../assets/img/less.webp";
import solut from "../../assets/img/sky.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="solution" id="features">
      <div className="container">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-delay="300">
            One Solution at a Time
          </h2>
          <p data-aos="fade-up" data-aos-delay="500">
            Our solutions are crafted to push boundaries and deliver
            unparalleled results, empowering you to lead in a rapidly.
          </p>
        </div>

        <div className="solution-wrapper">
          <div className="solu-box">
            <div className="solu-box-1">
              <div className="dec" data-aos="fade-up" data-aos-delay="700">
                <span>01</span>
                <p>Our futuristic tech services are designed to solve.</p>
              </div>
              <div className="dec" data-aos="fade-up" data-aos-delay="800">
                <span>02</span>
                <p>today’s challenges while prepare you for tomorrow.</p>
              </div>
              <div className="dec" data-aos="fade-up" data-aos-delay="900">
                <span>03</span>
                <p>Whether it’s streamlining your operations.</p>
              </div>
              <div className="plat-from">
                <div className="icon" data-aos="fade-up" data-aos-delay="1000">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_10_262"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                    >
                      <rect
                        x="0.107544"
                        y="0.392822"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_10_262)">
                      <path
                        d="M16.913 21.8928C16.1645 21.8928 15.529 21.6311 15.0065 21.1076C14.4842 20.5841 14.223 19.9484 14.223 19.2006C14.223 19.1006 14.2576 18.8576 14.3268 18.4716L7.21529 14.2851C6.97429 14.5351 6.68796 14.7309 6.35629 14.8726C6.02463 15.0142 5.66929 15.0851 5.29029 15.0851C4.54513 15.0851 3.91171 14.8222 3.39004 14.2966C2.86838 13.7709 2.60754 13.1363 2.60754 12.3928C2.60754 11.6493 2.86838 11.0147 3.39004 10.4891C3.91171 9.96341 4.54513 9.70057 5.29029 9.70057C5.66929 9.70057 6.02463 9.77141 6.35629 9.91307C6.68796 10.0547 6.97429 10.2506 7.21529 10.5006L14.3268 6.32357C14.2871 6.20057 14.2599 6.08007 14.245 5.96207C14.2304 5.84407 14.223 5.71841 14.223 5.58507C14.223 4.83724 14.485 4.20157 15.0088 3.67807C15.5328 3.15457 16.169 2.89282 16.9175 2.89282C17.666 2.89282 18.3015 3.15482 18.8238 3.67882C19.3463 4.20266 19.6075 4.83882 19.6075 5.58732C19.6075 6.33582 19.3458 6.97132 18.8223 7.49382C18.2988 8.01615 17.6631 8.27732 16.9153 8.27732C16.5345 8.27732 16.1803 8.20491 15.8528 8.06007C15.5251 7.91524 15.2408 7.71782 14.9998 7.46782L7.88829 11.6543C7.92796 11.7775 7.95521 11.898 7.97004 12.0158C7.98471 12.1338 7.99204 12.2595 7.99204 12.3928C7.99204 12.5262 7.98471 12.6518 7.97004 12.7698C7.95521 12.8877 7.92796 13.0082 7.88829 13.1313L14.9998 17.3178C15.2408 17.0678 15.5251 16.8704 15.8528 16.7256C16.1803 16.5807 16.5345 16.5083 16.9153 16.5083C17.6631 16.5083 18.2988 16.7702 18.8223 17.2941C19.3458 17.8181 19.6075 18.4543 19.6075 19.2028C19.6075 19.9513 19.3455 20.5867 18.8215 21.1091C18.2977 21.6316 17.6615 21.8928 16.913 21.8928ZM16.9153 20.3928C17.2531 20.3928 17.5363 20.2786 17.7648 20.0501C17.9933 19.8216 18.1075 19.5384 18.1075 19.2006C18.1075 18.8627 17.9933 18.5796 17.7648 18.3511C17.5363 18.1224 17.2531 18.0081 16.9153 18.0081C16.5775 18.0081 16.2943 18.1224 16.0658 18.3511C15.8371 18.5796 15.7228 18.8627 15.7228 19.2006C15.7228 19.5384 15.8371 19.8216 16.0658 20.0501C16.2943 20.2786 16.5775 20.3928 16.9153 20.3928ZM5.29029 13.5851C5.63079 13.5851 5.91621 13.4708 6.14654 13.2423C6.37704 13.0138 6.49229 12.7307 6.49229 12.3928C6.49229 12.055 6.37704 11.7718 6.14654 11.5433C5.91621 11.3148 5.63079 11.2006 5.29029 11.2006C4.95513 11.2006 4.67421 11.3148 4.44754 11.5433C4.22088 11.7718 4.10754 12.055 4.10754 12.3928C4.10754 12.7307 4.22088 13.0138 4.44754 13.2423C4.67421 13.4708 4.95513 13.5851 5.29029 13.5851ZM16.9153 6.77757C17.2531 6.77757 17.5363 6.66324 17.7648 6.43457C17.9933 6.20607 18.1075 5.92291 18.1075 5.58507C18.1075 5.24724 17.9933 4.96407 17.7648 4.73557C17.5363 4.50707 17.2531 4.39282 16.9153 4.39282C16.5775 4.39282 16.2943 4.50707 16.0658 4.73557C15.8371 4.96407 15.7228 5.24724 15.7228 5.58507C15.7228 5.92291 15.8371 6.20607 16.0658 6.43457C16.2943 6.66324 16.5775 6.77757 16.9153 6.77757Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className="icon" data-aos="fade-up" data-aos-delay="1100">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_10_267"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                    >
                      <rect
                        x="0.322632"
                        y="0.392822"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_10_267)">
                      <path
                        d="M3.82263 19.6428V5.14282L21.0341 12.3928L3.82263 19.6428ZM5.32263 17.3928L17.1726 12.3928L5.32263 7.39282V11.0851L10.7456 12.3928L5.32263 13.7006V17.3928Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className="icon" data-aos="fade-up" data-aos-delay="1200">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_10_272"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                    >
                      <rect
                        x="0.53772"
                        y="0.392822"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_10_272)">
                      <path
                        d="M19.5377 18.8928V15.3928C19.5377 14.4953 19.2204 13.7293 18.5857 13.0948C17.9512 12.4601 17.1852 12.1428 16.2877 12.1428H6.91072L10.7607 15.9928L9.69147 17.0465L4.03772 11.3928L9.69147 5.73901L10.7607 6.79276L6.91072 10.6428H16.2877C17.6006 10.6428 18.7204 11.1063 19.6472 12.0333C20.5742 12.9601 21.0377 14.0799 21.0377 15.3928V18.8928H19.5377Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="solu-box-2">
              <div className="round" data-aos="fade-up" data-aos-delay="1300">
                <div className="round-1"></div>
                <div className="round-1"></div>
              </div>
              <h4 data-aos="fade-up" data-aos-delay="1500">
                Smart Automation
              </h4>
              <div className="box" data-aos="fade-up" data-aos-delay="1600">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="solu-img" data-aos="fade-up" data-aos-delay="1800">
            <img src={solu} alt="" />
          </div>
        </div>

        <div className="solu-boxs">
          <div className="solu-box-1">
            <div className="dec" data-aos="fade-up" data-aos-delay="1000">
              <p>Services</p>
              <h5>19</h5>
            </div>
            <img src={solut} alt="" data-aos="fade-up" data-aos-delay="1200" />
            <div className="dec" data-aos="fade-up" data-aos-delay="1300">
              <p>Attorney</p>
              <h5>98%</h5>
            </div>
            <div className="dec" data-aos="fade-up" data-aos-delay="1400">
              <h4>Dedication and Precision</h4>
            </div>
            <div className="dec" data-aos="fade-up" data-aos-delay="1500">
              <p>Lawyer</p>
              <h5>20</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolution;
