// Step 1: Import React
import * as React from 'react'

const leftColStyle = {
    "textAlign": "right",
}
  
const rightColStyle = {
    "textAlign": "left",
}

const InputRange = (props) => {
  return (
    <tr>
        <td style={leftColStyle}>{props.field.n}</td>
        <td style={rightColStyle}>
            <input type='range' min={props.field.min} max={props.field.max} defaultValue={props.data} value={props.newData} />
            <span>{props.newData}</span>
        
        </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputRange