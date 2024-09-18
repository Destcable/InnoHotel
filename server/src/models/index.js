import { createRoomStatus } from "./RoomStatus/Mutation.js"
import { _allRoomStatusMeta, allRoomStatus } from "./RoomStatus/Query.js"
import { createRoomType } from "./RoomType/Mutation.js"
import { _allRoomTypesMeta, allRoomTypes } from "./RoomType/Query.js"

export const Query = {
    allRoomTypes,
    _allRoomTypesMeta,
    allRoomStatus,
    _allRoomStatusMeta
}

export const Mutation = {
    createRoomType,
    createRoomStatus,
}