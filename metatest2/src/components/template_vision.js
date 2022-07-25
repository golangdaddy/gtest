import * as React from 'react'

import Input from '../components/input'

import {GetData, PostData} from './async';

class TemplateVision extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      var hc = this.props.hc;
      return (
        <div>
            <div>
            {
                this.props.list.map(function(v, i){
                    return (
                        <div key={i.toString()}>
                            <input type="button" value={v} onClick={hc} />
                        </div>
                    );
                })
            }
            </div>
        </div>
      );
    }
  }

  export default TemplateVision;