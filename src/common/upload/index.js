import React, { Component } from 'react';
import { Upload, Button, Icon } from "antd";

class EfUpload extends Component {
  state = {
  fileList:[],
  }

  /**
   * 上傳文件
   */
  onUpload = file => {
    this.setState({
      fileList: [file],
    }, () => {
      const formData = new FormData();
      formData.append('file', file);
      this.props.success(file);
    });
    return false;
  }

  /**
   * 移除文件   size="large"
   */
  onRemove = file => {
    this.setState((state) => {
      const index = state.fileList.indexOf(file);
      const newFileList = state.fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList,
      };
    });
  }
  render(){
    const { fileList } = this.state;
    const uploadProps = {
      name: 'file',
      headers: {
        authorization: 'authorization-text',
      },
      onRemove: this.onRemove,
      beforeUpload: this.onUpload,
      fileList,
      multiple: true,
      // action: process.env.NODE_ENV === 'development'? 'http://10.42.21.13:108' + this.props.path : '',
      // data: {
      //   Supervisor: sessionStorage.getItem('userId')
      // }
    }
    // console.log(uploadProps(action))
    return(
      <Upload {...uploadProps}>
        <Button  type="primary">
          <Icon type="upload" /> 點擊上傳
        </Button>
      </Upload>
    )
  }
}
  
export default EfUpload;



// 
// import { Upload, Icon, message } from 'antd';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }

// class Avatar extends React.Component {
//   state = {
//     loading: false,
//   };

//   handleChange = info => {
//     if (info.file.status === 'uploading') {
//       this.setState({ loading: true });
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, imageUrl =>
//         this.setState({
//           imageUrl,
//           loading: false,
//         }),
//       );
//     }
//   };

//   render() {
//     const uploadButton = (
//       <div>
//         <Icon type={this.state.loading ? 'loading' : 'plus'} />
//         <div className="ant-upload-text">Upload</div>
//       </div>
//     );
//     const { imageUrl } = this.state;
//     return (
//       <Upload
//         name="avatar"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//         // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         beforeUpload={beforeUpload}
//         onChange={this.handleChange}
//       >
//         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//       </Upload>
//     );
//   }
// }

// ReactDOM.render(<Avatar />, mountNode);

