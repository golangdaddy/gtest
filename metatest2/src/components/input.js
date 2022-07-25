// Step 1: Import React
import * as React from 'react'

import InputEmail from './input_email'
import InputText from './input_text'
import ImputPrimary from './input_primary'
import InputDate from './input_date'
import InputNumber from './input_number'
import InputRange from './input_range'
import InputUrl from './input_url'
import InputTel from './input_tel'
import InputAddress from './input_address'
import InputRadio from './input_radio'
import InputSelect from './input_select'
import InputTextarea from './input_textarea'
import InputDatalist from './input_datalist'
import InputGender from './input_gender'
import InputNames from './input_names'

const cellStyles = {
    "left": {
        "textAlign": "right",
        "verticalAlign": "top",
    },
    "right": {
        "textAlign": "left",
    }
}

const Input = (props) => {

    var view = "";
    switch (props.field.t) {
  
    case "address":
      view = <InputAddress hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
  
    case "tel":
      view = <InputTel hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
  
    case "range":
      view = <InputRange hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
  
    case "number":
      view = <InputNumber hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
  
    case "date":
      view = <InputDate hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    case "primary":
      view = <InputText hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    case "text":
      view = <InputText hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
  
    case "email":
      view = <InputEmail hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
    
    case "radio":
      view = <InputRadio hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
    
    case "url":
      view = <InputUrl hc={props.hc} styles={cellStyles} field={props.field} />;
      break;
  
    case "select":
      view = <InputSelect hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    case "textarea":
      view = <InputTextarea hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    case "datalist":
      view = <InputDatalist hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    case "gender":
      view = <InputGender hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    case "names":
      view = <InputNames hc={props.hc} styles={cellStyles} field={props.field} />;
      break;

    default:      view = (
        <tr>
            <td><p>?</p></td>
            <td><p>?</p></td>
        </tr>
    )
    }

    return (
      <>
        {view}
        <input id={"_"+props.field.id} type="hidden" value={JSON.stringify(props.field)}></input>
      </>
    )
};

export default Input