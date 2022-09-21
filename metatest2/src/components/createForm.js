import * as React from 'react'

import Input from '../components/input'

import {GetData, PostData} from './async';

const tableStyle = {
    "width": "500px",
    "backgroundColor": "#999",
    "cellSpacing": "0px",
  }
const lColStyle = {
  textAlign: "right",
  width: "50%",
}
const rColStyle = {
  textAlign: "left",
}

var doNothing = function () {}

class CreateForm extends React.Component {

  doNothing(event) {

  }

  handleChangeTags(event) {
    var s = "" + event.target.value;
    this.state.tags = s.split(",");
    this.updatePreview();
  }

  handleChangeTemplateTitle(event) {
    console.log(event);
    var state = Object.assign({}, this.state);
    state.title = event.target.value;
    this.setState(state);
    this.updatePreview();
  }

  handleChangeFieldName(event) {
    var state = Object.assign({}, this.state);
    state.inputs["n"] = event.target.value;
    this.setState(state);
    this.updatePreview();
  }
  
  handleChangeFieldType(event) {
    console.log(event);
    var id = event.target.id;
    var state = Object.assign({}, this.state);
    state.inputs["t"] = event.target.value;
    this.setState(state);
    this.updatePreview();
  }

  updatePreview() {
    document.getElementById("preview").innerHTML = JSON.stringify(this.state, null, 2);
  }

  handleSubmit(event) {
    console.log(event);
    console.log(this.state);

    var newField = Object.assign({}, this.state.inputs);
    newField.x = this.state.fields.length;
    this.state.fields.push(newField);
    this.setState(this.state);
    
    event.preventDefault();
    console.log(this.template);
    this.updatePreview();
  }

  completeForm(event) {
    var newObject = Object.assign({}, this.state);
    newObject.inputs = null;
    PostData('/api/template', newObject)
    .then(data => {
      console.log(data);
      alert("done");
      this.setState({});
    });
    event.preventDefault();
  }

  constructor(props) {

      super(props);
      this.state = {
        title: 'My New Form',
        inputs: {},
        fields: [],
        tags: [],
      };
  
      this.doNothing = this.doNothing.bind(this);
      this.handleChangeTemplateTitle = this.handleChangeTemplateTitle.bind(this);
      this.handleChangeFieldName = this.handleChangeFieldName.bind(this);
      this.handleChangeTags = this.handleChangeTags.bind(this);
      this.handleChangeFieldType = this.handleChangeFieldType.bind(this);
      this.completeForm = this.completeForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updatePreview = this.updatePreview.bind(this);

      this.tools = [
        "primary",
        "image ",
        "names",
        "gender",
        "address",
        "text",
        "email",
        "number",
        "tel",
        "list",
        "date",
        "textarea",
        "url",
        "range",
      ];
    }
  
    render() {
      var hs = this.handleSubmit;
      return (
        <div>
          <h3>{this.state.name}</h3>
          <table style={{"width":"100%"}}>
            <tbody>
              <tr>
                <td style={{"width":"50%"}}>

                <table>
                  <tbody>
                    <tr>
                      <td style={lColStyle}>
                        Template Title
                      </td>
                      <td style={rColStyle}>
                        <input placeholder="Template Name" onChange={this.handleChangeTemplateTitle} />
                      </td>
                    </tr>
                    <tr>
                      <td style={lColStyle}>
                        Template Tags
                      </td>
                      <td style={rColStyle}>
                        <input type="text" placeholder='add comma-separated tags..' onChange={this.handleChangeTags}></input>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <hr />

                <form onSubmit={hs}>
                  <table>
                    <tbody>
                      <tr>
                        <td style={lColStyle}>
                          Field Type
                        </td>
                        <td style={rColStyle}>
                          <select placeholder="class" onChange={this.handleChangeFieldType}>
                            <option key="0" value=""></option>
                            {
                              this.tools.map(function(v, i){
                                return (
                                  <option key={(i++).toString()} value={v}>{v}</option>
                                );
                              })
                            }
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style={lColStyle}>
                          Display Text
                        </td>
                        <td style={rColStyle}>
                          <input type="text" placeholder="Display text" onChange={this.handleChangeFieldName}></input>                          
                        </td>
                      </tr>
                      <tr>
                        <td style={lColStyle}>
                        </td>
                        <td style={rColStyle}>
                        <input type="submit" value="Add Field" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                </form>

                  <hr />

                  <table style={tableStyle}>
                    <tbody>
                      {
                        this.state.fields.map(function(object, i){
                          return (
                            <Input hc={doNothing} key={i.toString()} field={object} />
                          );
                        })
                      }
                    </tbody>
                  </table>
                </td>
                <td>
                  <div>
                    <textarea style={{"height":"100%"}} id="preview" style={{"width":"100%","height":"200px"}}></textarea>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <hr />

          <form onSubmit={this.completeForm}>
            <div>
              <input type="submit" value="submit"></input>
            </div>
          </form>
        </div>
      );
    }
  }

  export default CreateForm;