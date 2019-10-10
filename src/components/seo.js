/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: `Chaweng Thai Wok. Vi lagar utsökt thailändsk mat. Kom till oss i Sundbyberg och ät dig mätt!`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta
        name="Description"
        content="Chaweng Thai Wok. Vi lagar utsökt thailändsk mat. Kom till oss i Sundbyberg och ät dig mätt!"
      ></meta>
      <meta
        property="og:description"
        content="Chaweng Thai Wok. Vi lagar utsökt thailändsk mat. Kom till oss i Sundbyberg och ät dig mätt!"
      ></meta>
      <meta
        property="og:image"
        content="https://howlygil.sirv.com/Images/Thumbnails/store.png"
      ></meta>
      <meta
        property="twitter:image"
        content="https://howlygil.sirv.com/Images/Thumbnails/store.png"
      ></meta>
      <meta
        property="twitter:description"
        content="Chaweng Thai Wok. Vi r utsökt thailändsk mat. Kom till oss i Sundbyberg och ät dig mätt!"
      ></meta>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Chaweng Thai Wok. Vi lagar utsökt thailändsk mat. Kom till oss i Sundbyberg och ät dig mätt!`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
