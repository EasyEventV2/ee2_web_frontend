import React from 'react';
import { FieldArray as ReduxFormFieldArray } from 'redux-form';
import uuid from 'utils/uuid';

function FieldArray(props) {
  const {
    id,
    label,
    name,
    required,
    options,
    scrollable,
    ...rest
  } = props;

  const renderChildren = ({ fields }) => {
    console.log(fields.getAll());
    return (
      <div
        id={id}
        key={id}
        className={scrollable ? 'overflow-auto border rounded p-1 bg-white' : ''}
        style={scrollable ? { maxHeight: 150 } : {}}
      >
        {options.map((option) => (
          <div
            key={option._id}
            className="form-check"
          >
            <input
              id={option._id}
              type="checkbox"
              value={option._id}
              className="form-check-input"
              onClick={(e) => {
                if (e.target.checked) {
                  fields.push(e.target.value);
                } else {
                  fields.remove(fields.getAll().indexOf(e.target.value));
                }
              }}
            />
            <label htmlFor={option._id} className="form-check-label">{option.value}</label>
          </div>
        ))}
      </div>
    );
  };

  const renderForm = () => (
    <ReduxFormFieldArray
      name={name}
      component={renderChildren}
      required={required}
      {...rest}
    />
  );

  const renderLabel = () => (
    <>
      <label htmlFor={id}>{label}</label>
      {required && <span className="text-danger">&nbsp;*</span>}
    </>
  );

  return (
    <div
      className="form-group"
    >
      {renderLabel()}
      {renderForm()}
    </div>
  );
}

FieldArray.defaultProps = {
  id: uuid.generate(),
};

export default FieldArray;
