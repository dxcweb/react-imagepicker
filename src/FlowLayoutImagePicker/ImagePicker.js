/**
 * Created by dxc on 2016/11/5.
 */
import React, {Component, PropTypes} from 'react';
import Jiugongge, {JiugonggeItem} from 'react-jiugongge';
import AddComponent from './AddComponent'
import ImageComponent from './ImageComponent'
export default class ImagePicker extends Component {
    static defaultProps = {
        max: 3,
        column: 4,
        spacing: 12,
        getImageUrl: (value)=>value,
        onAddImage: (callback)=> {
            callback('http://oss.dxcweb.com/wop/wx5f069426b7e49373/2016-11-01/5faf1df9d3f19f273e3f7b7cad39c4de.jpg');
        },
        onPreviewImage: (value,a,i)=> {
            console.log(value,i);
        },
        onChange: ()=> {

        },
        AddComponent: AddComponent,
        ImageComponent: ImageComponent,
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
            for (let i = 0, value; value = img[i]; i++) {
                values.push(value);
            }
        } else {
            values.push(img);
        }
        this.setValues(values);
    }

    deleteImage(index) {
        let value = this.state.value;
        value.splice(index, 1);
        this.setValues(value);
    }

    onAddImage() {
        const {onAddImage}=this.props;
        onAddImage(this.addImage.bind(this));
    }

    item() {
        const {AddComponent, ImageComponent, max, getImageUrl, onPreviewImage}=this.props;
        const values = this.getValues();

        const len = values.length;
        const isShowAdd = len < max;
        const items = [];
        for (let i = 0; i < values.length; i++) {
            const url = getImageUrl(values[i]);
            items.push(<JiugonggeItem key={i}>
                <ImageComponent onPreviewImage={()=>{
                    onPreviewImage(values[i],values,i);
                }} url={url} onDeleteImage={this.deleteImage.bind(this,i)}/>
            </JiugonggeItem>);
        }
        if (isShowAdd) {
            items.push(<JiugonggeItem key={-999}>
                <AddComponent onAddImage={this.onAddImage.bind(this)}/>
            </JiugonggeItem>);
        }
        return items;
    }

    render() {
        const {spacing, column}=this.props;
        return (
            <Jiugongge
                height='width'
                horizontalSpacing={spacing}
                verticalSpacing={spacing}
                column={column}
                style={{margin: 10}}
            >
                {this.item()}
            </Jiugongge>
        )
    }
}