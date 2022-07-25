import * as React from 'react'

const InputTextarea = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <textarea id={id} onChange={props.hc} maxLength={props.field.l} />
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputTextarea