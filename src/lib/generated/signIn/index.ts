// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { suspend } from 'suspend-react'
import { teo, std, Admin, Root } from '../teo'

export type AccountModel = "Admin" | "Root"

export const accountModels: AccountModel[] = ["Admin", "Root"]

export const accountModelNames: { [key in AccountModel]: string } = {
    "Admin": "model.admin.name",
    "Root": "model.root.name",
}

type Account = {
    "Admin": std.DataMeta<Admin, std.identity.TokenInfo>
} | {
    "Root": std.DataMeta<Root, std.identity.TokenInfo>
}

let account: Account | null = loadAccountFromLocalStorage()

function loadAccountFromLocalStorage(): Account | null {
    const storageItem = localStorage.getItem("__teo_account__")
    if (!storageItem) {
        return null
    } else {
        return JSON.parse(storageItem)
    }
}

function saveAccountIntoLocalStorage(account: Account | null) {
    if (!account) {
        localStorage.removeItem("__teo_account__")
    } else {
        localStorage.setItem("__teo_account__", JSON.stringify(account))
    }
}

function getAccount() {
    return account
}

loadAccountFromLocalStorage()

let savedResolves: ((value: Account | PromiseLike<Account>) => void)[] = []

const fetchAccount: () => Promise<Account> = () => {
    return new Promise((resolve) => {
        if (account) {
            resolve(account)
        } else {
            savedResolves.push(resolve)
        }
    })
}

const flushAccountSetters = () => {
    accountSetters.forEach((setter) => {
        setter(account)
    })
}

const flushAccountResolves = () => {
    if (account) {
        savedResolves.forEach((resolve) => {
            resolve(account!)
        })
        savedResolves = []
    }
}

const accountSetters: Dispatch<SetStateAction<Account | null>>[] = []

export const useAccount: () => Account = () => {
    const [currentAccount, setCurrentAccount] = useState(getAccount())
    useEffect(() => {
        accountSetters.push(setCurrentAccount)
        return () => {
            accountSetters.splice(accountSetters.indexOf(setCurrentAccount), 1)
        }
    }, [])
    return suspend(fetchAccount, [currentAccount], { equal: (a, b) => {
        if (a === null && b === null) {
            return false
        } else {
            return a === b
        }
    }})
}

export const useAccountAvailable: () => boolean = () => {
    const [currentAccount, setCurrentAccount] = useState(getAccount())
    useEffect(() => {
        accountSetters.push(setCurrentAccount)
        return () => {
            accountSetters.splice(accountSetters.indexOf(setCurrentAccount), 1)
        }
    }, [])
    return !!currentAccount
}

export const signOut = () => {
    account = null
    saveAccountIntoLocalStorage(null)
    flushAccountSetters()
    flushAccountResolves()
}

export const signIn = async (model: AccountModel, data: any) => {
    if (model === "Admin") {
        const signInResult = await teo.admin.signIn({
            "credentials": data
        })
        const accountLocalVariable = { "Admin": signInResult }
        if (accountLocalVariable !== null) {
            account = accountLocalVariable as any
            saveAccountIntoLocalStorage(account)
            flushAccountSetters()
            flushAccountResolves()
            return
        }
    }
    if (model === "Root") {
        const signInResult = await teo.root.signIn({
            "credentials": data
        })
        const accountLocalVariable = { "Root": signInResult }
        if (accountLocalVariable !== null) {
            account = accountLocalVariable as any
            saveAccountIntoLocalStorage(account)
            flushAccountSetters()
            flushAccountResolves()
            return
        }
    }
    throw new Error("invalid sign in model")
}