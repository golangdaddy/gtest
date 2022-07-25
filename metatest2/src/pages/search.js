import * as React from 'react'

import TopBar from '../components/top_bar';

// Step 2: Define your component
const SearchPage = ({ data }) => {
  const [value, setValue] = React.useState('');
  const [canRender, setCanRender] = useState(false);
  return (
    <main>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,600&display=swap');
      </style>
      {
        canRender ? <TopBar></TopBar>: null
      }
      
    </main>
  )
}

export default SearchPage;

