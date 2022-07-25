// Step 1: Import React
import * as React from 'react'

const InputUrl = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input id={id} type='url' maxLength="2048" />
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputUrl