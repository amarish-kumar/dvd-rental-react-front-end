import React, { Component } from 'react';


class Grid extends Component {
    state={invalidMsg:"FIXME"}
    render() {
        let data = this.props.data;        
        return (
            <div className="panel panel-default">
                <div className="panel-heading">&nbsp;</div>
                <div className="panel-body">
                    {
                        data && data.length>0 ? 
                        (<div className="table">
                            <table width="100%" className="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>     
                                        {Object.keys(data[0]).map(key=><th key={key}>{key}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i)=>{
                                       return  <tr key={i}>
                                                    {Object.keys(item).map(key=><td key={i+"_"+key}>{item[key]}</td>)}
                                                </tr>;
                                    })}                                                                      
                                </tbody>
                            </table>
                        </div>) :  <span>No data found</span>
                    }
                </div>
                <div className="panel-footer clearfix">
                    <div className="pull-left" >Showing page {this.props.currentPage}</div>
                    <div className="pull-right">
                        <button>Prev</button>
                        <button>Next</button>
                    </div>
                </div>
            </div> 
            );
  }
}
export default Grid;