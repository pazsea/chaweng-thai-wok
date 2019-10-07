import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 1em;
  }
  div {
    /* border: 1px solid red; */
    border-radius: 5px;
    @media (max-width: 768px) {
      margin: 0 0 1em 0;
    }
  }
  .homeText {
    display: flex;
    font-size: 13px;
    font-family: "Noto Sans", sans-serif;
    flex-direction: column;
    padding: 2.6em;
    background: rgba(255, 98, 31, 0.5);
    grid-auto-rows: minmax(300px, auto);
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      font-size: 13px;
    }

    h1 {
      font-family: "Fjalla One", sans-serif;
      margin-top: 0.2em;
    }
    svg {
      width: 16px;
      height: 20px;
      margin-left: 10%;
    }
    a {
      font-family: "Fjalla One", sans-serif;
      display: flex;
      justify-content: center;
      align-self: center;
      padding: 0.6rem 0;
      font-size: 15px;
      width: 100%;
      text-decoration: none;
      border-radius: 5px;
      background: #f7d30f;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
      text-shadow: 0px 1px 0px #2f6627;
      color: black;
      font-style: bold;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        font-size: 15px;
        width: 80%;
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

  .foodImages {
    display: flex;
    grid-column: span 2;

    div {
      flex: 1;
      height: 100px;
    }
  }

  .homeResturang {
    height: 100%;
    position: relative;
    div {
      height: 100%;
      img {
        object-fit: cover;
      }
    }
  }

  .resturangBubble {
    font-family: "Fjalla One", sans-serif;

    text-align: center;
    font-size: 11px;
    font-weight: 700;
    box-shadow: 3px 2px rgba(255, 98, 31, 0.6);
    border-radius: 50%;
    position: absolute;
    background: #f7d30f;
    top: 10px;
    right: 10px;
    width: 25%;
    padding: 0.2em 1em;
    height: fit-content !important;
    @media (max-width: 768px) {
      width: 33%;
      font-size: 10px;
    }
  }
`

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
