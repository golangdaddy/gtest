import * as React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNode from '../components/mainNode';

// Step 2: Define your component
const MetasPage = ({ data }) => {
  const [value, setValue] = React.useState('');
  return (
    <main>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,600&display=swap');
      </style>
      <Router>
              <Routes>
                <Route path="/meta" element={<MainNode />}></Route>
              </Routes>
        </Router>
    </main>
  )
}

export default MetasPage;

