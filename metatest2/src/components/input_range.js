// Step 1: Import React
import * as React from 'react'

const InputRange = (props) => {
  var id = props.field.x.toString() + "_" + props.field.t;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input id={id} type='range' onChange={props.hc} min={props.field.min} max={props.field.max} />        
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputRange