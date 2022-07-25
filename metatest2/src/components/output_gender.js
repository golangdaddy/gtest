import * as React from 'react'

const OutputGender = (props) => {
  return (
    <tr>
        <td style={props.styles.left}>{props.group[0].n}:</td>
        <td style={props.styles.right}>
            <div>{props.group[0].v}</div>
        </td>
    </tr>
  )
};

export default OutputGender;