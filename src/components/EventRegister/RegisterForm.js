import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FormKey } from 'constants/form';
import Field from 'components/Common/Form/Field';

class RegisterForm extends Component {
  onSubmit = (e) => {
    const { handleSubmit } = this.props;
    e.preventDefault();
    handleSubmit(e);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h5 className="card-title">Thông tin cơ bản</h5>
        <div className="form-group">
          <Field
            name="full_name"
            label="Tên đầy đủ"
            required
          />
          <Field
            name="email"
            label="Địa chỉ Email"
            type="email"
            required
          />
          <Field
            name="phone_number"
            label="Số điện thoại"
            type="number"
          />
          <Field
            name="gender"
            label="Giới tính"
            type="select"
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </Field>
        </div>
        <hr />
        <h5 className="card-title">Câu hỏi từ ban tổ chức</h5>
        <div className="form-group">
          <Field
            name="answers.question_1"
            label="Bạn học tập/làm việc trong lĩnh vực nào?"
            type="checkbox"
            options={[
              { name: 'Công nghệ', value: 'technology' },
              { name: 'Kinh doanh', value: 'economic' },
              { name: 'Giải trí', value: 'entertainment' },
              { name: 'Khác', value: 'others' },
            ]}
          />
          <Field
            name="answers.question_2"
            label="Lý do bạn đăng ký tham gia sự kiện là gì?"
            type="textarea"
          />
          <Field
            name="answers.question_3"
            label="Bạn có câu hỏi gì cho ban tổ chức không?"
            type="textarea"
          />
        </div>
        <button type="submit" className="btn btn-warning btn-lg float-right">GỬI ĐĂNG KÝ</button>
      </form>
    );
  }
}

export default reduxForm({
  form: FormKey.EVENT_REGISTER,
})(RegisterForm);
