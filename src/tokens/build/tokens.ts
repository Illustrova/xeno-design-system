export const tokens = {
  tokenSetOrder: {
    /** main */
    "0": "main",
  },
  borderRadius: {
    /** 4 */
    sm: '4',
    /** 8 */
    lg: '8',
    /** 16 */
    xl: '16',
  },
  borderWidth: {
    /** 0 */
    none: '0',
    /** 1 */
    xs: '1',
    /** 2 */
    sm: '2',
    /** 4 */
    md: '4',
    /** 8 */
    lg: '8',
  },
  opacity: {
    /** 10% */
    low: '10%',
    /** 50% */
    md: '50%',
    /** 90% */
    high: '90%',
  },
  fontFamilies: {
    /** Roboto */
    heading: 'Roboto',
    /** Roboto */
    body: 'Roboto',
    /** Roboto */
    roboto: 'Roboto',
    /** IBM Plex Sans */
    'ibm-plex-sans': 'IBM Plex Sans',
  },
  lineHeights: {
    /** 110% */
    "0": "110%",
    /** 100% */
    "1": "100%",
    /** 110% */
    heading: '110%',
    /** 140% */
    body: '140%',
  },
  letterSpacing: {
    /** 0% */
    '0': '0%',
    /** 2% */
    '1': '2%',
    /** -5% */
    '2': '-5%',
    /** 0 */
    default: '0',
    /** 150% */
    increased: '150%',
    /** -5% */
    decreased: '-5%',
  },
  fontWeights: {
    /** Light */
    headingLight: 'Light',
    /** Regular */
    headingRegular: 'Regular',
    /** Medium */
    headingMedium: 'Medium',
    /** Light */
    bodyLight: 'Light',
    /** Regular */
    bodyRegular: 'Regular',
    /** Medium */
    bodyMedium: 'Medium',
    /** Regular */
    'roboto-0': 'Regular',
    /** Medium */
    'roboto-1': 'Medium',
  },
  fontSizes: {
    /** 96 */
    H1: '96',
    /** 60 */
    H2: '60',
    /** 48 */
    H3: '48',
    /** 34 */
    H4: '34',
    /** 24 */
    H5: '24',
    /** 20 */
    H6: '20',
    /** 16 */
    subtitle1: '16',
    /** 14 */
    subtitle2: '14',
    /** 16 */
    body1: '16',
    /** 14 */
    body2: '14',
    /** 14 */
    button: '14',
    /** 12 */
    caption: '12',
    /** 12 */
    overline: '12',
  },
  elevation: {
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 3,
    "spread": 0
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 1,
    "spread": 0
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 2,
    "blur": 1,
    "spread": -1
  }
]``` 
*/
    '1': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 1, blur: 3, spread: 0 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 1, blur: 1, spread: 0 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 2, blur: 1, spread: -1 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 5,
    "spread": 0
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 2,
    "blur": 2,
    "spread": 0
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 3,
    "blur": 1,
    "spread": -2
  }
]``` 
*/
    '2': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 1, blur: 5, spread: 0 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 2, blur: 2, spread: 0 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 3, blur: 1, spread: -2 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 8,
    "spread": 0
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 3,
    "blur": 4,
    "spread": 0
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 3,
    "blur": 3,
    "spread": -2
  }
]``` 
*/
    '3': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 1, blur: 8, spread: 0 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 3, blur: 4, spread: 0 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 3, blur: 3, spread: -2 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 10,
    "spread": 0
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 4,
    "blur": 5,
    "spread": 0
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 2,
    "blur": 4,
    "spread": -1
  }
]``` 
*/
    '4': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 1, blur: 10, spread: 0 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 4, blur: 5, spread: 0 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 2, blur: 4, spread: -1 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 14,
    "spread": 0
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 5,
    "blur": 8,
    "spread": 0
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 3,
    "blur": 5,
    "spread": -1
  }
]``` 
*/
    '5': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 1, blur: 14, spread: 0 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 5, blur: 8, spread: 0 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 3, blur: 5, spread: -1 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 1,
    "blur": 18,
    "spread": 0
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 6,
    "blur": 10,
    "spread": 0
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 3,
    "blur": 5,
    "spread": -1
  }
]``` 
*/
    '6': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 1, blur: 18, spread: 0 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 6, blur: 10, spread: 0 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 3, blur: 5, spread: -1 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 2,
    "blur": 16,
    "spread": 1
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 7,
    "blur": 10,
    "spread": 1
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 4,
    "blur": 5,
    "spread": -2
  }
]``` 
*/
    '7': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 2, blur: 16, spread: 1 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 7, blur: 10, spread: 1 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 4, blur: 5, spread: -2 },
    ],
    /**
```[
  {
    "color": "#0000001f",
    "type": "dropShadow",
    "x": 0,
    "y": 3,
    "blur": 14,
    "spread": 2
  },
  {
    "color": "#00000024",
    "type": "dropShadow",
    "x": 0,
    "y": 8,
    "blur": 10,
    "spread": 1
  },
  {
    "color": "#00000033",
    "type": "dropShadow",
    "x": 0,
    "y": 5,
    "blur": 5,
    "spread": -3
  }
]``` 
*/
    '8': [
      { color: '#0000001f', type: 'dropShadow', x: 0, y: 3, blur: 14, spread: 2 },
      { color: '#00000024', type: 'dropShadow', x: 0, y: 8, blur: 10, spread: 1 },
      { color: '#00000033', type: 'dropShadow', x: 0, y: 5, blur: 5, spread: -3 },
    ],
    /**
```{
  "color": "#e0e0e0",
  "type": "dropShadow",
  "x": 0,
  "y": 0,
  "blur": 0,
  "spread": 1
}``` 
*/
    outlined: { color: '#e0e0e0', type: 'dropShadow', x: 0, y: 0, blur: 0, spread: 1 },
  },
  fontSize: {
    /** 12 */
    '0': '12',
    /** 14 */
    '1': '14',
    /** 16 */
    '2': '16',
    /** 20 */
    '3': '20',
    /** 24 */
    '4': '24',
    /** 34 */
    '5': '34',
    /** 48 */
    '6': '48',
    /** 60 */
    '7': '60',
    /** 96 */
    '8': '96',
  },
  MainTheme: {
    primary: {
      /** #f72c87 */
      main: '#f72c87',
      /** #ff6bb7 */
      light: '#ff6bb7',
      /** #bf005a */
      dark: '#bf005a',
      /** #ffffff */
      contrastText: '#ffffff',
    },
    grey: {
      /** #fafafa */
      '50': '#fafafa',
      /** #f5f5f5 */
      '100': '#f5f5f5',
      /** #eeeeee */
      '200': '#eeeeee',
      /** #e0e0e0 */
      '300': '#e0e0e0',
      /** #bdbdbd */
      '400': '#bdbdbd',
      /** #9e9e9e */
      '500': '#9e9e9e',
      /** #757575 */
      '600': '#757575',
      /** #616161 */
      '700': '#616161',
      /** #424242 */
      '800': '#424242',
      /** #212121 */
      '900': '#212121',
      /** #616161 */
      A700: '#616161',
      /** #bdbdbd */
      A400: '#bdbdbd',
      /** #eeeeee */
      A200: '#eeeeee',
      /** #f5f5f5 */
      A100: '#f5f5f5',
    },
    warning: {
      /** #ffa726 */
      main: '#ffa726',
      /** #ffb74d */
      light: '#ffb74d',
      /** #f57c00 */
      dark: '#f57c00',
      /** #000000de */
      contrastText: '#000000de',
    },
    error: {
      /** #f44336 */
      main: '#f44336',
      /** #e57373 */
      light: '#e57373',
      /** #d32f2f */
      dark: '#d32f2f',
      /** #ffffff */
      contrastText: '#ffffff',
    },
    text: {
      /** #aab4be */
      secondary: '#aab4be',
      /** #171717 */
      primary: '#171717',
      /** #ffffff80 */
      disabled: '#ffffff80',
    },
    success: {
      /** #4ac37b */
      light: '#4ac37b',
      /** #147d3e */
      dark: '#147d3e',
      /** #1db45a */
      main: '#1db45a',
      /** #000000de */
      contrastText: '#000000de',
    },
    info: {
      /** #29b6f6 */
      main: '#29b6f6',
      /** #4fc3f7 */
      light: '#4fc3f7',
      /** #0288d1 */
      dark: '#0288d1',
      /** #000000de */
      contrastText: '#000000de',
    },
    background: {
      /** #fafafa */
      default: '#fafafa',
    },
    action: {
      /** #ffffff29 */
      selected: '#ffffff29',
      /** #132f4c */
      divider: '#132f4c',
      /** #ffffff */
      white: '#ffffff',
      /** #000000 */
      black: '#000000',
      /** #ffffff14 */
      hover: '#ffffff14',
      /** #ffffff1f */
      focus: "#ffffff1f",
      /** #efefefde */
      disabledBackground: "#efefefde",
      /** #a8a8a8 */
      disabled: "#a8a8a8",
      /** #ffffff */
      active: '#ffffff',
    },
    secondary: {
      /** #afc6f7 */
      light: '#afc6f7',
      /** #81a5f2 */
      main: '#81a5f2',
    },
  },
  typography: {
    h1: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Medium */
      fontWeight: 'Medium',
      /** 110% */
      lineHeight: '110%',
      /** 96px */
      fontSize: '96px',
      /** -5% */
      letterSpacing: '-5%',
    },
    subtitle1: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: 'Regular',
      /** 110% */
      lineHeight: '110%',
      /** 16px */
      fontSize: '16px',
      /** 0% */
      letterSpacing: '0%',
    },
    subtitle2: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: 'Regular',
      /** 110% */
      lineHeight: '110%',
      /** 14px */
      fontSize: '14px',
      /** 0% */
      letterSpacing: '0%',
    },
    body1: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: 'Regular',
      /** 110% */
      lineHeight: '110%',
      /** 16px */
      fontSize: '16px',
      /** 0% */
      letterSpacing: '0%',
    },
    body2: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: 'Regular',
      /** 110% */
      lineHeight: '110%',
      /** 14px */
      fontSize: '14px',
      /** 0% */
      letterSpacing: '0%',
    },
    button: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: "Regular",
      /** 100% */
      lineHeight: "100%",
      /** 14 */
      fontSize: "14",
      /** 2% */
      letterSpacing: '2%',
    },
    caption: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: 'Regular',
      /** 110% */
      lineHeight: '110%',
      /** 12px */
      fontSize: '12px',
      /** 0% */
      letterSpacing: '0%',
    },
    overline: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Regular */
      fontWeight: 'Regular',
      /** 110% */
      lineHeight: '110%',
      /** 12px */
      fontSize: '12px',
      /** 0% */
      letterSpacing: '0%',
    },
    h2: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Medium */
      fontWeight: 'Medium',
      /** 110% */
      lineHeight: '110%',
      /** 60px */
      fontSize: '60px',
      /** -5% */
      letterSpacing: '-5%',
    },
    h3: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Medium */
      fontWeight: 'Medium',
      /** 110% */
      lineHeight: '110%',
      /** 48px */
      fontSize: '48px',
      /** -5% */
      letterSpacing: '-5%',
    },
    h4: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Medium */
      fontWeight: 'Medium',
      /** 110% */
      lineHeight: '110%',
      /** 34px */
      fontSize: '34px',
      /** -5% */
      letterSpacing: '-5%',
    },
    h5: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Medium */
      fontWeight: 'Medium',
      /** 110% */
      lineHeight: '110%',
      /** 24px */
      fontSize: '24px',
      /** -5% */
      letterSpacing: '-5%',
    },
    h6: {
      /** Roboto */
      fontFamily: 'Roboto',
      /** Medium */
      fontWeight: 'Medium',
      /** 110% */
      lineHeight: '110%',
      /** 20px */
      fontSize: '20px',
      /** -5% */
      letterSpacing: '-5%',
    },
  },
};
