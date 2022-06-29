// Step 1: Import React
import * as React from 'react'

import InputEmail from './input_email'
import InputText from './input_text'
import InputDate from './input_date'
import InputNumber from './input_number'
import InputRange from './input_range'
import InputUrl from './input_url'
import InputTel from './input_tel'
import InputAddress from './input_address'
import InputRadio from './input_radio'

const leftColStyle = {
    "textAlign": "right",
    "verticalAlign": "top",
}
  
const rightColStyle = {
    "textAlign": "left",
}

const Input = (props) => {

    var view = "";
    switch (props.field.f) {
  
    case "address":
      view = <InputAddress key={props.key} field={props.field} data={props.data}></InputAddress>;
      break;
  
    case "tel":
      view = <InputTel key={props.key} field={props.field} data={props.data}></InputTel>;
      break;
  
    case "range":
      view = <InputRange key={props.key} field={props.field} data={props.data}></InputRange>;
      break;
  
    case "number":
      view = <InputNumber key={props.key} field={props.field} data={props.data}></InputNumber>;
      break;
  
    case "date":
      view = <InputDate key={props.key} field={props.field} data={props.data}></InputDate>;
      break;
  
    case "text":
      view = <InputText key={props.key} field={props.field} data={props.data}></InputText>;
      break;
  
    case "email":
      view = <InputEmail key={props.key} field={props.field} data={props.data}></InputEmail>;
      break;
    
    case "radio":
      view = <InputRadio key={props.key} field={props.field} data={props.data}></InputRadio>;
      break;
    
    case "url":
      view = <InputUrl key={props.key} field={props.field} data={props.data}></InputUrl>;
      break;
  
    default:      view = (
        <tr>
            <td><p>?</p></td>
            <td><p>?</p></td>
        </tr>
    )
    }

    return view;
};

// Step 3: Export your component
export default Input