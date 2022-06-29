// Step 1: Import React
import * as React from 'react'

const leftColStyle = {
    "textAlign": "right",
}
  
const rightColStyle = {
    "textAlign": "left",
}

const InputNumber = (props) => {
  return (
    <tr>
        <td style={leftColStyle}>{props.field.n}</td>
        <td style={rightColStyle}>
            <input type='number' value={props.data} />
        </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputNumber