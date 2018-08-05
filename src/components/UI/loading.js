import React, { Component } from 'react';
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia
class Loading extends Component {
    render() {
        return (
            this.props.show ?
            (<div id="wrap-loading" style={{width:'100%',background:isEdge ? "#666666":null}}>
            <div align="center" className="cssload-fond">
                     <div className="cssload-container-general">
             <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_1"> </div></div>
             <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_2"> </div></div>
             <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_3"> </div></div>
             <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_4"> </div></div>
             </div>
             </div>
             <p id="title-loading">Đang tải dữ liệu...</p>
             </div>) : null
        );
    }
}

export default Loading
