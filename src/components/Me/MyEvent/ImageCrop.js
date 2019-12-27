import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';

class ImageCrop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      crop: {
        unit: '%',
        width: 40,
        aspect: 8 / 3,
      },
      currentCrop: null,
    };
  }

  handleSubmitImage = () => {
    this.makeClientCrop(this.state.currentCrop);
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => this.setState({ src: reader.result }));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.setState({
      currentCrop: crop,
    });
  };

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const { croppedImageUrl, blob } = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({
        croppedImageUrl,
        src: null,
        currentCrop: null,
      }, () => {
        this.props.onSubmit(blob);
      });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob(blob => {
        console.log(blob);
        if (!blob) {
          // reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        // eslint-disable-next-line
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve({
          croppedImageUrl: this.fileUrl,
          blob,
        });
      }, 'image/jpeg');
    });
  }

  render() {
    const {
      crop, croppedImageUrl, src, currentCrop,
    } = this.state;

    return (
      <>
        <div className="form-group">
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
        </div>
        {src && (
          <>
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
            <button
              className="btn btn-primary d-block"
              type="button"
              onClick={this.handleSubmitImage}
              disabled={!currentCrop}
            >
              Cắt ảnh
            </button>
          </>
        )}
        {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
      </>
    );
  }
}

export default ImageCrop;
