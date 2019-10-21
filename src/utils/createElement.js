import uuidv1 from 'uuid/v1';

export default type => ({
  id: uuidv1(),
  type,
  ...type === 'div' && { children: [] }
})