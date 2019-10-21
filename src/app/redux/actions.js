import { 
  ADD_ELEMENT, ADD_ELEMENT_AS_CHILD, 
  SELECT_ELEMENT, UNSELECT_ELEMENT, SET_ELEMENT_PROPERTIES, 
  ADD_CHILD, MOVE_CHILD, MOVE_CHILD_TO_CONTAINER, 
  REMOVE_ELEMENT, REMOVE_ELEMENT_FROM_CONTAINER, RESET_CONTAINER,
  UPLOAD_PROJECT 
} from './actionTypes';

export const addElement = element => ({
  type: ADD_ELEMENT,
  payload: {
    element
  }
});

export const addElementAsChild = (element, containerId) => ({
  type: ADD_ELEMENT_AS_CHILD,
  payload: {
    element,
    containerId
  }
});

export const selectElement = (elementId, fromContainerId) => ({
  type: SELECT_ELEMENT,
  payload: {
    elementId,
    fromContainerId
  }
});

export const unselectElement = () => ({
  type: UNSELECT_ELEMENT
});

export const setElementProperties = (elementId, properties) => ({
  type: SET_ELEMENT_PROPERTIES,
  payload: {
    elementId,
    properties
  }
});

export const addChild = (containerId, elementId) => ({
  type: ADD_CHILD,
  payload: {
    containerId,
    elementId
  }
})

export const moveChild = (fromContainerId, containerId, elementId) => ({
  type: MOVE_CHILD,
  payload: {
    fromContainerId,
    containerId,
    elementId
  }
})

export const moveChildToContainer = (fromContainerId, elementId) => ({
  type: MOVE_CHILD_TO_CONTAINER,
  payload: {
    fromContainerId,
    elementId
  }
})

export const removeElement = (elementId, fromContainerId, removingElements) => ({
  type: REMOVE_ELEMENT,
  payload: {
    elementId,
    fromContainerId,
    removingElements
  }
});

export const removeElementFromContainer = (elementId, removingElements) => ({
  type: REMOVE_ELEMENT_FROM_CONTAINER,
  payload: {
    elementId,
    removingElements
  }
});

export const resetContainer = () => ({
  type: RESET_CONTAINER
});

export const uploadProject = uploadedState => ({
  type: UPLOAD_PROJECT,
  payload: {
    uploadedState
  }
});