import * as React from 'react'

import {GetData, PostData} from './async';

import Input from '../components/input'


const tableStyle = {
    "width": "500px",
    "backgroundColor": "#999",
    "cellSpacing": "0px",
  }
  const tableHeaderStyle = {
    "backgroundColor": "#ccc",
  }

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {"inputs":{}};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log(event);
      var ids = event.target.id.split("_");
      var id = [ids[0], ids[1]].join("_");
      console.log(id);
      var state = Object.assign({}, this.state);
      var hiddenInfo = JSON.parse(document.getElementById("_"+id).value);
      state.inputs[event.target.id] = {
        t: hiddenInfo.t,
        n: hiddenInfo.n,
        v: event.target.value,
        x: hiddenInfo.x,
        y: 0,
      };
      if (ids.length == 3) {
        state.inputs[event.target.id].y = parseInt(ids[2])
      }
      this.setState(state);
    }
  
    handleSubmit(event) {
      console.log(this.props.parent);
      console.log(this.state);

      var url = "/api/create/"+this.props.template.Data.title;
      if (this.props.parent != null) {
        url = "/api/node/" + this.props.parent + "/" + this.props.template.ID;
      }
  
      PostData(url, this.state.inputs).then(
        data => {
          this.setState({"inputs":{}});
          console.log(data);
          alert("Created OK");
        }
      );

      event.preventDefault();
    }
  
    render() {
      var hc = this.handleChange;
      var hs = this.handleSubmit;
      return (
        <form onSubmit={hs}>
          <table style={tableStyle}>
            <tbody>
              <tr style={tableHeaderStyle}><td></td><td>{this.props.template.name}</td></tr>
              {
                  this.props.template.Data.fields.map(function(object, i){
                  object.x = i;
                  object.id = i.toString() + "_" + object.t;
                  return (
                    <Input hc={hc} key={i.toString()} field={object} />
                  );
                })
              }
            </tbody>
          </table>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default InputForm;