import _ from 'lodash';
import StyleDictionary, { TransformedTokens } from 'style-dictionary';

/*
 * TRANSFORMS
 */
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
      transformGroup: 'js',
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
