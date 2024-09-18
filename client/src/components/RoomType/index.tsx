import { lazy } from "react"
// import { RoomTypeList } from "./RoomTypeList"

const RoomTypeList = lazy(() => import("./RoomTypeList"))

export const RoomTypeResource = {
    name: "RoomType", 
    list: <RoomTypeList />
}