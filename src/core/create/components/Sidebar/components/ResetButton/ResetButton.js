import React from 'react';
import { useDispatch } from 'react-redux';

import { resetContainer } from '../../../../../../app/redux/actions';

import { Button } from '../../../../../../app/App.styled';

const ResetButton = () => {
  const dispatch = useDispatch();

  const reset = () => dispatch(resetContainer())

  return (
    <Button reset onClick={reset}>
      Reset container
    </Button>
  )
};

export default ResetButton;