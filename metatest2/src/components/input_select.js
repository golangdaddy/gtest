// Step 1: Import React
import * as React from 'react'

const InputSelect = (props) => {
  var id = props.field.x.toString() + "_" + props.field.t;
  return (
  <tr>
    <td style={props.styles.left}>{props.field.n}</td>
    <td style={props.styles.right}>
      <select id={id} onChange={props.hc}>
        <option key="0" value=""></option>
        {
          props.field.v.map(function(v, i){
            return (
                <option key={(i++).toString()} value={v}>{v}</option>
            );
          })
        }
      </select>
    </td>
  </tr>
  )
};

// Step 3: Export your component
export default InputSelect