import React from "react";
import { WhyRiseBenefits, imagesData } from "../data/WhyRiseData";
import {
  WhyRiseWrapper,
  CardElementWrapper,
  RiseImagesWrapper,
} from "../styled/WhyRiseWrapper";
import useViewport from "../viewport/useViewport";

const WhyRise = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <WhyRiseWrapper isTablet={isTablet} isMobile={isMobile}>
      <h2>Why Rise</h2>
      <CardElementWrapper isTablet={isTablet} isMobile={isMobile}>
        {WhyRiseBenefits.map((prop) => (
          <>
            <div className="risebenefits">
              <div className="image">
                <img src={prop.img} alt={prop.img_alt} />
              </div>
              <h3 className="headrise">
                <span>{prop.span1}</span>
                <span className="diffcolor">{prop.head_diffClr}</span>
                <span>{prop.span2}</span>
              </h3>
              <div className="pararise">{prop.desc}</div>
            </div>
          </>
        ))}
      </CardElementWrapper>
      <RiseImagesWrapper isTablet={isTablet} isMobile={isMobile}>
        {imagesData.map((prop) => (
          <div className="brandimgs">
            <img src={prop.images} alt={prop.alt_img} />
          </div>
        ))}
      </RiseImagesWrapper>
    </WhyRiseWrapper>
  );
};

export default WhyRise;
