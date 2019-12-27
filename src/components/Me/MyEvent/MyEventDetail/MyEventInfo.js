import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getEventDetail } from 'datalayer/actions/event.action';
import { selectEventDetail } from 'datalayer/selectors/event.selector';

class MyEventInfo extends Component {
  componentDidMount() {
    const {
      getEventDetail,
      match: {
        params: {
          eventId,
        },
      },
    } = this.props;
    getEventDetail(eventId);
  }

  render() {
    const {
      contact,
      eventLocation,
      category,
      name,
      description,
      start_time,
      end_time,
      image_url,
    } = this.props;
    return (
      <div className="p-3">
        <h3 className="mb-3">Chi tiết sự kiện</h3>
        <ul>
          <li className="mb-3">
            <strong className="mr-3">Tên sự kiện:</strong>
            <span>{name}</span>
          </li>
          <li className="mb-3">
            <strong className="mr-3">Mô tả:</strong>
            <span>{description}</span>
          </li>
          <li className="mb-3">
            <strong className="mr-3">Bắt đầu:</strong>
            <span>{moment(start_time).format('DD/M/YYYY - h:mm A')}</span>
          </li>
          <li className="mb-3">
            <strong className="mr-3">Kết thúc:</strong>
            <span>{moment(end_time).format('DD/M/YYYY - h:mm A')}</span>
          </li>
          <li className="mb-3">
            <strong className="mr-3">Ảnh poster:</strong>
            <img src={image_url} width="200" alt="" />
          </li>
          <li className="mb-3">
            <strong className="mr-3">Thể loại:</strong>
            {category.map((item) => (
              <span>{`${item.value}, `}</span>
            ))}
          </li>
          <li className="mb-3">
            <strong className="mr-3">Địa chỉ:</strong>
            <span>{eventLocation.address}</span>
          </li>
          <li className="mb-3">
            <strong className="mr-3">Địa điểm tổ chức:</strong>
            <span>{eventLocation.place}</span>
          </li>
          <li className="mb-3">
            <strong className="mr-3">Liên hệ:</strong>
            <span>{`${contact.email} - ${contact.phone_number}`}</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ event }) => {
  const {
    contact,
    location,
    category,
    name,
    description,
    start_time,
    end_time,
    image_url,
  } = selectEventDetail(event);
  return {
    contact,
    eventLocation: location,
    category,
    name,
    description,
    start_time,
    end_time,
    image_url,
  };
};

const mapDispatchToProps = {
  getEventDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyEventInfo);
