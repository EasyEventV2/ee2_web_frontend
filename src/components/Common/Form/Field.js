import React from 'react';
import { Field as ReduxFormField } from 'redux-form';
import { FieldType } from 'constants/form';
import uuid from 'utils/uuid';

function Field(props) {
  const {
    id,
    label,
    name,
    value,
    placeholder,
    className,
    wrapperClassName,
    required,
    type,
    options,
    scrollable,
    ...rest
  } = props;

  const fieldType = FieldType[type];

  const defaultWrapperClassName = (fieldType && fieldType.wrapperClassName)
    ? fieldType.wrapperClassName
    : 'form-group';

  const defaultClassName = (fieldType && fieldType.className)
    ? fieldType.className
    : 'form-control';

  const labelFirst = !(type === 'checkbox');

  const renderForm = (subValue = null) => (
    <ReduxFormField
      id={`${id}${subValue}`}
      name={`${name}${subValue ? `[${subValue}]` : ''}`}
      value={value}
      component={fieldType ? fieldType.component : 'input'}
      type={fieldType ? fieldType.type : 'text'}
      className={`${defaultClassName} ${className}`}
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  );

  const renderLabel = (subName = null, subValue = null) => (
    <>
      <label htmlFor={`${id}${subValue}`}>{subName || label}</label>
      {required && !subName && <span className="text-danger">&nbsp;*</span>}
    </>
  );

  if (options && type === 'checkbox') {
    return (
      <div
        className={`form-group ${wrapperClassName}`}
      >
        {renderLabel()}
        <div
          id={id}
          className={scrollable ? 'overflow-auto border rounded p-1 bg-white' : ''}
          style={scrollable ? { maxHeight: 150 } : {}}
        >
          {options.map((option) => (
            <div
              className={`${defaultWrapperClassName}`}
            >
              {labelFirst && renderLabel(option.name, option.value)}
              {renderForm(option.value)}
              {!labelFirst && renderLabel(option.name, option.value)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${defaultWrapperClassName} ${wrapperClassName}`}
    >
      {labelFirst && renderLabel()}
      {renderForm()}
      {!labelFirst && renderLabel()}
    </div>
  );
}

Field.defaultProps = {
  id: uuid.generate(),
  className: '',
  wrapperClassName: '',
  type: 'text',
};

export default Field;
