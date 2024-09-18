import React, { lazy } from "react"

const RoomTypeList = lazy(() => import("./RoomTypeList"))

export const RoomTypeResource = {
    name: "RoomType", 
    list: <RoomTypeList />
}