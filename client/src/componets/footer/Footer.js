import React from "react";
import "./footer.css";
const Footer = () => {


    const year = new Date().getFullYear();
    console.log(year);
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get to khonw</h3>
          <p>Abous us</p>
          <p>Carreers</p>
          <p> press release</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footer_details_one">
          <h3>Connect with us</h3>
          <p>Facebook</p>
          <p>twitter</p>
          <p> instagram</p>
        </div>
        <div className="footer_details_one">
          <h3>Connect with us</h3>
          <p>Facebook</p>
          <p>twitter</p>
          <p> instagram</p>
        </div>
        <div className="footer_details_one">
          <h3>Connect with us</h3>
          <p>Facebook</p>
          <p>twitter</p>
          <p> instagram</p>
        </div>
      </div>
      <div className="lastdetails">
        <img src="./amazon_PNG25.png" alt="" />
        <p>
          Condition of Use Privacy  &nbsp; &nbsp; &nbsp; Notice Your Ads  &nbsp; &nbsp; &nbsp; Privacy Rights © 1996-{year}, &nbsp; &nbsp; &nbsp; 
          Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;

