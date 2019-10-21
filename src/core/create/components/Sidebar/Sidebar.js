import React from 'react';
import { useHistory } from 'react-router-dom';

import { Title } from '../../../../app/App.styled';
import { Wrapper, Grow, Divider, LinkButton  } from './Sidebar.styled';

import ElementButton from './components/ElementButton';
import UploadButton from './components/UploadButton';
import SaveButton from './components/SaveButton';
import ResetButton from './components/ResetButton';

import elementsList from '../../../../utils/elementsList';

const Sidebar = ({ onDragStart }) => {
  const history = useHistory();

  const goToView = () => history.push('/view');

  return (
    <Wrapper>
      <Title>
        Available elements
      </Title>
      <div>
        {elementsList.map(element =>
          <ElementButton
            key={element.type}
            title={element.title}
            draggable
            onDragStart={onDragStart({ 
              type: element.type 
            })}
          />
        )}
      </div>
      <Grow />
      <Divider />
      <Title>
        Save / upload structure
      </Title>
      <div>
        <SaveButton />
        <span>or</span>
        <UploadButton />
        <ResetButton />
      </div>
      <Divider />
      <div>
        <LinkButton onClick={goToView}>
          View site
        </LinkButton>
      </div>
    </Wrapper>
  )
};

export default Sidebar;