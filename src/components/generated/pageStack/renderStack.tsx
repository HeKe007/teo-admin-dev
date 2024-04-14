import React from 'react'
import renderStackItem from "../../extended/pageStack/renderStackItem"
import { PageStackData } from "./PageStackData"
import PageStackItemContainerElement from './PageStackItemContainerElement'

export default function renderStack(data: PageStackData) {
    return data.map((item) => <PageStackItemContainerElement>
        {renderStackItem(item)}
    </PageStackItemContainerElement>)
}