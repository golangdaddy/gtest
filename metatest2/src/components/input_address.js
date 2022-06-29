// Step 1: Import React
import * as React from 'react'

const leftColStyle = {
    "textAlign": "right",
    "verticalAlign": "top",
}
  
const rightColStyle = {
    "textAlign": "left",
}

const InputAddress = (props) => {
  return (
    <tr>
        <td style={leftColStyle}>{props.field.n}</td>
        <td style={rightColStyle}>
            <div>
                <input type='text' maxlength={props.field.l} value={props.data.line1} />
                <label for="html">building & street</label>
            </div>
            <div>
                <input type='text' maxlength={props.field.l} value={props.data.line2} />
                <label for="html">address line 2</label>
            </div>
            <div>
                <input type='text' maxlength={props.field.l} value={props.data.line3} />
                <label for="html">address line 3</label>
            </div>
            <div>
                <input type='text' maxlength={props.field.l} value={props.data.county} />
                <label for="html">county/state</label>
            </div>
            <div>
                <input type='text' maxlength={props.field.l} value={props.data.country} />
                <label for="html">country</label>
            </div>
            <div>
                <input type='text' maxlength={props.field.l} value={props.data.postcode} />
                <label for="html">zipcode/postcode</label>
            </div>
        </td>
    </tr>
  )
};

// Step 3: Export your component
export default InputAddress