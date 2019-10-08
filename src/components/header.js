import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import HomeSvg from "../assets/home.svg"
import MenuSvg from "../assets/menu.svg"
import MapPinSvg from "../assets/mappin.svg"

import { NavigationContainer, WebNavContainer } from "../styles/headerStyle"

//Web Container
//Navigation för mobil

const Header = () => (
  <header
  // style={{
  //   marginBottom: `1.45rem`,
  // }}
  >
    <NavigationContainer>
      <WebNavContainer>
        <Image className="banner" ImageUrl="restaurantBannerImage" />

        <div className="webNavLink">
          <Link to="/">
            Hem <HomeSvg style={{ color: "#1E5598" }} />
          </Link>
          <Link to="/menu/">
            Meny
            <MenuSvg
              style={{
                color: "white",
              }}
            ></MenuSvg>
          </Link>
          <Link to="/contact/">
            Kontakt{" "}
            <MapPinSvg
              style={{
                color: "darkred",
              }}
            ></MapPinSvg>
          </Link>
        </div>
      </WebNavContainer>
    </NavigationContainer>
  </header>
)

export default Header
