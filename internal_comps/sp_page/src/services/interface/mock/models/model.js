export const Model = _getInitialModel();

function _getInitialModel() {
  return {
    pages: {
      '1': {
        title: 'This is a test'
      }
    }
  };
}

export function initializeModel() {
  let model = _getInitialModel();
  Model.pages = [...model.pages];
}

