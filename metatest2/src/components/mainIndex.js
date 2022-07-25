import * as React from 'react'

import TemplateBrowser from './template_browser'

class MainIndex extends React.Component {

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
        <TemplateBrowser />
    </>
  )}
}

export default MainIndex;
