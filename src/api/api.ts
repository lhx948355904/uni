import { getAction,postAction } from "@/api/manage.ts"

const login = (params:object) => postAction("/login",params)
const menuList = (params:object) => getAction("/menulist",params)

export {
    login,
    menuList
}