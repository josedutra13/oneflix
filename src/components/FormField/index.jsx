import React from 'react';
import PropTypes from 'prop-types';

import {
  FormFieldWrapper, Label, Input,
} from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  // const validateFieldContent = value !== '';
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          value={value}
          name={name}
          type={type}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>

    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
