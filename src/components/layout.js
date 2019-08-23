import React from 'react'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizng: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        body,
        html {
          margin: 0;
          color: #555;
          font-family: -apple-system;
          font-size: 18px;
          line-height: 1.4;

          /* remove margin for the main div that gatsby renders into */
          > div {
            margin-top: 0;
          }
          :is(h1, h2, h3, h4, h5, h6) {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `}
    />
    <header />
    <main>{children}</main>
  </>
)

export default Layout
