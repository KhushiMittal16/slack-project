import styled from "styled-components";

export const WhyRiseWrapper = styled.div`
  font-family: Poppins;
  margin: 0px 3em;
  h2 {
    font-size: ${({ isTablet, isMobile }) =>
      isMobile ? "2.1em" : isTablet ? "3em" : "4em"};
    color: #04211f;
    ${
      "" /* padding:${({ isTablet, isMobile }) => (isMobile?"":(isTablet? "5.6em 0px em" : "1.8em 0px 1.2em"))}; */
    }
    padding:1.8em 0px 1.2em;
    margin: 0px;
  }
`;

export const CardElementWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: ${({ isTablet, isMobile }) => (isMobile ? "column" : "row")};

  .risebenefits {
    padding: ${({ isTablet, isMobile }) => (isTablet ? "0px 0.8em" : "3px")};
    margin-bottom: ${({ isTablet, isMobile }) => (isMobile ? "5em" : "2em")};
  }

  img {
    width: ${({ isTablet, isMobile }) => (isTablet ? "9.5em" : "11em")};
    transition: transform 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .headrise {
    font-size: 1.5em;
    text-transform: inherit;
  }

  .pararise {
    color: rgb(4 33 31 / 60%);
  }

  .diffcolor {
    color: #5454d4;
  }
`;

export const RiseImagesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: ${({ isTablet, isMobile }) => (isMobile ? "wrap" : "nowrap")};
  margin: 4em 0px 15em;

  .brandimgs {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: ${({ isTablet, isMobile }) => (isMobile ? "wrap" : "nowrap")};
    padding:${({ isTablet, isMobile }) => (isMobile ? "0.8em" : "0px")};
    width: ${({ isTablet, isMobile }) => (isMobile ? "23%" : "10%")};
  }
  img {
    width: 100%;
    padding: 0px 5%;
    opacity: 0.5;
  }
`;
