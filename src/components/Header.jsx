import React, { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import RightArrow from "../assets/rightArrow.svg";

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <header className="css-1s59duc">
      <div style={{ background: "transparent" }}>
        <div className="css-1s275f2">
          <div
            style={{ cursor: "pointer" }}
            data-testid="logo"
            href="/"
            className="css-a983kj"
          >
            <img src={Logo} alt="Cross" />
          </div>
          <div className="flex">
            <div className="menu-container hidden md:flex">
              <div className="pl-20">
                <a
                  href="https://paychek.uni.club/"
                  className="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]"
                >
                  Uni Paychek
                </a>
                <div className="w-full mt-1 h-[2px] undefined"></div>
              </div>
            </div>
            <div className="md:hidden flex pl-20">
              <button
                className="w-12 h-12 flex justify-center items-center"
                aria-label="menu"
                onClick={() => setIsMenuClicked((prevState) => !prevState)}
              >
                {isMenuClicked ? (
                  <img src={Close} alt="Cross" />
                ) : (
                  <img src={Menu} alt="Cross" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuClicked && (
        <div className="md:hidden">
          <div className="text-white mobile-menu-bg shadow-lg">
            <div className="p-4 px-5 font-medium text-sm leading-7 css-5z988z">
              <a
                href="https://paychek.uni.club/"
                className="flex justify-between"
              >
                <span>Uni Paychek</span>
                <span>
                  <img src={RightArrow} alt="Cross" />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
