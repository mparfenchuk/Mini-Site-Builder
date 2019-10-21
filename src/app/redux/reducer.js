import { 
  ADD_ELEMENT, ADD_ELEMENT_AS_CHILD, 
  SELECT_ELEMENT, UNSELECT_ELEMENT,
  SET_ELEMENT_PROPERTIES, 
  ADD_CHILD, MOVE_CHILD, MOVE_CHILD_TO_CONTAINER,
  REMOVE_ELEMENT, REMOVE_ELEMENT_FROM_CONTAINER, RESET_CONTAINER,
  UPLOAD_PROJECT
} from './actionTypes';

const initialState = {
  elements: [],
  children: [],
  selected: {
    id: null,
    fromContainerId: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT: {
      const { element } = action.payload;
      return {
        ...state,
        elements: [...state.elements, element],
        children: [...state.children, element.id]
      };
    }
    case ADD_ELEMENT_AS_CHILD: {
      const { element, containerId } = action.payload;
      const elementId = element.id;
      return {
        ...state,
        elements: [...state.elements, element].map(element => 
          element.id === containerId
          ? {
            ...element,
            children: [...element.children, elementId]
          }
          : element)
      };
    }
    case SET_ELEMENT_PROPERTIES: {
      const { elementId, properties } = action.payload;
      return {
        ...state,
        elements: state.elements.map(element => 
          element.id === elementId
          ? {
            ...element, 
            properties: {
              ...element.properties, 
              ...properties 
            }
          }
          : element)
      };
    }
    case ADD_CHILD: {
      const { containerId, elementId } = action.payload;
      return {
        ...state,
        elements: state.elements.map(element => 
          element.id === containerId
          ? {
            ...element,
            children: [...element.children, elementId]
          }
          : element),
        children: state.children.filter(childId => childId !== elementId)
      };
    }
    case MOVE_CHILD: {
      const { fromContainerId, containerId, elementId } = action.payload;
      return {
        ...state,
        elements: state.elements.map(element => {
          if (element.id === containerId) {
            return {
              ...element,
              children: [...element.children, elementId]
            }
          }

          if (element.id === fromContainerId) {
            return {
              ...element,
              children: element.children.filter(childId => childId !== elementId)
            }
          }

          return element;
        })
      };
    }
    case MOVE_CHILD_TO_CONTAINER: {
      const { fromContainerId, elementId } = action.payload;
      return {
        ...state,
        elements: state.elements.map(element => 
          element.id === fromContainerId
          ? {
            ...element,
            children: element.children.filter(childId => childId !== elementId)
          }
          : element),
        children: [...state.children, elementId]
      };
    }
    case REMOVE_ELEMENT: {
      const { elementId, fromContainerId, removingElements } = action.payload;
      return {
        ...state,
        elements: state.elements.map(element => 
          element.id === fromContainerId 
          ? {
            ...element,
            children: element.children.filter(childId => childId !== elementId)
          } 
          : element).filter(element => !removingElements.includes(element.id)),
        selected: {
          id: null,
          fromContainerId: null
        }
      };
    }
    case REMOVE_ELEMENT_FROM_CONTAINER: {
      const { elementId, removingElements } = action.payload;
      return {
        ...state,
        elements: state.elements.filter(element =>
          !removingElements.includes(element.id)),
        children: state.children.filter(childId => childId !== elementId),
        selected: {
          id: null,
          fromContainerId: null
        }
      };
    }
    case SELECT_ELEMENT: {
      const { elementId, fromContainerId } = action.payload;
      return {
        ...state,
        elements: state.elements.map(element => {
          if (element.id === elementId) {
            return {
              ...element,
              selected: true,
            }
          }

          if (state.selected.id === element.id) {
            return {
              ...element,
              selected: false,
            }
          }

          return element;
        }),
        selected: {
          id: elementId,
          fromContainerId
        }
      };
    }
    case UNSELECT_ELEMENT: {
      return {
        ...state,
        elements: state.elements.map(element => 
          element.id === state.selected.id
          ? {
            ...element,
            selected: false,
          }
          : element),
        selected: {
          id: null,
          fromContainerId: null
        }
      };
    }
    case RESET_CONTAINER: {
      return {
        elements: [],
        children: [],
        selected: {
          id: null,
          fromContainerId: null
        }
      };
    }
    case UPLOAD_PROJECT: {
      const { uploadedState } = action.payload;
      return uploadedState;
    }
    default:
      return state;
  }
}