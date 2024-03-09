import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* color primary */
  --color-primary-1: #01080E;
  --color-primary-2: #011221;
  --color-primary-3: #011627;
  /* color secondary */
  --color-grey-0: #1E2D3D;
  --color-grey-1: #607B96;
  --color-teal-1: #3C9D93;
  --color-purple-1 : #4D5BCE;
  --color-purple-2 : #5565E8;
  --color-remider : #fd6a6a;

  /* color accent */
  --color-accent-1: #C98BDF;
  --color-accent-2: #E99287;
  --color-accent-3: #43D9AD;
  --color-accent-4: #FEA55F;
  /* color lines */
  --color-lines : #1E2D3D;
  --color-white : #FFFFFF;
  --color-white-2 : #e5e9f0;

  /*color button */
  --color-button-red-1 : #F44336;
  --color-button-red-2 : #f44336b3;
  --color-button-d-1: #FEA55F;
  --color-button-d-2: #FFAC6B;
  --color-button-p-1: #1C2B3A;
  --color-button-p-2: #263B50;

  --break-point-mob: 768px;
  --break-point-tab: 1024px;
  --break-point-desk: 1440px;

  --sidebar-width : 30rem;
  --sidebar-width-mob : 20rem;
  --scroll-width: 2.6rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  font-weight: 400;
  background-color: var(--color-primary-1);
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Fira Code', monospace;
  color: var(--color-grey-1);
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
}
#root {
  height: 100%;
  position: relative;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: 1;
  font-weight: 400;

}
/* Scroll bar */

width
::-webkit-scrollbar {
  width: 10px;
  border-radius: 5px;
  border-left: 1px solid #1e2d3d;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  width: 10px;
  border-radius: 5px;
  background: #607b96;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7b9bbb;
}
.no-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

`;

export default GlobalStyles;
