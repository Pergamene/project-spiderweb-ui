export const Model = _getInitialModel();

function _getInitialModel() {
  return {
    pages: {
      'PG_123456789012': {
        title: 'Talendor, the Ancient Resting Place',
        summary: 'Long ago, the Talendorians lived together in harmony. Then, everything changed when the Fire Plane attacked.',
        properties: [
          {
            key: 'population',
            type: 'number',
            value: 100000
          },
          {
            key: 'banner',
            type: 'string',
            value: 'A mountain peak pinched by two suns'
          }
        ],
        details: [
          {
            title: 'The Bannerfold Barracks',
            summary: 'Belgon leads the barrack guards as the captain over the defense of the city and its kingdom.',
            partitions: [
              {
                type: 'h1',
                value: 'This is an h1 header'
              },
              {
                type: 'h2',
                value: 'This is an h2 header'
              },
              {
                type: 'h3',
                value: 'This is an h3 header'
              },
              {
                type: 'h4',
                value: 'This is an h4 header'
              },
              {
                type: 'h5',
                value: 'This is an h5 header'
              },
              {
                type: 'h6',
                value: 'This is an h6 header'
              },
              {
                type: 'p',
                partitions: [
                  {
                    type: 'text',
                    value: 'This is regular text.'
                  }
                ]
              },
              {
                type: 'p',
                partitions: [
                  {
                    type: 'text',
                    value: 'It can be split on multiple lines.'
                  }
                ]
              },
              {
                type: 'p',
                partitions: [
                  {
                    type: 'text',
                    value: 'It '
                  },
                  {
                    type: 'bold',
                    value: 'can'
                  },
                  {
                    type: 'text',
                    value: ' '
                  },
                  {
                    type: 'italics',
                    value: 'also'
                  },
                  {
                    type: 'text',
                    value: ' '
                  },
                  {
                    type: 'bold',
                    partitions: [
                      {
                        type: 'italics',
                        value: 'contain'  
                      }
                    ]
                  },
                  {
                    type: 'text',
                    value: ' '
                  },
                  {
                    type: 'link',
                    value: 'inline links',
                    link: 'https://www.google.com'
                  },
                  {
                    type: 'text',
                    value: ' '
                  }, 
                  {
                    type: 'relation',
                    value: 'relations',
                    relation: 'PG_123456789012345',
                  },
                  {
                    type: 'text',
                    value: ' or '
                  },
                  {
                    type: 'color',
                    value: 'colors',
                    color: '#FF2200'
                  },
                  {
                    type: 'text',
                    value: '.'                        
                  }
                ]
              },
              {
                type: 'ul',
                items: [
                  {
                    type: 'text',
                    value: 'unordered list'
                  }
                ]
              },
              {
                type: 'ol',
                items: [
                  {
                    type: 'bold',
                    partitions: [
                      {
                        type: 'italics',
                        value: 'ordered list 1'  
                      }
                    ]
                  },
                  {
                    type: 'text',
                    value: 'ordered list 2'
                  }
                ]
              },
              {
                type: 'image',
                altText: 'alt text for an image',
                link: 'https://image.shutterstock.com/image-illustration/chinese-style-fantasy-scenes3d-rendering-260nw-647884516.jpg'
              },
              {
                type: 'image',
                altText: null,
                link: 'https://image.shutterstock.com/image-photo/warrior-man-standing-on-fantasy-260nw-1069598228.jpg'
              },
              {
                type: 'quote',
                value: 'quoted text'
              },
              {
                type: 'hr'
              },
              {
                type: 'quote',
                value: 'or quoted paragraphs\nif it\'s more than one line'
              }
            ]
          }
        ]
      }
    }
  };
}

export function initializeModel() {
  let model = _getInitialModel();
  Model.pages = {...model.pages};
}