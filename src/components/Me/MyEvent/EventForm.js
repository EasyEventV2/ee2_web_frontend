import React, { Component } from 'react';
import { reduxForm, Field as ReduxFormField } from 'redux-form';
import { connect } from 'react-redux';
import LocationPicker from 'react-location-picker';
import { FormKey } from 'constants/form';
import Field from 'components/Common/Form/Field';

const defaultPosition = {
  lat: 21.04192103737484,
  lng: 105.81603412628169,
};

class EventForm extends Component {
  onSubmit = (e) => {
    const { handleSubmit } = this.props;
    e.preventDefault();
    handleSubmit(e);
  }

  render() {
    // TODO: add min and max time for start/end
    const { categories } = this.props;
    console.log(this.props);
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
                <Field
                  name="location.place"
                  label="Địa điểm tổ chức"
                  placeholder="VD: Toà nhà Vincom"
                  required
                />
                <div className="form-group">
                  <label>Toạ độ</label>
                  <input className="form-control" readOnly value={`${props.input.value.latitude},${props.input.value.longitude}`} />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input className="form-control" readOnly value={props.input.value.address} />
                </div>
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
              </div>
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
