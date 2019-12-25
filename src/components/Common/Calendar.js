import React from 'react';
import moment from 'moment';

function Calendar({ dateTime, scale }) {
  const month = moment(dateTime).format('MMMM');
  const date = moment(dateTime).format('DD');
  const dayOfWeek = moment(dateTime).format('dddd');
  return (
    <div
      className="d-flex flex-column border"
      style={{
        width: 80 * scale,
        height: 70 * scale,
        boxShadow: '2px 2px #dddddd',
      }}
    >
      <div
        className="bg-danger text-center text-white"
        style={{
          height: 20 * scale,
          fontSize: 10 * scale,
          lineHeight: 2,
        }}
      >
        {month}
      </div>
      <div>
        <div
          className="text-center"
          style={{
            height: 30 * scale,
            fontSize: 20 * scale,
          }}
        >
          {date}
        </div>
        <div
          className="text-center"
          style={{
            height: 20 * scale,
            fontSize: 10 * scale,
          }}
        >
          {dayOfWeek}
        </div>
      </div>
    </div>
  );
}

Calendar.defaultProps = {
  scale: 1,
};

export default Calendar;
