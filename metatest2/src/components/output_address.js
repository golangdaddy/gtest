import * as React from 'react'

const OutputAddress = (props) => {
  return (
    <tr>
        <td style={props.styles.left}>address</td>
        <td style={props.styles.right}>
            <div>{props.group[0] && props.group[0].v}</div>
            <div>{props.group[1] && props.group[1].v}</div>
            <div>{props.group[2] && props.group[2].v}</div>
            <div>{props.group[3] && props.group[3].v}</div>
            <div>{props.group[4] && props.group[4].v}</div>
            <div>{props.group[5] && props.group[5].v}</div>
        </td>
    </tr>
  )
};

export default OutputAddress;