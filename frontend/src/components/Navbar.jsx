import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Menu.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);

  const showDescription = (index) => {
    setShowDescriptionIndex(index);
  };

  const hideDescription = () => {
    setShowDescriptionIndex(null);
  };

  const handleMenuButtonClick = () => {
    setShow(true);
  };

  return (
    <>
      <nav>
        <div className="logo">Horaunt</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={handleMenuButtonClick}>
            OUR MENU
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
      {/* Modal */}
      {show && (
        <div className="modal">
          <div className="modalContent">
            <h2 className="title">Menu</h2>
            <div className="card-container">
              {data[0].dishes.map((element, index) => (
                <div
                  className={`card ${
                    showDescriptionIndex === index ? "flipped" : ""
                  }`}
                  key={element.id}
                >
                  <div className="front">
                    <img src={element.image} alt={element.title} onClick={() => showDescription(index)} />
                    <h3 className="title">{element.title}</h3>
                  </div>
                  <div className="back" onClick={hideDescription}>
                    <p className="des">{element.description}</p>
                  
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setShow(false)} className="close">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
