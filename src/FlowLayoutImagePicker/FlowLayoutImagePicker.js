/**
 * Created by dxc on 2016/11/6.
 */
import React, {Component} from 'react';
import ImagePickerInterface from '../ImagePickerInterface'
import Jiugongge, {JiugonggeItem} from 'react-jiugongge';
import AddComponent from './AddComponent'
import ImageComponent from './ImageComponent'
export default class FlowLayoutImagePicker extends Component {
    static defaultProps = {
        max: null,
        column: 4,
        spacing: 12,
        getImageUrl: ()=> {
        },
        onAddImage: ()=> {
        },
        onPreviewImage: ()=> {
        },
        value: null,
        onChange: ()=> {
        },
        AddComponent: AddComponent,
        addProps: undefined,

        ImageComponent: ImageComponent,
        imageProps: undefined,
        readOnly: false
    };

    render() {
        const {readOnly, max, column, spacing, getImageUrl, onAddImage, onPreviewImage, value, onChange, AddComponent, addProps, ImageComponent, imageProps}=this.props;
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
                    addProps={addProps}
                    onAddImage={onAddImage}
                    ImageComponent={ImageComponent}
                    itemProps={imageProps}
                    onPreviewImage={onPreviewImage}
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                />
            </div>
        )
    }
}