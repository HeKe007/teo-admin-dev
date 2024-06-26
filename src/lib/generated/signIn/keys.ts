// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { AccountModel } from "."

export type Field = {
    key: string
    name: string
    desc: string
}

export const idFieldsForModel: (model: AccountModel) => Field[] = (model: AccountModel) => {
    if (model === "Admin") {
        return [
            {
                key: "email",
                name: "model.admin.email.name",
                desc: "model.admin.email.desc",
            },
            {
                key: "phoneNo",
                name: "model.admin.phoneNo.name",
                desc: "model.admin.phoneNo.desc",
            },
        ]
    }
    if (model === "Root") {
        return [
            {
                key: "email",
                name: "model.root.email.name",
                desc: "model.root.email.desc",
            },
        ]
    }
    return []
}

export const checkerFieldsForModel: (model: AccountModel) => Field[] = (model: AccountModel) => {
    if (model === "Admin") {
        return [
            {
                key: "password",
                name: "model.admin.password.name",
                desc: "model.admin.password.desc",
            },
        ]
    }
    if (model === "Root") {
        return [
            {
                key: "password",
                name: "model.root.password.name",
                desc: "model.root.password.desc",
            },
        ]
    }
    return []
}

export const companionFieldsForModel: (model: AccountModel) => Field[] = (model: AccountModel) => {
    if (model === "Admin") {
        return [
        ]
    }
    if (model === "Root") {
        return [
        ]
    }
    return []
}