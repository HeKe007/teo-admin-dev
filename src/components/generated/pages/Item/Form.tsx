// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, TeoError, Item, ItemCreateInput, ItemUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import FormPaddedMainContent from '../../form/FormPaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'
import renderFormEntry from '../../form/renderFormEntry'
import useRerender from '../../../../lib/generated/useRerender'
import { useModelItemFormPreferences } from '../../../../lib/generated/preferences'
import CenteredButtonGroup from '../../form/CenteredButtonGroup'
import decodeFormErrors from '../../../../lib/generated/formErrors/decodeFormErrors'
import { useAccount } from '../../../../lib/generated/signIn'

const ItemForm = ({ item }: PageProps) => {
    const _ = useAccount()
    const { popStack } = usePageStackPage()
    const rerender = useRerender()
    const { refresh } = useRefreshToken("models.item")
    const { t } = useTranslation("translations")
    const [formPreferences, setFormPreferences] = useModelItemFormPreferences()
    const data: Partial<Item & ItemCreateInput & ItemUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.item.findUnique({
                where: item.query as any
            })).data
        }
    }, [item])
    const form = useForm({ defaultValues: Object.assign({}, omit(data, ["id"])) })
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            if (isEqual(item.query, {}) || !item.query) {
                const _ = await teo.item.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.item.update({
                    "where": item.query as any,
                    "update": data
                })
                setLoading(false)
                refresh()
                popStack()
            }
        } catch(e) {
            if (e instanceof TeoError) {
                if (e.errors) {
                    Object.entries(decodeFormErrors(e.errors)).forEach(([k ,v]) => {
                        form.setError(k as any, v as any)
                    })
                } else {
                    if (isEqual(item.query, {}) || !item.query) {
                        alert(`${t("form.cannotCreateNewRecord")}${e.message}`)
                    } else {
                        alert(`${t("form.cannotUpdateThisRecord")}${e.message}`)
                    }
                }
            } else {
                alert(t("form.unknownErrorOccurred"))
            }
            setLoading(false)
        }
    }
    const onDelete = async () => {
        setLoading(true)
        try {
            const _ = await teo.item.delete({
                "where": item.query as any
            })
            setLoading(false)
            refresh()
            popStack()
        } catch {
            alert("Cannot delete.")
            setLoading(false)
        }
    }
    return <FormContainer onSubmit={form.handleSubmit(onSubmit)}>
        <FormPaddedMainContent>
            {renderFormEntry(formPreferences, setFormPreferences, t('model.item.name.name'), "name", { type: "String", optional: false }, form, loading, t, rerender)}
            <CenteredButtonGroup>
                <Button disabled={loading} type='submit'>{t("form.submit")}</Button>
                {!(isEqual(item.query, {}) || !item.query) ? <Button disabled={loading} type="button" onClick={onDelete}>{t("form.delete")}</Button> : null}
            </CenteredButtonGroup>
        </FormPaddedMainContent>
    </FormContainer>
}

export default ItemForm