import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { HomeContainer } from "../styles/indexStyle"

import MenuSvg from "../assets/menu.svg"
import MapPinSvg from "../assets/mappin.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Välkommen" />
    <HomeContainer>
      <div className="homeResturang">
        <Image ImageUrl="resturangImage"></Image>
        <div className="resturangBubble">
          <p> Öppettider:</p>
          <p>
            Mån-fre: <br></br>11.00 - 21.00
          </p>
          <p>
            Lör: <br></br>12.00 - 21.00
          </p>
          <p style={{ color: "red" }}>Sön - Stängt</p>
        </div>
      </div>
      <div className="homeText">
        <h1>Välkommen till oss</h1>
        Chaweng är namnet på en by från vår hemö Koh Samui som ligger i södra
        delen av Thailand. Här lagas genuin thailändsk mat med kryddigt
        matkultur och färska råvaror av den erfarna kocken.
        <p></p>
        <Link to="/menu/">
          Meny
          <MenuSvg
            style={{
              color: "white",
            }}
          ></MenuSvg>
        </Link>
        <br></br>
        <Link to="/contact/">
          Kontakt{" "}
          <MapPinSvg
            style={{
              color: "darkred",
            }}
          ></MapPinSvg>
        </Link>
      </div>
      <div className="foodImages">
        <Image ImageUrl="tomKhaGai"></Image>
        <Image ImageUrl="springrolls"></Image>
        <Image ImageUrl="phadthai"></Image>
        <Image ImageUrl="gaengShrimp"></Image>
        <Image ImageUrl="gaeng"></Image>
      </div>
    </HomeContainer>
  </Layout>
)

export default IndexPage
