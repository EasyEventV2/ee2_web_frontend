import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCategories, addNewEvent } from 'datalayer/actions/event.action';
import { showError, showSuccess } from 'utils/toastr';
import EventForm from 'components/Me/MyEvent/EventForm';

class NewEvent extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  handleSubmit = (values) => {
    const data = {
      ...values,
      category: Object.keys(values.category),
      contact: {
        ...values.contact,
      },
      location: {
        ...values.location,
      },
    };
    const { addNewEvent, history } = this.props;
    addNewEvent(data).then(res => {
      if (res.error) {
        showError();
        return;
      }
      showSuccess();
      history.push('/me/event');
    });
  }

  render() {
    return (
      <div className="container py-5 h-100">
        <h3 className="mb-3">Tạo sự kiện mới</h3>
        <div className="card bg-light">
          <div className="card-body">
            <EventForm
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getCategories, addNewEvent }
)(withRouter(NewEvent));
