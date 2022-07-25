import * as React from 'react'

import TopBar from '../components/top_bar';

// Step 2: Define your component
const TemplatePage = ({ data }) => {
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

export default TemplatePage;