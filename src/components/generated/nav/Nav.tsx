// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavElement from '../../extended/nav/NavElement'
import NavCollapseButton from '../../extended/nav/NavCollapseButton'
import { useNavCollapsed } from '../../../lib/generated/preferences'
import NavLogo from '../../extended/nav/NavLogo'
import WithTooltip from '../tooltip/WithTooltip'
import Tooltip from '../../extended/tooltip/Tooltip'
import WithContextMenu from '../menu/WithContextMenu'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'
import { useTranslation } from 'react-i18next'
import { useAccount } from '../../../lib/generated/signIn'
import NavItems from './NavItems'
import { NavCollapseButtonInnerContainerElement, NavCollapseButtonOuterContainerElement } from './NavCollapseButtonContainerElement'

const Nav = () => {
    const _ = useAccount()
    const [navCollapsed, setNavCollapsed] = useNavCollapsed()
    const { t } = useTranslation("translations")
    return <WithContextMenu contextMenu={
        <Menu>
            <MenuItem disabled={true} label="Menu A" />
            <MenuItem label="Menu B" action={() => {}} />
            <MenuItem label="Submenu">
                <Menu>
                    <MenuItem label="Menu 1" />
                    <MenuItem label="Menu 2" />
                </Menu>
            </MenuItem>
        </Menu>
    }>
        <NavElement collapsed={navCollapsed}>
            <NavCollapseButtonOuterContainerElement>
                <NavCollapseButtonInnerContainerElement collapsed={navCollapsed}>
                    <WithTooltip tooltip={<Tooltip>{navCollapsed ? t("nav.expandButton.tooltip") : t("nav.collapseButton.tooltip")}</Tooltip>}>
                        <NavCollapseButton collapsed={navCollapsed} onClick={() => setNavCollapsed(!navCollapsed)} />
                    </WithTooltip>
                </NavCollapseButtonInnerContainerElement>
            </NavCollapseButtonOuterContainerElement>
            <NavLogo collapsed={navCollapsed} />
            <NavItems collapsed={navCollapsed} />
        </NavElement>
    </WithContextMenu>
}

export default Nav