import * as React from 'react'

const InputAddress = (props) => {
    var id = props.field.id;
    return (
        <tr>
            <td style={props.styles.left}>{props.field.n}</td>
            <td style={props.styles.right}>
                <fieldset>
                    <div>
                        <input id={id+"_1"} onChange={props.hc} type='text' maxLength={props.field.l} />
                        <label>building & street</label>
                    </div>
                    <div>
                        <input id={id+"_2"} onChange={props.hc} type='text' maxLength={props.field.l} />
                        <label>address line 2</label>
                    </div>
                    <div>
                        <input id={id+"_3"} onChange={props.hc} type='text' maxLength={props.field.l} />
                        <label>address line 3</label>
                    </div>
                    <div>
                        <input id={id+"_4"} onChange={props.hc} type='text' maxLength={props.field.l} />
                        <label>county/state</label>
                    </div>
                    <div>
                        <input id={id+"_5"} onChange={props.hc} type='text' maxLength={props.field.l} />
                        <label>country</label>
                    </div>
                    <div>
                        <input id={id+"_6"} onChange={props.hc} type='text' maxLength={props.field.l} />
                        <label>zipcode/postcode</label>
                    </div>
                </fieldset>
            </td>
        </tr>
    )
};

export default InputAddress;