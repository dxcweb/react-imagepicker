/**
 * Created by dxc on 2016/11/5.
 */
import React, {Component, PropTypes} from 'react';
import DeleteSvg from './DeleteSvg'
export default class ImageComponent extends Component {
    render() {
        const {url, onPreviewImage, onDeleteImage, readOnly}=this.props;
        return (
            <div style={{width: "100%",height: "100%",position:'relative'}}>
                <div onClick={onPreviewImage}
                     style={{background:`url("${url}") no-repeat  0% 0% / 100%`,width: "100%",height: "100%",
                 position:'absolute'
                 }}></div>
                {
                    !readOnly ?
                        <DeleteSvg onClick={onDeleteImage}
                                   style={{position:'absolute',right:"-9%",top:"-9%",zIndex:1}}/>
                        :
                        null
                }

            </div>
        )
    }
}