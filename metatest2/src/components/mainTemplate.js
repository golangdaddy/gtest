import * as React from 'react'

import TopBar from './top_bar'
import CreateForm from './createForm'

class MainTemplate extends React.Component {

  handlePage(event) {
    console.log(event.target.value);
    var newState = Object.assign({}, this.initState);;
    newState.mode = event.target.value;
    this.setState(newState);
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
    this.state = this.initState;
  }

  render() {
    return (
    <>
        <CreateForm />
    </>
  )}
}

// Step 3: Export your component
export default MainTemplate;
