/**
 * Created by dxc on 2016/11/4.
 */
import React, {Component} from 'react';
export default class CloseSvg extends React.Component {
    render() {
        const {size="25%", ...other}=this.props;
        return (
            <svg width={size} height={size} {...other} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <rect fill="#fff" x="6" y="7.61" width="23.36" height="20.25"/>
                <path fill="#ea5554"
                      d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm6.19,25.87a1.68,1.68,0,0,1-1.19-.5l-5-5-5,5A1.69,1.69,0,1,1,10.62,23l5-5-5-5A1.69,1.69,0,0,1,13,10.62l5,5,5-5A1.69,1.69,0,1,1,25.38,13l-5,5,5,5A1.69,1.69,0,0,1,24.19,25.87Z"/>
            </svg>
        );
    }
}