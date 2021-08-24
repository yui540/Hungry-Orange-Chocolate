import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-black: #333;
    --color-cream: #ffebe3;
    --color-choco: #784859;
    --color-milk-choco: #922b3a;
    --color-cookie: #d8aa93;
    --color-orange: #f4ad60;
    --color-light-orange: #ffe2b3;
    --color-leaf: #95a535;
    --color-peach: #f24c88;
  }

  body {
    margin: 0;
    font-family: tbchibirgothicplusk-pro, 'Helvetica Neue', arial, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-kerning: normal;
    font-kerning: normal;
    color: var(--color-black);
    background: var(--color-cream);
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  img {
    display: block;
  }

  input,
  button,
  textarea {
    appearance: none;
    outline: none;
    resize: none;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 0;
    background: none;
    user-select: none;
    cursor: pointer;
  }

  /* 汎用のキーフレーム */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes slideIn {
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }
  @keyframes drawLine {
    from {
      opacity: 0;
    }
    10%,
    to {
      opacity: 1;
    }

    from {
      stroke-dasharray: 0 var(--stroke-length);
    }
    to {
      stroke-dasharray: var(--stroke-length) var(--stroke-length);
    }
  }
`
