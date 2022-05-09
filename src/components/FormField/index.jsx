import React from 'react';
import PropTypes from 'prop-types';

import {
  FormFieldWrapper, Label, Input, Span,
} from './styles';

function FormField({
  label, type, name, value, onChange, suggestions, error,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasError = error !== '';

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
          error={hasError}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {hasError ? <Span>{error}</Span> : null}

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
  error: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
};

export default FormField;
