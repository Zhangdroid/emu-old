import { injectGlobal } from "styled-components";

// tslint:disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;
