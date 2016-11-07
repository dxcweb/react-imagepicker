# react-imagepicker
react 版本图片选择器，提供图片选择器接口，流布局图片选择器，将来提供更多布局的图片选择器。
## install

```
npm install react-imagepicker --save
```

## Development

```
npm install
npm start
```
## Example
[http://github.dxcweb.com/react-imagepicker/](http://github.dxcweb.com/react-imagepicker/ "http://github.dxcweb.com/react-imagepicker/")

## API
### FlowLayoutImagePicker
<table class="table table-bordered table-striped">
 <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>max</td>
      <td>Int</td>
      <td>null</td>
      <td>最大图片数量（非必填）</td>
    </tr>
	<tr>
      <td>column</td>
      <td>Int</td>
      <td>4</td>
      <td>每行图片数</td>
    </tr>
	<tr>
      <td>spacing</td>
      <td>Int</td>
      <td>12</td>
      <td>间距</td>
    </tr>
	<tr>
      <td>getImageUrl</td>
      <td>Func</td>
      <td>null</td>
      <td>传入一个图片信息需返回该图片的URL</td>
    </tr>
	<tr>
      <td>onAddImage</td>
      <td>Func</td>
      <td>Func</td>
      <td>当触发添加时会调用onAddImage(callback,surplus),添加完成后调用callback传入图片信息可是字符串，数组或对象</td>
    </tr>
	<tr>
      <td>onPreviewImage</td>
      <td>Func</td>
      <td>Func</td>
      <td>当触发预览时会调用onPreviewImage(value, values, i)</td>
    </tr>
	<tr>
      <td>value</td>
      <td>Array</td>
      <td>null</td>
      <td>所有图片信息（非必填，提供给form组件使用）</td>
    </tr>
	<tr>
      <td>onChange</td>
      <td>Func</td>
      <td>null</td>
      <td>图片信息修改后调用onChange(values) （非必填，提供给form组件使用）</td>
    </tr>
</tbody>
</table>

### WxFlowLayoutImagePicker

<table class="table table-bordered table-striped">
 <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>chooseImageCount</td>
      <td>Int</td>
      <td>9</td>
      <td>一次选择多少张</td>
    </tr>
    <tr>
      <td>chooseImageSizeType</td>
      <td>Array</td>
      <td>['original', 'compressed']</td>
      <td>可以指定是原图还是压缩图，默认二者都有</td>
    </tr>
    <tr>
      <td>chooseImageSourceType</td>
      <td>Array</td>
      <td>['album', 'camera']</td>
      <td>可以指定来源是相册还是相机，默认二者都有</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Int</td>
      <td>null</td>
      <td>最大图片数量（非必填）</td>
    </tr>
	<tr>
      <td>column</td>
      <td>Int</td>
      <td>4</td>
      <td>每行图片数</td>
    </tr>
	<tr>
      <td>spacing</td>
      <td>Int</td>
      <td>12</td>
      <td>间距</td>
    </tr>
	<tr>
      <td>getImageUrl</td>
      <td>Func</td>
      <td>null</td>
      <td>传入一个图片信息需返回该图片的URL</td>
    </tr>
	<tr>
      <td>getImageUrl</td>
      <td>Func</td>
      <td>null</td>
      <td>传入一个图片信息和类型需返回该图片的URL，类型为：preview或list</td>
    </tr>
	<tr>
      <td>uploadImage</td>
      <td>Func</td>
      <td>Func</td>
      <td>当触发上传时会调用uploadImage(callback),上传完成后调用callback传入图片信息可是字符串，数组或对象</td>
    </tr>
	<tr>
      <td>onLoading</td>
      <td>Func</td>
      <td>Func</td>
      <td>当调用wx上传是调用onLoading(true),当wx上传和uploadImage结束都结束时调用onLoading(false)</td>
    </tr>
	<tr>
      <td>value</td>
      <td>Array</td>
      <td>null</td>
      <td>所有图片信息（非必填，提供给form组件使用）</td>
    </tr>
	<tr>
      <td>onChange</td>
      <td>Func</td>
      <td>null</td>
      <td>图片信息修改后调用onChange(values) （非必填，提供给form组件使用）</td>
    </tr>
</tbody>
</table>
### ImagePickerInterface

![](http://imgs.dxcweb.com/react-imagepicker.png)