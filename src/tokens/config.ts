import _ from "lodash";
import StyleDictionary, {DesignToken, TransformedToken} from "style-dictionary";
import Color from "tinycolor2"

/*
* TRANSFORMS
*/

/* 
* Name transform: adds a prefix which comes from token category 
* Example: 
* without transform: --blue-800
* with transform: --color-blue-800
*/
StyleDictionary.registerTransform({
  name: "name/category/prefix",
  type: "name",
  transformer: function (token) {  
    return token.type ? `${_.kebabCase(token.type)}-${token.name}` : token.name;
  },
});

/* 
* Name transform: replace any part of variable name with another value. 
* Allows to fix quickly naming inconsistencies.\
* Keep in mind that it applies after all the other transforms had run, for example kebab-case
* Use with caution, always make sure the selected text part won't be found in other tokens
* Example
* without transform: --color-app-omni-blue
* with transform: --color-appomni-blue
*/
const renamesMap = {
  "font-sizes": "font-size",
  "font-weights": "font-weight",
  "font-families": "font-family",
  "line-heights": "line-height",
  "app-omni": "appomni",
  "gray-black": "black",
  "gray-white": "white",
  "-extended": ""
};

StyleDictionary.registerTransform({
  name: "name/renames",
  type: "name",
  transformer: function (token) {
    let name = token.name;
    Object.entries(renamesMap).forEach(([original, renamed]) => {
      name = name.replace(original, renamed);
    });
    return name;
  }
})

/* 
* Value transform: unwrap box shadow tokens and concat into a css string
*/
interface ShadowToken extends DesignToken {
  value: {
    x: number,
    y: number, 
    blur: number,
    spread: number,
    color: string,
    type: string
  }
}


// https://github.com/amzn/style-dictionary/blob/a12a31fe14ca9500c03608c8dc2c35361339af96/lib/common/transforms.js#L512
function colorToCss(colorString: string) {
  const color = Color(colorString);
  if (color.getAlpha() === 1) {
    return color.toHexString();
  } else {
    return color.toRgbString();
  }
}

function wrapValueWith(character: string, token: TransformedToken) {
	return `${character}${token.value}${character}`;
}

StyleDictionary.registerTransform({
  name: "shadow/css",
  type: "value",
  matcher: (token) => token.type === "boxShadow",
  transformer: (token: ShadowToken) => {
    function getShadowString({ x, y, blur, spread, color, type }: ShadowToken["value"]) {      
      return `${x}px ${y}px ${blur}px ${spread}px ${colorToCss(color)}${type !== "dropShadow" ? " inset" : ""}`;
    }
    
     if (Array.isArray(token.value)) {
      return token.value.map(getShadowString).join()
    }
    return getShadowString(token.value)
    
    
  },
});

/* 
* Value transform: add "px" to size/spacing values
*/
StyleDictionary.registerTransform({
  name: "number/px",
  type: "value",
  matcher: (token) =>
    typeof token.value === "number" && token.type !== "opacity",
  transformer: (token) => `${token.value}px`,
});

/* 
* Value transform: put font family name in quotes
*/
StyleDictionary.registerTransform({
  name: "font/quote",
  type: "value",
  matcher: (token) => token?.attributes?.category === 'content',
  transformer: (token) => wrapValueWith('\'', token)
});

const typographyCategories = [
  "fontSizes",
  "textCase",
  "textDecoration",
  "letterSpacing",
  "paragraphSpacing",
  "fontWeights",
  "fontFamilies",
  "lineHeights",
];

const isTypographyToken = (token: DesignToken) =>
typographyCategories.includes(token["type"]);


const tokenCategories = ["color", "typography", "sizing", "spacing", "boxShadow", ...typographyCategories];

const options = {
  source: ["src/tokens/converted.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/tokens/build/",
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "name/category/prefix",
        "name/renames",
        "number/px",
        "color/css",
        "shadow/css",
        "content/quote",
        "font/quote",
      ],
      files: [
        {
          destination: "_colors.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: { type: "color" },
        },
        /* Commented out, because we don't have this category in the current version, but we still can change our mind :) */
        // {
        //   destination: "_typography_combined.css",
        //   format: "css/variables",
        //   options: {
        //     outputReferences: true,
        //   },
        //   filter: { type: "typography" },
        // },
        {
          destination: "_typography.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: isTypographyToken,
        },
        {
          destination: "_size.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: (token: DesignToken) => token.type === "sizing" || token.type === "spacing"
        },
        {
          destination: "_shadow.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: {type: "boxShadow"}
        },
        {
          destination: "_rest.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: (token: DesignToken) => {
            return !tokenCategories.includes(token['type']);
          },
        },
      ],
    },
  },
};

StyleDictionary.extend(options).buildAllPlatforms();
