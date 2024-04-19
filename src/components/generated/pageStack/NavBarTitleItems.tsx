import React, { ReactNode, useContext } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"

type NavBarTitleItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarTitleItems = ({ children }: NavBarTitleItemsProps) => {
    const context = useContext(NavBarRenderStateContext)
    context.title = true
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarTitleItems