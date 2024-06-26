// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import SelectElement from "../select/SelectElement"
import { spacing } from "../../../lib/extended/theme"

const CombinedFormControlGroup = styled.div`
    ${flexContainer("row", "center", "center")}
    & > *:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    & > *:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .react-datepicker-wrapper {
        flex-grow: 1;
    }
    .react-datepicker-wrapper:not(:last-child) {
        .react-datepicker__input-container {
            input {
                z-index: 4;
                padding-right: ${spacing};
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }
    .react-datepicker-wrapper:not(:first-child) {
        .react-datepicker__input-container {
            input {
                z-index: 4;
                padding-left: ${spacing};
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }
    input {
        z-index: 4;
    }
    input:not(:first-child) {
        padding-left: ${spacing};
    }
    input:not(:last-child) {
        padding-right: ${spacing};
    }
    ${SelectElement} {
        width: 40%;
    }
`

export default CombinedFormControlGroup