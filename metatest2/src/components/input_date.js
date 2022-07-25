import * as React from 'react'

const InputDate = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input id={id} type="date" onChange={props.hc} />
      </td>
    </tr>
  )
};

export default InputDate;