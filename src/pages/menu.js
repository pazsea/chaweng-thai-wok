import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MenuContainer } from "../styles/menuStyle"

import ChilliImage from "../assets/chilli.svg"

//STOR H1 med underrubriker
//STOR H3 med samma underrubriker
// Vanliga P + Chillipeppar

const MenuPage = () => (
  <Layout>
    <SEO title="Meny" />
    <MenuContainer>
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
      <div className="foodHeader">
        <h1>LUNCH 90 :-</h1>{" "}
        <p>
          (Kl. 11:00 - 14:00 läsk & kaffe ingår)<br></br>Telefon:{" "}
          <a href="tel:123-456-7890">123-456-7890</a>
        </p>
      </div>
      <div className="foodMeats">
        <h2>Kyckling 99:-</h2>
        <h2>Vegetarisk 90:-</h2>
        <h2>Biff 99:-</h2>
        <h2>Räkor 119:-</h2>
      </div>
      <div className="foodMenuContainer">
        <ol className="foodListA">
          <h2 className="foodHeaderCategory">
            GRYTA<span className="foodUnderHeader"> Serveras med ris</span>
          </h2>
          <li>
            Gaeng keowan <ChilliImage />
            <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">grön curry, grönsaker, kokosmjölk</p>
          <li>
            Gaeng ped <ChilliImage />
            <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">röd curry, grönsaker, kokosmjölk</p>
          <li>
            Gaeng garri <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">gul curry, ananas, grönsaker, kokosmjölk</p>
          <li>
            Gaeng paneng <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">paneng curry, grönsaker, kokosmjölk</p>{" "}
          <li>
            Gaeng massaman <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">massaman curry, grönsaker, kokosmjölk</p>{" "}
          <h2 className="foodHeaderCategory">
            SOPPA<span className="foodUnderHeader"> Serveras med ris</span>
          </h2>
          <li>Tom kha</li>
          <p className="foodDesc">
            grönsaker, kokosmjölk, tamarindsaft, citrongräs, galangal, limeblad,
            koriander
          </p>{" "}
          <li>
            Tom yam <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">
            kokosmjölk, chilipasta, färsk chili, citrongräs, limeblad,
            koriander, citronsaft, grönsaker
          </p>{" "}
          <h2 className="foodHeaderCategory">
            WOK RÄTTER<span className="foodUnderHeader"> Serveras med ris</span>
          </h2>
          <li>
            Pad prik <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">färsk chili, grönsaker</p>{" "}
          <li>Pad med mamuang</li>
          <p className="foodDesc">cashewnötter, chilipasta, grönsaker</p>{" "}
          <li>
            Pad Kra pao <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">thaibasilika, färsk chili, grönsaker</p>{" "}
          <li>Pad pong garri</li>
          <p className="foodDesc">gul curry, grönsaker </p>{" "}
        </ol>
        <ol className="foodListB" start="12">
          <h2 className="foodHeaderCategory">
            WOK RÄTTER<span className="foodUnderHeader"> Serveras med ris</span>
          </h2>
          <li>Pad kratiam prik thai</li>
          <p className="foodDesc">vitlök, peppar, grönsaker </p>{" "}
          <li>
            Pad prik gaeng daeng <ChilliImage />
            <ChilliImage />
          </li>
          <p className="foodDesc">röd curry, grönsaker </p> <li>Pad khing</li>
          <p className="foodDesc">ingefära, grönsaker </p>{" "}
          <li>Pad nam man hoi</li>
          <p className="foodDesc">ostronsås, grönsaker </p> <li>Gai satay</li>
          <p className="foodDesc">kyckling, jordnötssås </p>{" "}
          <li>
            Pad nam prik pao <ChilliImage />
          </li>
          <p className="foodDesc">chilipasta, grönsaker </p>{" "}
          <h2 className="foodHeaderCategory">STEKT RIS/NUDLAR</h2>
          <li>Khao pad</li>
          <p className="foodDesc">stekt ris, ägg, grönsaker </p>
          <li>Pad thai</li>
          <p className="foodDesc">
            stekta risnudlar, ägg, grönsaker, jordnötter
          </p>
          <li>Pad mee</li>
          <p className="foodDesc">stekta äggnudlar, grönsaker </p>
          <li>Popia</li>
          <p className="foodDesc">vårrullar, grönsaker </p>
          <li>Pad mee keowan</li>
          <p className="foodDesc">grön curry, grönsaker </p>
          <li>Pad mee röd curry</li>
          <p className="foodDesc">grönsaker </p>
          <h2 className="foodHeaderCategory">Extra tillbehör</h2>
          <li>Ris / nudlar 10 kr</li> <li>Kyckling /biff /räkor 20 kr</li>
          <li>Cashewnötter 10 kr</li> <li>Läsk/Kaffé 15 kr </li>
        </ol>
      </div>
    </MenuContainer>
  </Layout>
)

export default MenuPage
