// Step 1: Import React
import * as React from 'react'

import OutputNames from './output_names'
import OutputStandard from './output_standard'
import OutputDate from './output_date'
import OutputAddress from './output_address'
import OutputGender from './output_gender'
import OutputTextarea from './output_textarea'

const Output = (props) => {

    var view = "?";
    if (props.group) {
    switch (props.group[0].t) {

    case "names":
      view = <OutputNames styles={props.styles} field={props.group} />;
      break;

    case "address":
      view = <OutputAddress styles={props.styles} group={props.group} />;
      break;

    case "date":
      view = <OutputDate styles={props.styles} group={props.group} />;
      break;

    case "textarea":
        view = <OutputTextarea styles={props.styles} group={props.group} />;
        break;

    case "text":
      view = <OutputStandard styles={props.styles} group={props.group} />;
      break;
  
    case "primary":
      view = <OutputStandard styles={props.styles} group={props.group} />;
      break;

    case "gender":
      view = <OutputGender styles={props.styles} group={props.group} />;
      break;

    default:      view = (
        <tr>
            <td><p>{props.group[0].n}</p></td>
            <td><p>{JSON.stringify(props.group)}</p></td>
        </tr>
    )
    }
    }
    return view;
};

export default Output;