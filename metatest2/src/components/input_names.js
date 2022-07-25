import * as React from 'react'

const InputNames = (props) => {
    var id = props.field.id;
    props.field.l = 64;
    return (
        <tr>
            <td style={props.styles.left}>{props.field.n}</td>
            <td style={props.styles.right}>
                <fieldset>
                    <div>
                        <input id={id+"_1"} onChange={props.hc} type='text' maxLength={props.field.l} placeholder="title" />
                    </div>
                    <div>
                        <input id={id+"_2"} onChange={props.hc} type='text' maxLength={props.field.l} placeholder="firstname" />
                    </div>
                    <div>
                        <input id={id+"_3"} onChange={props.hc} type='text' maxLength={props.field.l} placeholder="middlenames" />
                    </div>
                    <div>
                        <input id={id+"_4"} onChange={props.hc} type='text' maxLength={props.field.l} placeholder="lastname" />
                    </div>
                </fieldset>
            </td>
        </tr>
    )
};

export default InputNames;