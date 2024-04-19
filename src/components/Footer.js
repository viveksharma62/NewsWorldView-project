import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      {/* Grid container */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">NewsWorldView about</h5>
            <p>
            Welcome to our news section, your go-to destination for staying informed about the latest happenings around the world. Whether you're interested in breaking news, insightful analyses, or captivating stories, we've got you covered.
            </p>
            <p>
            Our dedicated team of journalists works tirelessly to bring you the most accurate and relevant news from various sectors including:
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Top 1 News</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">General</a>
              </li>
              <li>
                <a href="#!" className="text-white">Business</a>
              </li>
              <li>
                <a href="#!" className="text-white">Entertainment</a>
              </li>
              <li>
                <a href="#!" className="text-white">health</a>
              </li>
            </ul>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Top 2 News</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">Science</a>
              </li>
              <li>
                <a href="#!" className="text-white">Sports</a>
              </li>
              <li>
                <a href="#!" className="text-white">Technology</a>
              </li>
              <li>
                <a href="#!" className="text-white">More..</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://myportfolio-ashy-rho.vercel.app/"> Vivek Sharma</a>
      </div>
    </footer>
  );
}

export default Footer;
