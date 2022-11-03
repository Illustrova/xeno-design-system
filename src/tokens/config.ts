import _ from 'lodash';
import StyleDictionary, { TransformedTokens } from 'style-dictionary';
function throwSizeError(name: string, value: string, unitType: string) {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
}

StyleDictionary.registerTransform({
  type: 'value',
  name: 'typography/fontSize/px',
  matcher: token => token?.attributes?.category == 'typography' && token?.attributes?.item === 'fontSize',
  transformer: function (token) {
    const val = parseFloat(token.value);
    if (isNaN(val)) throwSizeError(token.name, token.value, 'px');
    return val + 'px';
  },
});
StyleDictionary.registerFormat({
  name: 'js/object/comments',
  formatter: ({ dictionary }) => {
    return `export const tokens = {${colorObjectToStringWithJsDoc(dictionary.tokens)}}`;
  },
});

function colorObjectToStringWithJsDoc(obj: TransformedTokens): string {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj.toString();
  }

  var toRet = '';
  for (var name in obj) {
    if (!obj[name].hasOwnProperty('value')) {
      toRet += `\"${name}\": {${colorObjectToStringWithJsDoc(obj[name])}},`;
    } else {
      const token = obj[name];
      if (typeof token.value === 'object') {
        toRet += `\n/**\n\`\`\`${JSON.stringify(token.value, null, 2)}\`\`\` \n*/\n\"${name}\": ${JSON.stringify(
          token.value
        )},`;
      } else if (_.isNumber(token.value) || (_.isString(token.value) && token.value.length > 0)) {
        toRet += `\n/** ${token.value} */\n\"${name}\": \"${token.value}\",`;
      }
    }
  }

  return toRet;
}

const options = {
  source: ['src/tokens/converted.json'],
  platforms: {
    js: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/css', 'typography/fontSize/px'],
      buildPath: './src/tokens/build/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'js/object/comments',
        },
      ],
    },
  },
};

StyleDictionary.extend(options).buildAllPlatforms();
