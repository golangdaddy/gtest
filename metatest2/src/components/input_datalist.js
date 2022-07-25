import * as React from 'react'

const InputDatalist = (props) => {
  var id = props.field.id;
  return (
    <tr>
      <td style={props.styles.left}>{props.field.n}</td>
      <td style={props.styles.right}>
        <input list="datalistoptions" id={id} onChange={props.hc} />
        <datalist id="datalistoptions">
        {
          props.field.v.map(function(v, i){
            return (
                <option key={i.toString()} value={v} onChange={props.hc} />
            );
          })
        }
        </datalist>
      </td>
    </tr>
  )
};

export default InputDatalist;