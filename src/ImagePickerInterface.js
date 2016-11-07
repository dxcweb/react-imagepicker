/**
 * Created by dxc on 2016/11/5.
 */
import React, {Component, PropTypes} from 'react';
export default class ImagePickerInterface extends Component {
    static propTypes = {
        RootComponent: PropTypes.func.isRequired,
        ItemComponent: PropTypes.func.isRequired,
        AddComponent: PropTypes.func.isRequired,
        ImageComponent: PropTypes.func.isRequired
    };
    static defaultProps = {
        onAddImage: (callback)=> {
        },
        getImageUrl: (value)=> {
        },
        onPreviewImage: (value, values, i)=> {
        },
        onChangeImage: (oldValue, callback)=> {
        },
        max: null,
        value: null,
        onChange: ()=> {

        },
        RootComponent: null,
        RootProps: null,

        ItemComponent: null,
        itemProps: null,

        AddComponent: null,
        addProps: null,

        ImageComponent: null,
        imageProps: null
    };
    state = {
        value: []
    };
    //从props或state中获取value
    getValues() {
        if (this.props.value != null) {
            return this.props.value;
        } else {
            return this.state.value;
        }
    }

    setValues(values) {
        this.props.onChange(values);
        if (this.props.value == null) {
            this.setState({value: values});
        }
    }

    addImage(img) {
        if (img == null || img == '') {
            return false;
        }
        const values = this.getValues();
        if (img instanceof Array) {
            for (let value of img) {
                values.push(value);
            }
        } else {
            values.push(img);
        }
        this.setValues(values);
    }

    deleteImage(index) {
        let values = this.getValues();
        values.splice(index, 1);
        this.setValues(values);
    }

    changeImage(index, value) {
        let values = this.getValues();
        values[index] = value;
        this.setValues(values);
    }

    onAddImage() {
        const {onAddImage, max}=this.props;
        const values = this.getValues();
        let surplus = false;
        if (max) {
            surplus = max - values.length;
        }
        onAddImage(this.addImage.bind(this),surplus);
    }

    onChangeImage(index, oldValue) {
        const {onChangeImage}=this.props;
        const me = this;
        onChangeImage(oldValue, (newValue)=> {
            me.changeImage(index, newValue);
        });
    }

    item() {
        const {ItemComponent, itemProps, AddComponent, addProps, ImageComponent, imageProps, max, getImageUrl, onPreviewImage}=this.props;
        const values = this.getValues();

        const len = values.length;
        const isShowAdd = !max || len < max;
        const items = [];
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            const url = getImageUrl(value);
            items.push(<ItemComponent key={i} {...itemProps}>
                <ImageComponent
                    url={url}
                    value={value}
                    onPreviewImage={()=>{
                        onPreviewImage(values[i],values,i);
                    }}
                    onDeleteImage={this.deleteImage.bind(this,i)}
                    {...imageProps}
                    onChangeImage={this.onChangeImage.bind(this,i,value)}
                />
            </ItemComponent>);
        }
        if (isShowAdd) {
            items.push(<ItemComponent key={-999} {...itemProps}>
                <AddComponent {...addProps} onAddImage={this.onAddImage.bind(this)}/>
            </ItemComponent>);
        }
        return items;
    }

    render() {
        const {RootComponent, rootProps}=this.props;
        return (
            <RootComponent {...rootProps}>
                {this.item()}
            </RootComponent>
        )
    }
}