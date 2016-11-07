/**
 * Created by dxc on 2016/11/6.
 */
import React, {Component, PropTypes} from 'react';
import ImagePickerInterface from '../ImagePickerInterface'
import Jiugongge, {JiugonggeItem} from 'react-jiugongge';
import AddComponent from './AddComponent'
import ImageComponent from './ImageComponent'
export default class FlowLayoutImagePicker extends Component {
    static defaultProps = {
        max: null,
        column: 4,
        spacing: 12,
        getImageUrl: ()=> {},
        onAddImage: ()=> {
        },
        onPreviewImage: ()=> {
        },
        value: null,
        onChange: ()=> {
        }
    };

    render() {
        const {max, column, spacing, getImageUrl, onAddImage, onPreviewImage, value, onChange}=this.props;
        const rootProps = {

            column: column,
            height: 'width',
            horizontalSpacing: spacing,
            verticalSpacing: spacing
        };
        return (
            <div>
                <ImagePickerInterface
                    max={max}
                    RootComponent={Jiugongge}
                    rootProps={rootProps}
                    getImageUrl={getImageUrl}
                    ItemComponent={JiugonggeItem}
                    AddComponent={AddComponent}
                    onAddImage={onAddImage}
                    ImageComponent={ImageComponent}
                    onPreviewImage={onPreviewImage}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}