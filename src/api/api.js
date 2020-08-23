import { getAction,postAction } from "@/api/manage"

const login = (params) => postAction("/login",params)
const menuList = (params) => getAction("/menlist",params)

export {
    login,
    menuList
}