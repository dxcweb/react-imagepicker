/**
 * Created by dxc on 2016/11/6.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading'
import {WxFlowLayoutImagePicker} from 'react-imagepicker';
window.wx = {
    chooseImage: (param)=> {
        console.log('chooseImage', param);
        const localIds = [];
        for (let i = 0; i < param.count; i++) {
            localIds.push('http://img1.gtimg.com/18/1807/180720/18072047_1200x1000_0.jpg');
        }
        param.success({localIds});
    },
    uploadImage: (param)=> {
        setTimeout(()=> {
            param.success({serverId: param.localId})
        }, 200)
    },
    previewImage(){
        alert('点击了预览');
    }
};
class UploadImgExamples extends Component {
    state = {
        loading: false
    };

    getImageUrl(value) {
        return value.url;
    }

    uploadImage(serverId, localId, callback) {
        setTimeout(()=> {
            callback({url: serverId})
        }, 300)
    }

    onLoading(loading) {
        this.setState({loading})
    }

    render() {
        return (
            <div style={{maxWidth: 400,margin:20}}>
                <Loading loading={this.state.loading}/>
                <WxFlowLayoutImagePicker
                    max={11}
                    getImageUrl={this.getImageUrl.bind(this)}
                    uploadImage={this.uploadImage.bind(this)}
                    onLoading={this.onLoading.bind(this)}
                />
            </div>
        )
    }
}
ReactDOM.render(
    <UploadImgExamples />,
    document.getElementById('__react-content')
);