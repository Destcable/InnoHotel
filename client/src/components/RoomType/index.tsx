import { lazy } from "react"
// import { RoomTypeList } from "./RoomTypeList"

const RoomTypeList = lazy(() => import("./RoomTypeList"))
const RoomTypeCreate = lazy(() => import("./RoomTypeCreate"))


export const RoomTypeResource = {
    name: "RoomType", 
    list: <RoomTypeList />,
    create: <RoomTypeCreate />
}