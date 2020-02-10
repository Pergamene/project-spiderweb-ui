export const Model = _getInitialModel();

function _getInitialModel() {
  return {
    pages: [
      {
        id: 'PG_123456789012',
        title: 'Page 1',
        summary: 'This is a test',
        pageTemplateId: 'PGT_12345678901'
      },
      {
        id: 'PG_123456789013',
        title: 'Page 2',
        summary: 'This is a test 2',
        pageTemplateId: 'PGT_12345678901'
      }
    ]
  };
}

export function initializeModel() {
  let model = _getInitialModel();
  Model.pages = [...model.pages];
}