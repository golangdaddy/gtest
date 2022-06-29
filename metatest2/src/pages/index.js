import * as React from 'react'
import { graphql } from "gatsby"

import Input from '../components/input'

const tableStyle = {
  "width": "500px",
  "backgroundColor": "#999",
  "cellSpacing": "0px",
}
const tableHeaderStyle = {
  "backgroundColor": "#ccc",
}

const templateData = {
  "name": "My Test Form Thingy",
  "fields": [
    {"n":"the time","f":"date"},
    {"n":"friends","f":"radio"},
    {"n":"email","f":"email","l":250},
    {"n":"firstname","f":"text","l":250},
    {"n":"lastname","f":"text","l":250},
    {"n":"age","f":"number"},
    {"n":"website","f":"url"},
    {"n":"crypto","f":"range","min":1, "max":1000},
    {"n":"telephone","f":"tel"},
    {"n":"address","f":"address"},  
  ],
}

const tokenData = [
  "",
  ["a", "b", "c", "d"],
  "alex@cpu.host",
  "hello worlds",
  "hello worlds",
  22,
  "https://golang.org",
  56,
  "+447884556767",
  {
    "line1":"150 Chaucer Road",
    "line2":"Broadgate",
    "line3":"",
    "county":"Kent",
    "country": "United Kingdom",
    "postcode": "CT2 9AZ",
  },
]


// Step 2: Define your component
const IndexPage = ({ data }) => {
  return (
    <main>
      <center>
      <h1>About {data.site.siteMetadata.title}</h1>
      <div>
        <form>
          <table style={tableStyle}>
            <tbody>
              <tr style={tableHeaderStyle}><td></td><td>{templateData.name}</td></tr>
              {
                templateData.fields.map(function(object, i){
                  return (
                    <Input key={i.toString()} field={object} data={tokenData[i]} />
                  );
                })
              }
            </tbody>
          </table>
        </form>
      </div>
      </center>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`