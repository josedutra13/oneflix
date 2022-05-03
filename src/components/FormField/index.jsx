import React from 'react';
import PropTypes from 'prop-types';

import {
  FormFieldWrapper, Label, Input,
} from './styles';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
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
          autoComplete={suggestions.length !== 0 ? 'off' : 'on'}
          list={suggestions.length !== 0 ? `suggestionFor_${fieldId}` : undefined}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        <datalist id={`suggestionFor_${fieldId}`}>
          {suggestions.map((suggestion) => (
            <option value={suggestion} key={suggestion}>
              {suggestion}
            </option>
          ))}
        </datalist>
      </Label>

    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
