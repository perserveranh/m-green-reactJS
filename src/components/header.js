import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './../css/header.css';
class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
      <Container>
        <div className="mgreen-banding">
        <a href="http://mgreen.vn/" className="mgreen-logo" rel="home" itemProp="url">
        <img 
        style={{width:'66px',height:'60px'}} 
        src="http://mgreen.vn/wp-content/uploads/2017/11/logoMgreen09A11536Dd5082993Cc799E5Aa01671F1@3x.png" 
        alt="mGreen" itemProp="logo" className="mgreen-logo-link">
        </img>
        </a>
        </div> 
        <nav className="mgreen-navigation">
          <div className="toggle-bar"><span></span></div>
          <div className="mgreen-menu">
          <ul>
            <li><a href="#">VỀ MGREEN</a></li>
            <li><a href="#">NHÀ TÀI TRỢ</a></li>
            <li><a href="#">ĐỐI TÁC</a></li>
            <li ><a href="#" >DỰ ÁN &nbsp; <i className="fas fa-angle-down"></i></a>
            <ul className="sub-menu">
              <li><a href="">a</a></li>
              <li><a href="">b</a></li>
              <li><a href="">c</a></li>
            </ul>
            </li>
            <li><a href="#">TIN TỨC</a></li>
            <li><a href="3">LIÊN HỆ</a></li>
            <li><a href="#" className="download">DOWNLOAD APP</a></li>
            <li>
            <a href="http://mgreen.vn/">
            <img title="tiếng việt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC" alt="tiếng việt"/>
            <span style={{marginLeft:'0.3em'}}>TIẾNG VIỆT</span>
            </a>
            </li>
            <li>
            <a href="http://mgreen.vn/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" alt="English" title="English"/>
            <span style={{marginLeft:'0.3em'}}>ENGLISH</span>
            </a>
            </li>
          </ul>
          </div>
        </nav>
      </Container>
      </div>
    );
  }
}

export default Header;
