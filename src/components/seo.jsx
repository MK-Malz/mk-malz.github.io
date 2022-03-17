import React from "react"
import {Helmet} from "react-helmet"

export const SEO = (props) => {
 return(
  <Helmet title = {props.data ? props.data.title : 'Portfolio'}
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          name: `description`,
          content: props.data ? props.data.description : '',
        },
        {
          name: `keywords`,
          content: props.data ? props.data.keywords : '',
        },
        {
          property: "og:url",
          content: props.data ? props.data.someUrl : ''
        },
        {
          property: "og:type",
          content: props.data ? props.data.someArticle : 'Website'
        },
        {
          property: "og:title",
          content: props.data ? props.data.someTitle : ''
        },
        {
          property: "og:description",
          content: props.data ? props.data.someDescription : ''
        },
        {
          property: "og:image",
          content: props.data ? props.data.someImage : ''
        },
        {
          property: "fb:app_id",
          content: props.data ? props.data.someFbAppId : ''
        },{
          property: "twitter:card",
          content: props.data ? props.data.someSummary : ''
        },
        {
          property: "twitter:creator",
          content: props.data ? props.data.someAuthorName : ''
        },
        {
          property: "twitter:title",
          content: props.data ? props.data.someTitle : ''
        },
        {
          property: "twitter:description",
          content: props.data ? props.data.someDescription : ''
        },
        {
          property: "twitter:image",
          content: props.data ? props.data.someImage : ''
        } 
      ]}
   />
   
  )
}