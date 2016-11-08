/**
 * Created by dxc on 2016/11/6.
 */
import React, {Component, PropTypes} from 'react';
import FlowLayoutImagePicker from  './FlowLayoutImagePicker';
export default class WxFlowLayoutImagePicker extends Component {
    static defaultProps = {
        chooseImageCount: 9,
        chooseImageSizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
        chooseImageSourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
        max: null,
        column: 4,
        spacing: 12,
        getImageUrl: ()=> {
        },
        uploadImage: ()=> {

        },
        onLoading: ()=> {

        },
        value: null,
        onChange: ()=> {
        }
    };

    onAddImage(callback, surplus) {
        const me = this;
        const {onLoading, chooseImageCount, chooseImageSizeType, chooseImageSourceType}=this.props;
        let count = chooseImageCount;
        if (surplus)
            count = Math.min(chooseImageCount, surplus);
        if (count <= 0) {
            return false;
        }
        wx.chooseImage({
            count: count, // 默认9
            sizeType: chooseImageSizeType,
            sourceType: chooseImageSourceType,
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                onLoading(true);
                me.wxUploadImage(localIds, callback);
            }
        });
    }

    wxUploadImage(localIds, callback) {
        const {uploadImage, onLoading} = this.props;
        const localId = localIds.shift();
        const me = this;
        wx.uploadImage({
            localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 0, // 默认为1，显示进度提示
            success: function (res) {
                const serverId = res.serverId; // 返回图片的服务器端ID
                //上传图片
                uploadImage(serverId, localId, (value)=> {
                    if (value)
                        callback(value);
                    if (localIds.length > 0) {
                        me.wxUploadImage(localIds, callback)
                    } else {
                        onLoading(false);
                    }
                });
            }
        });
    }

    getImageUrl(value) {
        const {getImageUrl} = this.props;
        return getImageUrl(value, 'list')
    }

    onPreviewImage(currentValue, values, i) {

        const urls = [];
        const me = this;
        const {getImageUrl} = this.props;
        for (let i = 0, value; value = values[i]; i++) {
            urls.push(getImageUrl(value, 'preview'));
        }
        const current = urls[i];

        wx.previewImage({current, urls});
    }

    render() {
        const {max, column, spacing, getImageUrl, value, onChange}=this.props;
        return (
            <div>
                <FlowLayoutImagePicker
                    max={max}
                    column={column}
                    spacing={spacing}
                    getImageUrl={this.getImageUrl.bind(this)}
                    onAddImage={this.onAddImage.bind(this)}
                    onPreviewImage={this.onPreviewImage.bind(this)}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}