import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import settings from './settings'
import Script from 'next/script'

const socialTags = ({
  url,
  type,
  title,
  description,
  image,
  createdAt,
  updatedAt
}) => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:site',
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter
    },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    {
      name: 'twitter:creator',
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter
    },
    { name: 'twitter:image:src', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'og:title', content: title },
    {
      name: 'og:type',
      content: type
    },
    {
      name: 'og:url',
      content: url
    },
    { name: 'og:image', content: image },
    { name: 'og:description', content: description },
    {
      name: 'og:site_name',
      content: settings && settings.meta && settings.meta.title
    },
    {
      name: 'og:published_time',
      content: createdAt || new Date().toISOString()
    },
    {
      name: 'og:modified_time',
      content: updatedAt || new Date().toISOString()
    }
  ]

  return metaTags
}

const SEO = (props) => {
  const { title, description, image, keywords } = props
  return (
    <Head>
      <title>BadrChina</title>
      <meta name='description' content={description} />
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={image} />
      <meta name='keywords' content={keywords} />
      {/* <meta
        name='facebook-domain-verification'
        content='q6k1nsed40095vpwejdntszz1f82c6'
      /> */}
      {/* <meta
        property='og:image'
        content='https://uacademy.uz/images/poster.webp'
        key='ogimage'
      /> */}

      <meta
        property='og:image'
        content='http://uacademy.uz/images/poster.webp'
      />
      <meta property='og:image:type' content='image/webp' />
      <meta property='og:image:width' content='1024' />
      <meta property='og:image:height' content='1024' />
      <link rel='icon' href='/favicon.ico' />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />
      })}
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />

      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-8L936WV9R2'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8L936WV9R2');
          `
        }}
      />
    </Head>
  )
}

SEO.defaultProps = {
  url: settings && settings.meta && settings.meta.url,
  type: 'website',
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
  keywords: settings && settings.meta && settings.meta.keywords
}

SEO.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default SEO
