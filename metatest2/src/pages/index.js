import * as React from 'react'
import { graphql } from "gatsby"
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';

import TopBar from '../components/top_bar';
import MainIndex from '../components/mainIndex'

// Step 2: Define your component
const IndexPage = ({ data }) => {
  const [value, setValue] = React.useState('');
  return (
    <main>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,600&display=swap');
      </style>
      <TopBar></TopBar>
      
    </main>
  )
}

// Step 3: Export your component
export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`