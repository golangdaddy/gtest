// Step 1: Import React
import * as React from 'react'

import InputDatalist from './input_datalist'
import InputSelect from './input_select';

const InputList = (props) => {
  return (
  <tr>
    <td style={props.styles.left}>{props.field.n}</td>
    <td style={props.styles.right}>
      {
        if (props.field.v.len <= 10) {
          return (
            <InputDatalist />
          );
        } else if (props.field.v.len <= 100) {
          return (
            <InputSelect />
          );
        } else {
          return (
            <InputDatalist />
          );
        }
      }
    </td>
  </tr>
  )
};

// Step 3: Export your component
export default InputRadio