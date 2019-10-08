import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContactContainer } from "../styles/contactStyle"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakta" />
    <ContactContainer>
      <div className="contactText">
        <h3>Kontakta oss:</h3>
        Telefon: <a href="tel:08-295567">08-29 55 67</a>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/chawengthaiwok.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chaweng Thai Wok
        </a>
        Mail:{" "}
        <a
          href="mailto:info@chawengthaiwok.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@chawengthaiwok.se
        </a>
        <p>
          Adress: <br></br> Tulegatan 2<br></br>172 78 Sundbyberg
        </p>
        <p style={{ color: "green" }}>Öppettider: </p> Mån-fre: 11.00 - 21.00
        <br></br> Lör: 12.00 - 21.00
        <p style={{ color: "red" }}>Sön - Stängt</p>
      </div>
      <div className="contactMap">
        <iframe
          title="MapToChawengThaiWok"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=chaweng%20thai%20wok&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </ContactContainer>
  </Layout>
)

export default ContactPage
