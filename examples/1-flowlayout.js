/**
 * Created by dxc on 2016/11/6.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {FlowLayoutImagePicker} from 'react-imagepicker';
class FlowLayout extends Component {
    getImageUrl(value) {
        return value;
    }

    onAddImage(callback) {
        callback('http://img1.gtimg.com/18/1807/180720/18072047_1200x1000_0.jpg');
    }

    onPreviewImage(value, values, i) {
        console.log('onPreviewImage', value, values, i)
    }
    render() {
        return (
            <div  style={{maxWidth: 400,margin:20}}>
                <FlowLayoutImagePicker
                    getImageUrl={this.getImageUrl.bind(this)}
                    onAddImage={this.onAddImage.bind(this)}
                    onPreviewImage={this.onPreviewImage.bind(this)}
                />
            </div>
        )
    }
}
ReactDOM.render(
    <FlowLayout />,
    document.getElementById('__react-content')
);