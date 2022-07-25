// Step 1: Import React
import * as React from 'react'

import InputSelect from './input_select';

const InputGender = (props) => {
  var field = {
    id: props.field.id,
    x: props.field.x,
    n: "gender",
    t: "gender",
    v: ["male", "female"],
  };
  return <InputSelect hc={props.hc} styles={props.styles} field={field} />;
};

export default InputGender;