import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "./Hero.css";

const ListIcons = [
  {
    id: 1,
    icons: <FaDatabase />,
    name: "staxx",
  },
  {
    id: 2,
    icons: <FaAsterisk />,
    name: "Star AI",
  },
  {
    id: 3,
    icons: <FaAccusoft />,
    name: "Accusoft",
  },
];

const SocialIcons = [
  {
    id: 1,
    icons: <FaFacebook size={20} />,
  },
  {
    id: 2,
    icons: <FaTwitter size={20} />,
  },
  {
    id: 3,
    icons: <FaGithub size={20} />,
  },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              neque sint quam reprehenderit dicta minus facilis veritatis
              debitis facere. Magnam temporibus fugiat laborum consectetur nam
              molestias. Magni inventore corporis velit?
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                {ListIcons.map((data) => (
                  <span>
                    {data.icons} {data.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Sign in with</p>
                <div className="social-login">
                  {SocialIcons.map((data) => (
                    <span>{data.icons}</span>
                  ))}
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button>Create Your Account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  By signing up, you agree to our
                  <span className="primary-color"> Terms, Data Policy </span>
                  and <span className="primary-color"> Cookies Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
