// Step 1: Import React
import * as React from 'react'

const InputEmail = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input id={id} type='email' onChange={props.hc} />
      </td>
    </tr>
  )
};

export default InputEmail;