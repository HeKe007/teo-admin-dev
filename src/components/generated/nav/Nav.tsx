// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavElement from '../../extended/nav/NavElement'
import NavCollapseButton from '../../extended/nav/NavCollapseButton'
import { useNavCollapsed } from '../../../lib/generated/hooks/preferences'
import NavLogo from '../../extended/nav/NavLogo'
import WithTooltip from '../tooltip/WithTooltip'
import Tooltip from '../../extended/tooltip/Tooltip'
import WithContextMenu from '../menu/WithContextMenu'
import Menu from '../menu/Menu'
import ContextMenuItem from '../menu/MenuItem'
import { useTranslation } from 'react-i18next'
import { useAccount } from '../../../lib/generated/signIn'
import NavItems from './NavItems'

const Nav = () => {
    const account = useAccount()
    console.log("See account from nav", account)
    const [navCollapsed, setNavCollapsed] = useNavCollapsed()
    const { t } = useTranslation("translations")
    return <WithContextMenu contextMenu={
        <Menu>
            <ContextMenuItem disabled={true} label="Menu A" />
            <ContextMenuItem label="Menu B" action={() => console.log("action B")} />
            <ContextMenuItem label="Download">
                <Menu>
                    <ContextMenuItem label="JSON" />
                    <ContextMenuItem label="CSV" />
                </Menu>
            </ContextMenuItem>
        </Menu>
    }>
        <NavElement collapsed={navCollapsed}>
            <WithTooltip tooltip={<Tooltip>{navCollapsed ? t("nav.expandButton.tooltip") : t("nav.collapseButton.tooltip")}</Tooltip>}>
                <NavCollapseButton collapsed={navCollapsed} onClick={() => setNavCollapsed(!navCollapsed)} />
            </WithTooltip>
            <NavLogo />
            <NavItems />
        </NavElement>
    </WithContextMenu>
}

export default Nav