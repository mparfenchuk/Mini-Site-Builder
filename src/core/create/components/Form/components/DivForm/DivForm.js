import React from 'react';
import { Formik, Field } from 'formik';

import { divProperties } from '@utils/elementsProperties';

import { SubmitButton, StyledForm, InputGroup, Input, Label } from '@app/App.styled';

const Form = ({ selectedProperties, submit }) => 
  <Formik
    enableReinitialize
    initialValues={{ 
      ...divProperties, 
      ...selectedProperties
    }}
    onSubmit={submit}
    render={({ isSubmitting, isValid }) => (
      <StyledForm autoComplete="off">
        {Object.keys(divProperties).map(key => 
          <Field key={key} name={key} render={({ field }) => (
            <InputGroup>
              <Label>
                {key}:
              </Label>
              <Input type="text" {...field} />
            </InputGroup>
          )}/>)}
        <SubmitButton 
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Save
        </SubmitButton>
      </StyledForm>
    )}
  />

export default Form;