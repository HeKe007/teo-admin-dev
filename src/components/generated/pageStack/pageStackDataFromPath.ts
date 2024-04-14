import { fromQuery } from 'query-string-parser'
import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"
import { PageStackItemKey } from '../../extended/pageStack/PageStackItemKeys'

const pageStackDataFromPath: (path: string) => PageStackData = (path: string) => {
    const stack: PageStackItem[] = []
    const components = path.split("/")
    for (let component of components) {
        if (component.length === 0) {
            continue
        }
        const parts = component.split("-")
        const variant = parts[1]
        const key = variant ? `${parts[0]}.Variant` : parts[0]
        const query = parts[2] ? fromQuery(parts.slice(2).join("-")) : undefined
        stack.push({
            key: key as PageStackItemKey,
            variant,
            query
        })
    }
    return stack
}

export default pageStackDataFromPath