import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/sky.svg";
import "./header.scss";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
  ];

  const openMenu = () => {
    setMenuActive(true);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="h-wrapper">
          <div className="menu">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="nexora" />
              </Link>
            </div>
            <nav className={menuActive ? "active" : ""}>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link to="#" onClick={() => scrollToSection(item.id)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="close-menu" onClick={closeMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 329.269 329"
                >
                  <path
                    d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                    fill="#fff"
                  />
                </svg>
              </div>
            </nav>
          </div>

          <div className="h-btn">
            <Link to="/" className="icon">
              <svg
                width="35"
                height="29"
                viewBox="0 0 35 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.9428 3.98844C33.6548 4.55344 32.2824 4.92794 30.8515 5.10978C32.3235 4.23089 33.447 2.84978 33.9752 1.18508C32.6027 2.00336 31.0874 2.58135 29.4725 2.9039C28.1693 1.51629 26.312 0.656883 24.2858 0.656883C20.3546 0.656883 17.1897 3.84773 17.1897 7.75944C17.1897 8.32228 17.2373 8.86347 17.3542 9.37868C11.4509 9.09077 6.22737 6.26143 2.7183 1.95141C2.10567 3.0143 1.74632 4.23089 1.74632 5.54057C1.74632 7.99973 3.01271 10.1796 4.90037 11.4417C3.75955 11.42 2.64037 11.0888 1.69221 10.5671C1.69221 10.5888 1.69221 10.6169 1.69221 10.6451C1.69221 14.0957 4.15353 16.9618 7.38118 17.6221C6.80319 17.7801 6.17325 17.8559 5.51949 17.8559C5.06489 17.8559 4.60597 17.8299 4.17518 17.7346C5.0952 20.5466 7.7059 22.614 10.8102 22.6811C8.39429 24.5709 5.32683 25.7096 2.0061 25.7096C1.42378 25.7096 0.865269 25.6836 0.306763 25.6122C3.45215 27.6406 7.17986 28.7987 11.1998 28.7987C24.2663 28.7987 31.41 17.9749 31.41 8.59287C31.41 8.27899 31.3991 7.97592 31.384 7.67502C32.7932 6.6749 33.9774 5.42584 34.9428 3.98844Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link to="/" className="icon">
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9999 0.514908C27.5644 0.514908 35.318 8.26847 35.318 17.833C35.318 26.4769 28.985 33.6415 20.7059 34.9407V22.8392H24.7411L24.7411 22.839L25.5089 17.8332L25.5089 17.833H20.7059V14.5844C20.7059 14.1391 20.7768 13.6974 20.9465 13.3041C21.2988 12.4879 22.0764 11.8801 23.5281 11.8801H25.7118V11.8799H25.7119V7.61803C25.7119 7.61803 23.73 7.27979 21.8353 7.27979C18.8684 7.27979 16.6724 8.62836 15.7598 11.1337C15.7217 11.2381 15.686 11.3445 15.6524 11.4529C15.4177 12.2117 15.2939 13.0682 15.2939 14.0178V17.833H10.8968V17.8332H10.8968V22.8392H15.2939V34.9407C7.01481 33.6415 0.681885 26.4769 0.681885 17.833C0.681885 8.26847 8.43543 0.514908 17.9999 0.514908Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link to="/" className="icon">
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3768 0.409035C12.6735 0.409035 12.0832 0.429601 10.2359 0.513669C8.39224 0.598098 7.13379 0.889991 6.03264 1.31827C4.8936 1.76062 3.92739 2.35234 2.96479 3.31534C2.00146 4.27797 1.40975 5.24421 0.965974 6.38292C0.536627 7.48446 0.244382 8.74332 0.161399 10.5863C0.0787765 12.4337 0.0571289 13.0243 0.0571289 17.7278C0.0571289 22.4313 0.0780554 23.0197 0.16176 24.8671C0.246547 26.7108 0.538431 27.9693 0.966336 29.0705C1.40903 30.2095 2.00074 31.1758 2.9637 32.1384C3.92595 33.1018 4.89216 33.6949 6.03047 34.1373C7.13234 34.5656 8.39116 34.8575 10.2345 34.9419C12.0817 35.026 12.6716 35.0465 17.3746 35.0465C22.0783 35.0465 22.6668 35.026 24.5141 34.9419C26.3577 34.8575 27.6176 34.5656 28.7195 34.1373C29.8582 33.6949 30.8229 33.1018 31.7852 32.1384C32.7485 31.1758 33.3402 30.2095 33.784 29.0708C34.2097 27.9693 34.502 26.7104 34.5886 24.8674C34.6716 23.0201 34.6932 22.4313 34.6932 17.7278C34.6932 13.0243 34.6716 12.434 34.5886 10.5867C34.502 8.74296 34.2097 7.48446 33.784 6.38328C33.3402 5.24421 32.7485 4.27797 31.7852 3.31534C30.8219 2.35198 29.8585 1.76026 28.7184 1.31827C27.6144 0.889991 26.3552 0.598098 24.5115 0.513669C22.6643 0.429601 22.0762 0.409035 17.3714 0.409035H17.3768ZM15.8232 3.53002C16.2843 3.52929 16.7988 3.53002 17.3768 3.53002C22.0008 3.53002 22.5488 3.54661 24.3748 3.6296C26.0633 3.70681 26.9797 3.98896 27.5902 4.22601C28.3984 4.53992 28.9746 4.91515 29.5804 5.52131C30.1865 6.12747 30.5617 6.70476 30.8763 7.51297C31.1134 8.12273 31.3959 9.03918 31.4727 10.7278C31.5557 12.5534 31.5738 13.1019 31.5738 17.7238C31.5738 22.3457 31.5557 22.8942 31.4727 24.7199C31.3955 26.4084 31.1134 27.3249 30.8763 27.9347C30.5625 28.7429 30.1865 29.3183 29.5804 29.9241C28.9742 30.5303 28.3988 30.9055 27.5902 31.2194C26.9805 31.4576 26.0633 31.739 24.3748 31.8162C22.5492 31.8992 22.0008 31.9172 17.3768 31.9172C12.7525 31.9172 12.2044 31.8992 10.3788 31.8162C8.69026 31.7383 7.77384 31.4561 7.16301 31.2191C6.35483 30.9052 5.77755 30.5299 5.17142 29.9238C4.56528 29.3176 4.19005 28.7418 3.87544 27.9332C3.63839 27.3234 3.35589 26.407 3.27904 24.7184C3.19606 22.8927 3.17946 22.3443 3.17946 17.7195C3.17946 13.0947 3.19606 12.5491 3.27904 10.7234C3.35625 9.03485 3.63839 8.1184 3.87544 7.50792C4.18933 6.69971 4.56528 6.12242 5.17142 5.51626C5.77755 4.9101 6.35483 4.53486 7.16301 4.22024C7.77348 3.98211 8.69026 3.70068 10.3788 3.62311C11.9764 3.55094 12.5955 3.5293 15.8232 3.52569V3.53002ZM26.6211 6.40565C25.4738 6.40565 24.5429 7.33545 24.5429 8.48318C24.5429 9.63054 25.4738 10.5614 26.6211 10.5614C27.7684 10.5614 28.6993 9.63054 28.6993 8.48318C28.6993 7.33581 27.7684 6.40493 26.6211 6.40493V6.40565ZM17.3768 8.83388C12.4653 8.83388 8.48316 12.8161 8.48316 17.7278C8.48316 22.6394 12.4653 26.6199 17.3768 26.6199C22.2883 26.6199 26.269 22.6394 26.269 17.7278C26.269 12.8161 22.288 8.83388 17.3764 8.83388H17.3768ZM17.3768 11.9549C20.5648 11.9549 23.1495 14.5393 23.1495 17.7278C23.1495 20.9159 20.5648 23.5007 17.3768 23.5007C14.1884 23.5007 11.6041 20.9159 11.6041 17.7278C11.6041 14.5393 14.1884 11.9549 17.3768 11.9549Z"
                  fill="white"
                />
              </svg>
            </Link>
            <div className="menu-icon" onClick={openMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.5 7.5h17a1.5 1.5 0 1 0 0-3h-17a1.5 1.5 0 1 0 0 3zM20.5 10.5h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 1 0 0-3zM20.5 16.5h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 1 0 0-3z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sticky">
        <Link to="/" className="icon">
          <svg
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.9428 3.98844C33.6548 4.55344 32.2824 4.92794 30.8515 5.10978C32.3235 4.23089 33.447 2.84978 33.9752 1.18508C32.6027 2.00336 31.0874 2.58135 29.4725 2.9039C28.1693 1.51629 26.312 0.656883 24.2858 0.656883C20.3546 0.656883 17.1897 3.84773 17.1897 7.75944C17.1897 8.32228 17.2373 8.86347 17.3542 9.37868C11.4509 9.09077 6.22737 6.26143 2.7183 1.95141C2.10567 3.0143 1.74632 4.23089 1.74632 5.54057C1.74632 7.99973 3.01271 10.1796 4.90037 11.4417C3.75955 11.42 2.64037 11.0888 1.69221 10.5671C1.69221 10.5888 1.69221 10.6169 1.69221 10.6451C1.69221 14.0957 4.15353 16.9618 7.38118 17.6221C6.80319 17.7801 6.17325 17.8559 5.51949 17.8559C5.06489 17.8559 4.60597 17.8299 4.17518 17.7346C5.0952 20.5466 7.7059 22.614 10.8102 22.6811C8.39429 24.5709 5.32683 25.7096 2.0061 25.7096C1.42378 25.7096 0.865269 25.6836 0.306763 25.6122C3.45215 27.6406 7.17986 28.7987 11.1998 28.7987C24.2663 28.7987 31.41 17.9749 31.41 8.59287C31.41 8.27899 31.3991 7.97592 31.384 7.67502C32.7932 6.6749 33.9774 5.42584 34.9428 3.98844Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link to="/" className="icon">
          <svg
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9999 0.514908C27.5644 0.514908 35.318 8.26847 35.318 17.833C35.318 26.4769 28.985 33.6415 20.7059 34.9407V22.8392H24.7411L24.7411 22.839L25.5089 17.8332L25.5089 17.833H20.7059V14.5844C20.7059 14.1391 20.7768 13.6974 20.9465 13.3041C21.2988 12.4879 22.0764 11.8801 23.5281 11.8801H25.7118V11.8799H25.7119V7.61803C25.7119 7.61803 23.73 7.27979 21.8353 7.27979C18.8684 7.27979 16.6724 8.62836 15.7598 11.1337C15.7217 11.2381 15.686 11.3445 15.6524 11.4529C15.4177 12.2117 15.2939 13.0682 15.2939 14.0178V17.833H10.8968V17.8332H10.8968V22.8392H15.2939V34.9407C7.01481 33.6415 0.681885 26.4769 0.681885 17.833C0.681885 8.26847 8.43543 0.514908 17.9999 0.514908Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link to="/" className="icon">
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3768 0.409035C12.6735 0.409035 12.0832 0.429601 10.2359 0.513669C8.39224 0.598098 7.13379 0.889991 6.03264 1.31827C4.8936 1.76062 3.92739 2.35234 2.96479 3.31534C2.00146 4.27797 1.40975 5.24421 0.965974 6.38292C0.536627 7.48446 0.244382 8.74332 0.161399 10.5863C0.0787765 12.4337 0.0571289 13.0243 0.0571289 17.7278C0.0571289 22.4313 0.0780554 23.0197 0.16176 24.8671C0.246547 26.7108 0.538431 27.9693 0.966336 29.0705C1.40903 30.2095 2.00074 31.1758 2.9637 32.1384C3.92595 33.1018 4.89216 33.6949 6.03047 34.1373C7.13234 34.5656 8.39116 34.8575 10.2345 34.9419C12.0817 35.026 12.6716 35.0465 17.3746 35.0465C22.0783 35.0465 22.6668 35.026 24.5141 34.9419C26.3577 34.8575 27.6176 34.5656 28.7195 34.1373C29.8582 33.6949 30.8229 33.1018 31.7852 32.1384C32.7485 31.1758 33.3402 30.2095 33.784 29.0708C34.2097 27.9693 34.502 26.7104 34.5886 24.8674C34.6716 23.0201 34.6932 22.4313 34.6932 17.7278C34.6932 13.0243 34.6716 12.434 34.5886 10.5867C34.502 8.74296 34.2097 7.48446 33.784 6.38328C33.3402 5.24421 32.7485 4.27797 31.7852 3.31534C30.8219 2.35198 29.8585 1.76026 28.7184 1.31827C27.6144 0.889991 26.3552 0.598098 24.5115 0.513669C22.6643 0.429601 22.0762 0.409035 17.3714 0.409035H17.3768ZM15.8232 3.53002C16.2843 3.52929 16.7988 3.53002 17.3768 3.53002C22.0008 3.53002 22.5488 3.54661 24.3748 3.6296C26.0633 3.70681 26.9797 3.98896 27.5902 4.22601C28.3984 4.53992 28.9746 4.91515 29.5804 5.52131C30.1865 6.12747 30.5617 6.70476 30.8763 7.51297C31.1134 8.12273 31.3959 9.03918 31.4727 10.7278C31.5557 12.5534 31.5738 13.1019 31.5738 17.7238C31.5738 22.3457 31.5557 22.8942 31.4727 24.7199C31.3955 26.4084 31.1134 27.3249 30.8763 27.9347C30.5625 28.7429 30.1865 29.3183 29.5804 29.9241C28.9742 30.5303 28.3988 30.9055 27.5902 31.2194C26.9805 31.4576 26.0633 31.739 24.3748 31.8162C22.5492 31.8992 22.0008 31.9172 17.3768 31.9172C12.7525 31.9172 12.2044 31.8992 10.3788 31.8162C8.69026 31.7383 7.77384 31.4561 7.16301 31.2191C6.35483 30.9052 5.77755 30.5299 5.17142 29.9238C4.56528 29.3176 4.19005 28.7418 3.87544 27.9332C3.63839 27.3234 3.35589 26.407 3.27904 24.7184C3.19606 22.8927 3.17946 22.3443 3.17946 17.7195C3.17946 13.0947 3.19606 12.5491 3.27904 10.7234C3.35625 9.03485 3.63839 8.1184 3.87544 7.50792C4.18933 6.69971 4.56528 6.12242 5.17142 5.51626C5.77755 4.9101 6.35483 4.53486 7.16301 4.22024C7.77348 3.98211 8.69026 3.70068 10.3788 3.62311C11.9764 3.55094 12.5955 3.5293 15.8232 3.52569V3.53002ZM26.6211 6.40565C25.4738 6.40565 24.5429 7.33545 24.5429 8.48318C24.5429 9.63054 25.4738 10.5614 26.6211 10.5614C27.7684 10.5614 28.6993 9.63054 28.6993 8.48318C28.6993 7.33581 27.7684 6.40493 26.6211 6.40493V6.40565ZM17.3768 8.83388C12.4653 8.83388 8.48316 12.8161 8.48316 17.7278C8.48316 22.6394 12.4653 26.6199 17.3768 26.6199C22.2883 26.6199 26.269 22.6394 26.269 17.7278C26.269 12.8161 22.288 8.83388 17.3764 8.83388H17.3768ZM17.3768 11.9549C20.5648 11.9549 23.1495 14.5393 23.1495 17.7278C23.1495 20.9159 20.5648 23.5007 17.3768 23.5007C14.1884 23.5007 11.6041 20.9159 11.6041 17.7278C11.6041 14.5393 14.1884 11.9549 17.3768 11.9549Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
