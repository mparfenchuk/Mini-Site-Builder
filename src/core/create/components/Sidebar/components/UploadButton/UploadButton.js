import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import { useDispatch } from 'react-redux';

import { uploadProject } from '../../../../../../app/redux/actions';

import { Button } from '../../../../../../app/App.styled';

const UploadButton = () => {
  const dispatch = useDispatch()

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('File reading was aborted')
    reader.onerror = () => console.log('File reading has failed')
    reader.onload = () => {
      const uploadedState = JSON.parse(reader.result)
      dispatch(uploadProject(uploadedState))
    }
    reader.readAsText(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Button {...getRootProps()}>
      <input {...getInputProps()} />
      Upload
    </Button>
  )
};

export default UploadButton;