import React from 'react';
import DatePicker from 'react-datepicker';

function DateTimePicker(props) {
  const {
    input,
    id,
    type,
    className,
    placeholder,
    required,
    minTime,
    maxTime,
  } = props;
  return (
    <DatePicker
      selected={input.value}
      onChange={date => input.onChange(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={5}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      wrapperClassName="d-block"
      minTime={minTime}
      maxTime={maxTime}
      id={id}
      type={type}
      className={className}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default DateTimePicker;
