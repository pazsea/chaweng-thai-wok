import styled from "styled-components"

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: minmax(400px, auto);
  column-gap: 1em;
  row-gap: 1em;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  .contactText {
    display: flex;
    font-size: 17px;
    font-family: "Noto Sans", sans-serif;
    flex-direction: column;
    padding: 2em;
    background: rgba(255, 98, 31, 0.5);
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    font-weight: 500;

    h3 {
      font-family: "Fjalla One", sans-serif;
    }
  }

  .contactMap {
    iframe {
      width: 100%;
      min-height: 400px;
      height: 100%;
    }
  }
`
