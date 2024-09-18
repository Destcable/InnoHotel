import { lazy } from "react"
// import { RoomTypeList } from "./RoomTypeList"

const RoomStatusList = lazy(() => import("./RoomStatusList"))
const RoomStatusCreate = lazy(() => import("./RoomStatusCreate"))


export const RoomStatusResource = {
    name: "RoomStatus", 
    list: <RoomStatusList />,
    create: <RoomStatusCreate />
}