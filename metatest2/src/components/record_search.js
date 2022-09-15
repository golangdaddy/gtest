import * as React from 'react'

import {GetData} from './async';
import OutputForm from './outputForm';

class RecordSearch extends React.Component {

    updateSearch (event) {
        var classValue = document.getElementById("classInput").value;
        var searchValue = event.target.value;
        if (searchValue.length < 3 || classValue.length < 3) {
            return;
        }
        GetData("/api/search/"+classValue+"/"+searchValue).then(
            data => this.setState({
                "results": data,
                "classes": this.state.classes,
            })
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            classes: [],
        };
  
        GetData("/api/classes").then(data => this.setState({
            "classes": data,
            "results": this.state.results
        }));

        this.handleClassUpdate = this.handleClassUpdate.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    handleClassUpdate (event) {
        var state = Object.assign({}, this.state);
        state.class = event.target.value;
        this.setState(state);
    }

    render() {
        var c = this.state.class;
      return (
        <div>
            <table style={{width:"100%"}}>
                <tbody>
                    <tr>
                        <td>
                            <center>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select id='classInput' onChange={this.handleClassUpdate}>
                                                <option key="0" value=""></option>
                                                {
                                                    this.state.classes.map(function(v, i){
                                                        return (
                                                            <option key={(i++).toString()} value={v}>{v}</option>
                                                        );
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <input id='searchInput' type='text' onChange={this.updateSearch}></input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        {
                            this.state.results.map(function(result, i){
                                var s = {
                                    backgroundColor:"#333",
                                    color:"white",
                                    fontFamily: "'Cabin', sans-serif",
                                    borderRadius: "6pc",
                                    padding:"10px",
                                    margin: "10px",
                                    textAlign: "center",
                                };
                                return (
                                    <div key={i.toString()}>
                                        <a href={"/search?id="+c+"_"+result.ID}>
                                            {
                                                c == "country" && <div style={s}>{result.ID}</div>
                                            }
                                            {
                                                c != "country" && <div style={s}>{result.Auto["_"][0]}</div>
                                            }
                                        </a>
                                    </div>
                                );
                            })
                        }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
    }
  }

  export default RecordSearch;