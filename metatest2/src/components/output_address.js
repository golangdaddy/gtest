import * as React from 'react'

const OutputAddress = (props) => {
  return (
    <tr>
        <td style={props.styles.left}>{props.field.n}</td>
        <td style={props.styles.right}>
            <div>{props.data.line1}</div>
            <div>{props.data.line2}</div>
            <div>{props.data.line3}</div>
            <div>{props.data.county}</div>
            <div>{props.data.country}</div>
            <div>{props.data.postcode}</div>
        </td>
    </tr>
  )
};

export default OutputAddress;