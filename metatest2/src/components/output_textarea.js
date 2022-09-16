import * as React from 'react'

const OutputTextarea = (props) => {
  var id = props.group[0].id;
  return (
    <tr>
      <td style={props.styles.left}></td>
      <td style={props.styles.right}>
        { props.group[0].v }
      </td>
    </tr>
  )
};

// Step 3: Export your component
export default OutputTextarea