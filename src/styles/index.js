import { createGlobalStyle } from 'styled-components';
import { colors } from './variable';

const size = {
  mobile: '576',
  tablet: '768',
  laptop: '1200px',
  desktop: '2560px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
        padding: 0;
        margin: 0;
    }

    body {
        margin: 0;
        padding: 0;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    ul, p {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    a {
        color: ${colors.link};
        text-decoration: none;
    }
`;
