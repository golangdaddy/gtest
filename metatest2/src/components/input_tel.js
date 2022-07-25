// Step 1: Import React
import * as React from 'react'

const InputTel = (props) => {
  var id = props.field.x.toString() + "_" + props.field.t;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input id={id} type='tel' onChange={props.hc} />
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputTel