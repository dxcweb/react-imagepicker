/**
 * Created by dxc on 2016/11/5.
 */
import React, {Component} from 'react';
import AddSvg from './AddSvg'
export default class UploadImgAdd extends Component {
    render() {
        const {onAddImage, ...other}=this.props;
        return (
            <AddSvg onClick={onAddImage}/>
        )
    }
}
