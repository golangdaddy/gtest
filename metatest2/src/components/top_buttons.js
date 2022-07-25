import * as React from 'react'

import {GetData, PostData} from './async';
import { Link } from "gatsby"

class TopButtons extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }
  
    render() {
      var hs = this.props.handleSubmit;
      return (
        <span>
            <Link to='/'>
                <button style={this.props.parentStyle}>Home</button>
            </Link>
            <Link to='/template'>
                <button style={this.props.parentStyle}>Templates</button>
            </Link>
            <Link to='/search'>
                <button style={this.props.parentStyle}>Search</button>
            </Link>
        </span>
      );
    }
  }

  export default TopButtons;