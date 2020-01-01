import DateTimePicker from 'components/Common/Form/DateTimePicker';

export const FormKey = {
  LOGIN: 'LOGIN',
  EVENT_REGISTER: 'EVENT_REGISTER',
  EVENT_DETAIL: 'EVENT_DETAIL',
};

export const FieldType = {
  text: {
    type: 'text',
    component: 'input',
  },
  email: {
    type: 'email',
    component: 'input',
  },
  password: {
    type: 'password',
    component: 'input',
  },
  number: {
    type: 'number',
    component: 'input',
  },
  select: {
    type: 'select',
    component: 'select',
  },
  textarea: {
    type: 'text',
    component: 'textarea',
  },
  checkbox: {
    type: 'checkbox',
    component: 'input',
    className: 'form-check-input',
    wrapperClassName: 'form-check',
  },
  datetime: {
    type: 'text',
    component: DateTimePicker,
  },
};
