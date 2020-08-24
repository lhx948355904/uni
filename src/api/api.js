import { getAction,postAction } from "@/api/manage"

const login = (params) => postAction("/login",params)
const menuList = (params) => getAction("/menulist",params)

export {
    login,
    menuList
}