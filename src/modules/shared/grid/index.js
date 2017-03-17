import React, { Component } from 'react';


class Grid extends Component {
    state={invalidMsg:"FIXME"}
    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">&nbsp;</div>
                <div class="panel-body">
                    <div class="table">
                        <table width="100%" class="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>     
                                    
                                </tr>
                            </thead>
                            <tbody>
                                                                       
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="panel-footer clearfix">
                    <div class="pull-left" >Showing page {{currentPage}}</div>
                    <div class="pull-right">
                        <button >Prev</button>
                        <button>Next</button>
                    </div>
                </div>
            </div> 
            );
  }
}
export default Grid;