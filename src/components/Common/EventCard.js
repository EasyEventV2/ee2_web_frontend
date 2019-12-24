/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function EventCard({ onClick }) {
  return (
    <div
      role="button"
      className="col-md-6 p-3"
      style={{
        cursor: onClick ? 'pointer' : null,
      }}
      onClick={onClick}
    >
      <div className="card ee-hoverFocus">
        <div
          className="container-fluid p-0"
          style={{
            height: 250,
            overflow: 'hidden',
          }}
        >
          <img className="card-img-top" src="https://via.placeholder.com/150x300" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Tên sự kiện</h5>
          <div className="d-flex">
            <div className="d-flex flex-grow-1 flex-column">
              <div className="flex-grow-1">Miễn phí</div>
              <div className="flex-grow-1 d-flex align-items-end">
                <div
                  className="border p-1"
                  style={{
                    width: 'fit-content',
                    fontSize: 15,
                  }}
                >
                  HÀ NỘI
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-column border"
              style={{
                width: 80,
                height: 70,
                boxShadow: '2px 2px #dddddd',
              }}
            >
              <div
                className="bg-danger text-center text-white"
                style={{
                  height: 20,
                  fontSize: 10,
                  lineHeight: 2,
                }}
              >
                DECEMBER
              </div>
              <div>
                <div
                  className="text-center"
                  style={{
                    height: 30,
                    fontSize: 20,
                  }}
                >
                  26
                </div>
                <div
                  className="text-center"
                  style={{
                    height: 20,
                    fontSize: 10,
                  }}
                >
                  Monday
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
