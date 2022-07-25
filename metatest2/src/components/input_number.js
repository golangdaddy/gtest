// Step 1: Import React
import * as React from 'react'

const InputNumber = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input id={id} onChange={props.hc} type='number' />
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputNumber