import React from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

import { Button } from '@app/App.styled';

const SaveButton = () => {
  const state = useSelector(state => state);

  const saveConstructor = () => {
    const blob = new Blob([JSON.stringify(state)], { type: "application/json;charset=utf-8" });
    saveAs(blob, "mini-site-builder.json");
  }

  return (
    <Button onClick={saveConstructor}>
      Save
    </Button>
  )
};

export default SaveButton;