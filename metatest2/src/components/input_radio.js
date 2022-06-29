// Step 1: Import React
import * as React from 'react'

const leftColStyle = {
    "textAlign": "right",
}
  
const rightColStyle = {
    "textAlign": "left",
}

const InputRadio = (props) => {
  return (
  <tr>
    <td style={leftColStyle}>{props.field.n}</td>
    <td style={rightColStyle}>
      {
        props.data.map(function(v, i){
          return (
            <span key={i.toString()}>
              <input type="radio" defaultValue="false" id="html" name="fav_language" />
              <label for="html">{v}</label>
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