export const Model = _getInitialModel();

function _getInitialModel() {
  return {
    pages: {
      'PG_1': {
        title: 'Talendor, the Ancient Resting Place',
        summary: 'Long ago, the Talendorians lived together in harmony. Then, everything changed when the Fire Plane attacked.'
      }
    }
  };
}

export function initializeModel() {
  let model = _getInitialModel();
  Model.pages = {...model.pages};
}

