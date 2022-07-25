// Step 1: Import React
import * as React from 'react'

const InputPrimary = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input type='text' onChange={props.hc} id={id} maxLength={props.field.l} />
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputPrimary