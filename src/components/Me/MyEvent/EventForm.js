import React, { Component } from 'react';
import { reduxForm, Field as ReduxFormField } from 'redux-form';
import { connect } from 'react-redux';
import configs from 'configs';
import LocationPicker from 'react-location-picker';
import { FormKey } from 'constants/form';
import Field from 'components/Common/Form/Field';
import ImageCrop from 'components/Me/MyEvent/ImageCrop';

const defaultPosition = {
  lat: 21.04192103737484,
  lng: 105.81603412628169,
};

class EventForm extends Component {
  handleImage = (blob) => new Promise((resolve) => {
    const formData = new FormData();
    formData.append('image', blob);
    formData.append('type', 'URL');

    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        resolve(JSON.parse(request.responseText));
      }
    };
    request.open('POST', `${configs.imgurApiUrl}/image`);
    request.setRequestHeader('Authorization', `Client-ID ${configs.imgurClientId}`);
    request.send(formData);
  })

  onSubmit = (e) => {
    const { handleSubmit } = this.props;
    e.preventDefault();
    handleSubmit(e);
  }

  render() {
    // TODO: add min and max time for start/end
    const { categories } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <h5 className="mb-4">Thông tin cơ bản</h5>
        <div className="form-group">
          <Field
            name="name"
            label="Tên sự kiện"
            required
          />
          <Field
            name="description"
            label="Mô tả"
            type="textarea"
            required
          />
          <Field
            name="start_time"
            label="Thời điểm bắt đầu"
            type="datetime"
            required
          />
          <Field
            name="end_time"
            label="Thời điểm kết thúc"
            type="datetime"
            required
          />
          <Field
            name="category"
            label="Thể loại sự kiện"
            type="checkbox"
            options={categories.map(item => ({ name: item.value, value: item._id }))}
            scrollable
          />
        </div>
        <hr />
        <h5 className="mb-4">Thông tin liên hệ</h5>
        <div className="form-group">
          <Field
            name="contact.phone_number"
            label="Số điện thoại"
            type="number"
            required
          />
          <Field
            name="contact.email"
            label="Email"
            type="email"
            required
          />
          <Field
            name="contact.facebook"
            label="Link sự kiện Facebook"
          />
          <Field
            name="contact.website"
            label="Website của nhà tổ chức"
          />
        </div>
        <hr />
        <h5 className="mb-4">Thông tin đại điểm</h5>
        <div className="form-group">
          <ReduxFormField
            name="location"
            component={(props) => (
              <div>
                <h6>Kéo thả vị trí ghim để chọn toạ độ</h6>
                <LocationPicker
                  containerElement={<div style={{ height: '100%' }} />}
                  mapElement={<div style={{ height: '500px' }} />}
                  defaultPosition={defaultPosition}
                  zoom={15}
                  radius={-1}
                  onChange={({ position, address }) => {
                    props.input.onChange({
                      latitude: position.lat,
                      longitude: position.lng,
                      address,
                    });
                  }}
                />
                <div className="form-group">
                  <label>Toạ độ</label>
                  <input className="form-control" readOnly value={`${props.input.value.latitude},${props.input.value.longitude}`} />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input className="form-control" readOnly value={props.input.value.address} />
                </div>
                <Field
                  name="location.place"
                  label="Địa điểm tổ chức"
                  placeholder="VD: Toà nhà Vincom"
                  required
                />
              </div>
            )}
          />
        </div>
        <hr />
        <h5 className="mb-4">Upload ảnh poster</h5>
        <div className="form-group">
          <ReduxFormField
            name="image_url"
            component={(props) => (
              <ImageCrop
                onSubmit={(blob) => {
                  this.handleImage(blob).then((res) => {
                    props.input.onChange(res.data.link);
                  });
                }}
              />
            )}
          />
        </div>
        <button type="submit" className="btn btn-warning btn-lg float-right">TẠO SỰ KIỆN</button>
      </form>
    );
  }
}

const mapStateToProps = ({ event }) => ({
  categories: event.categories,
});

export default connect(mapStateToProps, null)(reduxForm({
  form: FormKey.EVENT_DETAIL,
})(EventForm));
