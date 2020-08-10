const path = require('path');
const { generateTheme } = require('@moxer/vscode-theme-generator');

const fg = '#44445a';

generateTheme('Pitch Black', {
  type: 'dark',
  base: {
    background: '#000000',
    foreground: fg,
    color1: '#6f2a3a',
    color3: '#8a4022',
    color2: '#45653a',
    color4: '#454599'
  },
  syntax: {
    comment: '#444444',
    identifier: fg,
    variable: fg,
    punctuation: '#707030',
    boolean: '#772310',
    number: '#909030',
    storage: '#563390',
    class: '#454599',
    cssId: '#7a337a',
    type: '#7a337a',
    cssClass: '#8a4022'
  },
  semanticHighlighting: true,
  ui: {
    cursor: fg,
    guide: `${fg}55`,
    lineHighlight: '#ff0000',
    selection: `${fg}3a`,
    wordHighlight: '#45459922',
    wordHighlightStrong: '#4545992a'
  },
  customTokens: [
    {
      scope: 'comment',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: ['keyword.control', 'keyword.other', 'keyword.operator.new', 'entity.other.attribute-name'],
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: ['constant.language', 'variable.language.this', 'support.constant'],
      settings: {
        fontStyle: 'italic',
        foreground: '#458a8a'
      }
    },
    {
      scope: ['support.class.component', 'support.variable'],
      settings: {
        foreground: '#7a337a'
      }
    },
    {
      scope: 'support.variable.property',
      settings: {
        foreground: '#7a337a',
        fontStyle: 'italic'
      }
    },
    {
      scope: ['entity.name.tag', 'punctuation.definition.tag'],
      settings: {
        foreground: '#454599'
      }
    }
  ]
}, path.resolve(__dirname, '../themes/theme.json'));
