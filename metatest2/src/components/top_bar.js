import * as React from 'react'
import { graphql } from "gatsby"
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';

import {GetData, PostData} from './async';
import TopButtons from './top_buttons';

import MainIndex from './mainIndex';
import MainTemplate from './mainTemplate';
import MainSearch from './MainSearch';
import MainMeta from './mainMeta';
import MainNode from './mainNode';


const barStyle = {
    backgroundColor: "#444",
    color: "white",
    fontFamily: "'Cabin', sans-serif",
    borderRadius: "6pc",
    padding:"10px",
};

class TopBar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      var hp = this.props.hp;
      return (
      <>
        <div style={barStyle}>
            <form onSubmit={hp}>
                <table>
                    <tbody>
                        <tr>
                            <td><h1 style={{"margin":"10px"}}>MetaStas</h1></td>
                            <td><TopButtons parentStyle={barStyle} hp={hp}></TopButtons></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        <Router>
              <Routes>
                <Route path="/" element={<MainIndex />}></Route>
                <Route path="/template" element={<MainTemplate />}></Route>
                <Route path="/search" element={<MainSearch />}></Route>
                <Route path="/metas" element={<MainMeta />}></Route>
                <Route path="/meta" element={<MainNode />}></Route>
              </Routes>
        </Router>
      </>
      );
    }
  }

  export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

  export default TopBar;