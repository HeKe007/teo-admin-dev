// This file is generated by Teo generator for extending purpose.
// The file content will not be overwritten between generations. Be careful to 
// modify this file. Do not modify export names and siganatures. Modify values 
// with care.

import { styled } from '@linaria/react'
import { dark, light } from '../../lib/generated/theme'
import { appBackgroundColorDark, appBackgroundColorLight } from '../../lib/extended/theme'

const AppRoot = styled.div`
    :global() {
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        body {
            margin: 0;
            font-family: Noto Sans, sans-serif;
        }
        * {
            box-sizing: border-box;
        }
    }
    ${light} {
        :global() {
            body {
                background-color: ${appBackgroundColorLight};
            }
        }
    }
    ${dark} {
        :global() {
            body {
                background-color: ${appBackgroundColorDark};
            }
        }
    }
    min-height: 100vh;
    display: flex;
`

export default AppRoot