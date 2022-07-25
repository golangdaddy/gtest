import * as React from 'react'
import { GetData, GetNode } from './async'

import OutputNested from '../components/outputNested'

const tableStyle = {
    "width": "500px",
//    "backgroundColor": "#999",
    "cellSpacing": "0px",
  }
  const tableHeaderStyle = {
//    "backgroundColor": "#ccc",
  }
  
  const cellStyles = {
    "left": {
        fontFamily: "'Cabin', sans-serif",
        fontSize: "30px",
        "textAlign": "right",
        "verticalAlign": "top",
    },
    "right": {
        fontFamily: "'Cabin', sans-serif",
        fontSize: "30px",
        "textAlign": "left",
    }
}

class OutputFormNested extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        node: {
          Data: [],
        },
      };

      GetNode(this.props.record).then(data => {
        console.log("found node", data);
        this.setState(
          {
            node: data,
          }
        );
      });
    }


    render() {

      return (
        <table style={tableStyle}>
          <tbody>
            <tr style={tableHeaderStyle}>
              <td style={cellStyles.left}>{this.state.node.Class}:</td>
              <td style={cellStyles.right}>{this.state.node.ID}</td>
            </tr>
            {
              this.state.node.Data.map(function(group, i){
                return (
                  <OutputNested styles={cellStyles} key={i.toString()} group={group} />
                );
              })
            }
          </tbody>
        </table>
      );
    }
  }

  export default OutputFormNested;