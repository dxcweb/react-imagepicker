/**
 * Created by dxc on 2016/11/6.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {ImagePickerInterface} from 'react-imagepicker';
class RootComponent extends Component {
    render() {
        const {children, ...other}=this.props;
        return (
            <div {...other}>
                {children}
            </div>
        )
    }
}
class ItemComponent extends Component {
    render() {
        const {children, ...other}=this.props;
        return (
            <div {...other}>
                {children}
            </div>
        )
    }
}
class AddComponent extends Component {
    render() {
        const {onAddImage}=this.props;
        return (
            <div onClick={onAddImage} style={{width: '100px',height: '100px',border:"1px solid"}}>添加</div>
        )
    }
}
class ImageComponent extends Component {
    render() {
        const {url, value, onPreviewImage, onDeleteImage, onChangeImage}=this.props;
        return (
            <div style={{marginBottom:"20px"}}>
                <img src={url} style={{width: '100px',height: '100px'}}/>
                <div onClick={onPreviewImage}>预览</div>
                <div onClick={onDeleteImage}>删除</div>
                <div onClick={onChangeImage}>修改</div>
            </div>
        )
    }
}
class Interface extends Component {
    onAddImage(callback) {
        callback('http://img1.gtimg.com/ninja/2/2016/08/ninja147209571997482.jpg');
    }

    onPreviewImage(value, values, i) {
        console.log('onPreviewImage', value, values, i)
    }

    onChangeImage(oldValue,callback) {
        console.log('onChangeImage', oldValue);
        callback('http://img1.gtimg.com/ninja/2/2016/02/ninja145613279193247.jpg');
    }

    render() {
        const rootProps = {
            style: {
                background: '#f1f1f1',
                padding: 20
            }
        };
        return (
            <div>
                <ImagePickerInterface
                    RootComponent={RootComponent}
                    rootProps={rootProps}
                    ItemComponent={ItemComponent}
                    AddComponent={AddComponent}
                    onAddImage={this.onAddImage.bind(this)}
                    ImageComponent={ImageComponent}
                    getImageUrl={(value)=>value}
                    onPreviewImage={this.onPreviewImage.bind(this)}
                    onChangeImage={this.onChangeImage.bind(this)}
                />
            </div>
        )
    }
}
ReactDOM.render(
    <Interface />,
    document.getElementById('__react-content')
);