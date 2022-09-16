import React from 'react';
import { GetData, GetNode } from './async'

class OutputForms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
      };

      GetData("/api/query/"+this.props.record+'/out/parent').then(data => {
        console.log("edges", data);
        this.setState({
          list: data,
        });
      });
    }

    render() {
        var id = this.props.record;
        return (
            <div id={id} style={{width:"100%",padding:"30px"}}>
            {
                this.state.list.map(function(record, i){
                    return (
                        <tr key={i.toString()}>
                            <td>
                                <iframe style={{backgroundColor:"#aaa",border:"0px",borderRadius:"14px",width:"700px"}} title={record} src={'http://localhost:8080/api/render/'+record} />
                            </td>
                        </tr>
                    );
                })
            }
            </div>
        );
    }
};

export default OutputForms;