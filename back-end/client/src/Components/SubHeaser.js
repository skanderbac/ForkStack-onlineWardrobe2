import React, { Component } from "react";

export default class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state ={page:props.pagename};
    }
    render() {
        return (

            <div className="page-header text-center"
                 style={{backgroundimage:'url(https://portotheme.com/html/molla/assets/images/page-header-bg.jpg)',paddingLeft:'20px'}}>
                <div className="container">
                    <h1 className="page-title" style={{width:'850px'}}>{this.state.page}<span>Welcome</span></h1>
                </div>

            </div>
        )
    }
}
