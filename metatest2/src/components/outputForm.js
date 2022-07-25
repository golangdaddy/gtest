import * as React from 'react'
import { GetData, GetNode } from './async'

import Output from '../components/output'
import InputForm from './inputForm'

const tableStyle = {
    "width": "100%",
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

class OutputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        record: {
          "Data": [],
        },
        list: [],
      };
      this.addDocument = this.addDocument.bind(this);
      this.updateClass = this.updateClass.bind(this);

      GetData("/api/node/"+this.props.record).then(data => {
        this.setState({
          list: this.state.list,
          template: this.state.template,
          record: data,
        });
        GetData("/api/nodes/template").then(data => {
          this.setState({
            list: data,
            template: this.state.template,
            record: this.state.record,
          })
        });
      });

    }

    updateClass(event) {
      console.log(event);
      this.setState({
        class: event.target.value,
        list: this.state.list,
        template: this.state.template,
        record: this.state.record,
      })
    }

    addDocument(event) {
      console.log(event);
      GetNode("template_"+this.state.class).then(data => this.setState({
        list: this.state.list,
        template: data,
        record: this.state.record,
      }))
    }

    render() {

      return (
      <>
        <table style={tableStyle}>
          <tbody>
            <tr style={tableHeaderStyle}>
              <td style={cellStyles.left}>{this.state.record.Class}:</td>
              <td style={cellStyles.right}>{this.state.record.ID}</td>
            </tr>
            {
              this.state.record.Data.map(function(group, i){
                return (
                  <Output styles={cellStyles} key={i.toString()} group={group} />
                );
              })
            }
            <tr style={tableHeaderStyle}>
              <td style={cellStyles.left}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <select onChange={this.updateClass}>
                        <option key="0"></option>
                        {
                            this.state.list.map(function(v, i){
                                return (
                                  <option key={(i+1).toString()} value={v}>{v}</option>
                                );
                            })
                        }
                        </select>
                      </td>
                      <td>
                        <button onClick={this.addDocument}>New Doc</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={cellStyles.right}>
                {
                  this.state.template && <InputForm parent={this.state.record.Class + "_" + this.state.record.ID} template={this.state.template}></InputForm>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </>
      );
    }
  }

  export default OutputForm;