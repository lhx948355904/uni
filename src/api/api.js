import { getAction,postAction } from "@/api/manage"

const login = (params) => postAction("/login",params)

export {
    login
}