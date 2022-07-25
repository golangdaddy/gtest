import * as React from 'react'

const OuputDate = (props) => {
  return (
    <tr>
      <td style={props.styles.left}>{props.group[0].n}</td>
      <td style={props.styles.right}>
        <input type="date" defaultValue={props.group[0].v} />
      </td>
    </tr>
  )
};

export default OuputDate;