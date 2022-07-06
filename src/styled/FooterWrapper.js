import styled from "styled-components";

export const FooterWrapper = styled.div`
  ${"" /* display:flex; */}
  padding:6.3em 0px;
  ${"" /* width:90%; */}
  font-family: Poppins;
  width: 100%;
  ${"" /* align-self: center; */}

  .footer {
    display: flex;
    flex-direction: ${({ isTablet, isMobile }) =>
      isMobile ? "column" : "rows"};
    justify-content: space-evenly;
    ${
      "" /* margin:${({ isTablet,isMobile }) => (isMobile ?"3em 0px 2.6em":(isTablet ? "8em 0px 5.9em" : "10em 0px 10em"))}; */
    }
    margin:${({ isTablet, isMobile }) => (isTablet ? "0px 3%" : "0px 8%")};
  }

  .col1 {
    padding-top: 0.9em;
    margin-bottom: 3em;
    display: flex;
    align-items: baseline;
    margin-top:${({ isTablet, isMobile }) => (isTablet ? "3%" : "0px")};
  }

  .col2 {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 3em;
  }

  .col3 {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 3em;
  }

  .col4 {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .linksmain {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  h4 {
    color: #04211f;
    font-weight: 600;
    font-size: 1.3em;
    margin:${({ isTablet, isMobile }) => (isTablet ? "1em 0px" : "0.5em 0px")};
  }

  a {
    text-transform: capitalize;
    text-decoration: none;
    color: rgb(4 33 31 / 60%);
    font-size: 1em;
    font-weight: 400;
    &:hover {
      color: #e97323;
    }
  }

  .otherlinks {
    margin-top: 0.5em;
    padding-bottom: 0.4em;
  }
`;
