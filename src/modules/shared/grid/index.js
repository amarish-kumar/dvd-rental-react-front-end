import React, { Component } from 'react';
import "./grid.css";

class Grid extends Component {
    table=null;
    componentDidUpdate(){
        if( this.table === null){            
             this.table = window.$(this.refs.gridContainer).find("table").DataTable({                
                "scrollX": true,
                "bPaginate": false,
                "bLengthChange": false,
                "bFilter": false,
                "bInfo": false,
            });
        }
    }
    componentWillUpdate(){
        this.table !== null && this.table.clear();
    }
    componentWillUnmount(){
        this.table !== null && this.table.clear();          
    }
    render() {
        let {data, currentPage, limit,onInteract} = this.props;          
        return (
            <div className="panel panel-default">
                <div className="panel-heading">&nbsp;</div>
                <div className="panel-body">
                    {
                        data && data.length>0 ? 
                        (<div ref="gridContainer" className="table">
                            <table width="100%" className="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>     
                                        {Object.keys(data[0]).map(key=><th key={key}>{key}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i)=>{
                                       return  <tr key={i}>
                                                    {Object.keys(item).map(key=><td key={i+"_"+key}>{
                                                        typeof item[key] === "object" ? JSON.stringify(item[key]) : item[key]
                                                        }</td>)}
                                                </tr>;
                                    })}                                                                      
                                </tbody>
                            </table>
                        </div>) :  <span>No data found</span>
                    }
                </div>
                <div className="panel-footer clearfix">
                    <div className="pull-left" >Showing page {currentPage/limit}</div>
                    <div className="pull-right">
                        <button onClick={()=>onInteract("prev")} disabled={currentPage===0}>Prev</button>
                        <button onClick={()=>onInteract("next")} disabled={data.length < limit}>Next</button>
                    </div>
                </div>
            </div> 
            );
  }
}
export default Grid;