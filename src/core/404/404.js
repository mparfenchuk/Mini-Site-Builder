import React from 'react';

import { Alert } from '@app/App.styled';
import { Wrapper } from './404.styled';

const NotFound = () =>
  <Wrapper>
    <Alert>
      404 Page not found
    </Alert>
  </Wrapper>

export default NotFound;