import styled from "styled-components"

export const MenuContainer = styled.div`
  position: relative;
  display: grid;
  padding: 2em 0 1em 0;
  background: rgba(255, 98, 31, 0.5);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  .foodHeader {
    text-align: center;

    h1 {
      font-size: 3em;
      font-family: "Fjalla One", sans-serif;
      margin: 0 auto;
      @media (max-width: 650px) {
        font-size: 2em;
      }
    }
    p {
      font-family: "Noto Sans", sans-serif;
    }
  }

  .foodHeaderCategory {
    font-family: "Noto Sans", sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    .foodUnderHeader {
      font-size: 0.6em;
      font-style: italic;
      font-weight: 200;
      margin: 0;
    }
  }

  .foodMenuContainer {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    grid-template-areas: "foodListA foodListB";
    grid-template-columns: 1.4fr 1fr;

    @media (max-width: 650px) {
      grid-template-areas:
        "foodListA"
        "foodListB";
      grid-template-columns: 1fr;
    }
    ol {
      li {
        font-family: "Noto Sans", sans-serif;
        font-weight: 700;
      }
      li:first-child {
        /* background: lightcoral; */
      }
      li:nth-child(even) {
        /* background: lightblue; */
      }
    }
  }

  .foodDesc {
    font-style: italic;
    margin: 0.2em 0 1em 0;
  }

  .foodListA {
    grid-area: foodListA;
  }

  .foodListB {
    grid-area: foodListB;
  }

  svg {
    width: 20px;
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
    width: 15%;
    padding: 0.2em 1em;
    height: fit-content !important;
    @media (max-width: 650px) {
      top: -20px;
      right: -12px;
      width: 30%;
      font-size: 8px;
    }
  }

  .foodMeats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-family: "Fjalla One", sans-serif;
    text-align: center;
    @media (max-width: 650px) {
      font-size: 12px;
      padding: 0 2em;
      grid-template-columns: 1fr 1fr;
    }
  }
`
