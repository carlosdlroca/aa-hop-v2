import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  } 

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    @media screen and(max-width: 40em) {
      font-size: 56.25%;
    }
  }

  html, body, #__next{
    min-height: 100%;
    height: 100%;
    background-color: var(--bg-color);
    color: var(--color-black);
  }

  :root {

    --bg-color: #1F2937;

    // Colors
    --color-red: #DC2626;
    --color-red-light: #FEE2E2;

    --color-blue: #3B82F6;
    --color-blue-light: #DBEAFE;

    --color-green: #10B981;
    --color-green-light: #DCFCE7;

    --color-orange: #F97316;
    --color-orange-light: #FFEDD5;

    --color-purple: #7C3AED;
    --color-purple-light: #EDE9FE;

    --color-gray-dark: #475569;
    --color-gray-medium: #64748B;
    --color-gray-light: #F3F4F6;

    --color-white: #FAFAF9;
    --color-black: #0F172A;

    // Font Sizes
    --text-small: 1rem;
    --text-medium: 1.6rem;
    --text-large: 2.4rem;
    --text-xl: 3.2rem;
    --text-2xl: 4.8rem;
    --text-3xl: 5.6rem;
    --text-4xl: 7.2rem;
    --text-5xl: 9.6rem;


    // MISC
    --border-radius: .8rem;
  }

  button {
    // CSS RESET from https://gist.github.com/MoOx/9137295
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;

    &:hover {
      cursor: pointer;
    }
  }

`;
