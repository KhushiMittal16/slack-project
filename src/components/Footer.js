import React from "react";
import { FooterWrapper } from "../styled/FooterWrapper";
import useViewport from "../viewport/useViewport";
import {Link} from "react-router-dom"
const Footer = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <FooterWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="footer">
        <div className="col1">
          <img
            width="90"
            height="30"
            src="https://rise.uicore.co/marketing-agency/wp-content/uploads/sites/7/2022/03/Rise-logo.webp"
            alt="rise"
          />
        </div>
        <div className="col2">
          <h4>Company</h4>
          <div className="linksmain">
          
          <div className="otherlinks"><Link to="/">how rise works</Link></div>
          <div className="otherlinks"><Link to="/">our methode</Link></div>
          <div className="otherlinks"><Link to="/">our strategies</Link></div>
          <div className="otherlinks"><Link to="/">Privacy</Link></div>
          </div>
        </div>
        <div className="col3">
          <h4>About</h4>
          <div className="linksmain">
          <div className="otherlinks"><Link to="/">Reviews</Link></div>
          <div className="otherlinks"><Link to="/">News and press</Link></div>
          <div className="otherlinks"><Link to="/">Partner with rise</Link></div>
          <div className="otherlinks"><Link to="/">carrier</Link></div>
          </div>
        </div>
        <div className="col4">
          <h4>Social Media</h4>
          <div className="linksmain">
          <div className="otherlinks"><Link to="/" className="links">Facebook</Link></div>
            <div className="otherlinks"><Link to="/">Instagram</Link></div>
            <div className="otherlinks"><Link to="/">Linkdin</Link></div>
            <div className="otherlinks"><Link to="/">Twitter</Link></div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
