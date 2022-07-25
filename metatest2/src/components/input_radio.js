// Step 1: Import React
import * as React from 'react'

const InputRadio = (props) => {
  return (
  <tr>
    <td style={props.styles.left}>{props.field.n}</td>
    <td style={props.styles.right}>
      {
        props.field.v.map(function(v, i){
          var id = props.field.id;
          return (
            <span key={i.toString()}>
              <input id={id} name={id} type="radio" onChange={props.hc} value={v} />
              <label>{v}</label>
            </span>
          );
        })
      }
    </td>
  </tr>
  )
};

// Step 3: Export your component
export default InputRadio