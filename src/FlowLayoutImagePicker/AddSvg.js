/**
 * Created by dxc on 2016/11/3.
 */
import React from 'react';
export default class AddSvg extends React.Component {
    render() {
        const {size="100%", ...other}=this.props;
        return (
            <svg width={size} height={size} {...other} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <rect fill="#f1f1f1" width="150" height="150"/>
                <polygon fill="#ccc"
                         points="24.75 0.01 2.99 0.01 0 0.01 0 3 0 24.76 2.99 24.76 2.99 3 24.75 3 24.75 0.01"/>
                <polygon fill="#ccc"
                         points="24.75 149.99 2.99 149.99 0 149.99 0 147 0 125.24 2.99 125.24 2.99 147 24.75 147 24.75 149.99"/>
                <polygon fill="#ccc"
                         points="125.25 0 147.01 0 150 0 150 2.99 150 24.75 147.01 24.75 147.01 2.99 125.25 2.99 125.25 0"/>
                <polygon fill="#ccc"
                         points="125.25 149.98 147.01 149.98 150 149.98 150 146.99 150 125.23 147.01 125.23 147.01 146.99 125.25 146.99 125.25 149.98"/>
                <rect fill="#ccc" x="52.92" y="70.17" width="44.17" height="9.67"/>
                <rect fill="#ccc" x="52.92" y="70.17" width="44.17" height="9.67"
                      transform="translate(150 0) rotate(90)"/>
            </svg>
        );
    }
}