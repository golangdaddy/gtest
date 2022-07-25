import * as React from 'react'

import {GetData, GetNode} from './async';

import TemplateVision from './template_vision'
import InputForm from './inputForm'

class TemplateBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            templates: {},
            template: null,
        };
        this.handleChange = this.handleChange.bind(this);
        GetData('/api/nodes/template').then(data => this.setState(
            {
                template: null,
                templates: data,
            }
        )).then(
            console.log("ok")
        )
    }

    handleChange(event) {
        var state = Object.assign({}, this.state);
        var templateID = event.target.value;
        console.log(templateID);
        GetNode("template_"+templateID).then(data => {
            state.template = data;
            this.setState(state);
        })
    }
  
    render() {
        var formView = '';
        if (this.state.template != null) {
            formView = <InputForm template={this.state.template} />;
        }
        var visionView = '';
        if (this.state.templates.length > 0) {
            visionView = <TemplateVision list={this.state.templates} hc={this.handleChange} />;
        }
      return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            { visionView }
                        </td>
                        <td>
                            { formView }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
    }
  }

  export default TemplateBrowser;