import styled from "styled-components"

export const NavigationContainer = styled.div`
  margin: 0 auto;
  color: red;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  @media (max-width: 320px) {
    padding: 1.45rem 0.7rem;
  }
`

export const WebNavContainer = styled.div`
  .banner {
    /* border: 1px solid grey; */
    border-radius: 5px;
  }
  .webNavLink {
    display: flex;
    justify-content: space-evenly;
    background: #ff621f;
    opacity: 65%;
    padding: 1rem;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    margin: 1.5rem 0;

    @media (max-width: 576px) {
      padding: 1rem 0.3rem;
    }

    a {
      display: flex;
      font-size: 19px;
      align-items: center;
      justify-content: center;
      width: 20%;
      text-decoration: none;
      border-radius: 5px;
      background: #f7d30f;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
      text-shadow: 0px 1px 0px #2f6627;
      padding: 16px 31px;
      color: black;
      font-style: bold;
      cursor: pointer;

      svg {
        width: 20%;
        height: 70%;
        margin-left: 10%;
      }
      @media (max-width: 900px) {
        svg {
          display: none;
        }
      }

      @media (max-width: 576px) {
        width: 30%;
        padding: 15px 15px;
      }
      @media (max-width: 360px) {
        padding: 15px 15px;
        font-size: 17px;
      }
    }

    a:hover {
      background-color: #53a6d6;
      color: white;
    }
    a:active {
      position: relative;
      top: 1px;
    }
  }
`

export const MobileNavContainer = styled.div``

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
