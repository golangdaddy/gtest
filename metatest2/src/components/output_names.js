import * as React from 'react'

const OutputNames = (props) => {
    var id = props.field.id;
    props.field.l = 64;
    var name = '';
    for (var x = 0; x < props.field.length; x++) {
        name += " " + props.field[x].v;
    }
    return (
        <tr>
            <td style={props.styles.left}>{props.field[0].n}:</td>
            <td style={props.styles.right}>
                <div>
                {name}
                </div>
            </td>
        </tr>
    )
};

export default OutputNames;