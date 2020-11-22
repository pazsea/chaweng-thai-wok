import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { intervalChecker } from "day-interval-function"
import Image from "../components/image"
import HomeSvg from "../assets/home.svg"
import MenuSvg from "../assets/menu.svg"
import MapPinSvg from "../assets/mappin.svg"

import { NavigationContainer, WebNavContainer } from "../styles/headerStyle"
import { useInterval } from "../constants/functions"

//Web Container
//Navigation för mobil

function Header() {
  const [storeState, setStoreState] = useState(true)

  const options = {
    myTimeZone: "Europe/Stockholm",
    timeFormat: 24,
  }

  const daysAndTimeSlots = [
    {
      sunday: false,
      time: [],
    },
    {
      monday: true,
      time: ["11:00", "21:00"],
    },
    {
      tuesday: true,
      time: ["11:00", "21:00"],
    },
    {
      wednesday: true,
      time: ["11:00", "21:00"],
    },
    {
      thursday: true,
      time: ["11:00", "21:00"],
    },
    {
      friday: true,
      time: ["11:00", "21:00"],
    },
    {
      saturday: true,
      time: ["12:00", "21:00"],
    },
  ]
  function openStore() {
    if (storeState) {
      // console.log("BUTIKEN REDAN ÖPPEN " + storeState)
    } else {
      setStoreState(true)
      // console.log("ÖPPEN BUTIK " + storeState)
    }
  }
  function closeStore() {
    if (openStore) {
      setStoreState(false)
      // console.log("STÄNGD BUTIK " + storeState)
    } else {
      // console.log("BUTIKEN REDAN STÄNGD " + storeState)
    }
  }
  useEffect(() => {
    intervalChecker(daysAndTimeSlots, options, openStore, closeStore)
  })

  //Every ten minute it check again..
  useInterval(() => {
    intervalChecker(daysAndTimeSlots, options, openStore, closeStore)
  }, 600000)

  return (
    <header>
      <NavigationContainer>
        <WebNavContainer storeState={storeState}>
          <Image className="banner" ImageUrl="restaurantBannerImage" />
          <div className="navLinkContainer">
            <div className="openHours">
              Vi har: <span>{storeState ? "ÖPPET" : "STÄNGT"}</span>
            </div>
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
          </div>
        </WebNavContainer>
      </NavigationContainer>
    </header>
  )
}

export default Header
