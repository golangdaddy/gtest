// Step 1: Import React
import * as React from 'react'

const leftColStyle = {
    "textAlign": "right",
}
  
const rightColStyle = {
    "textAlign": "left",
}

const InputDate = (props) => {
  return (
    <tr>
    <td style={leftColStyle}>{props.field.n}</td>
    <td style={rightColStyle}>
      <form>
        <input type="date" defaultValue={props.data} />
      </form>
    </td>
  </tr>
  )
};

// Step 3: Export your component
export default InputDate