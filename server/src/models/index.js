import { createRoomStatus } from "./RoomStatus/Mutation.js"
import { _allRoomStatusesMeta, allRoomStatuses } from "./RoomStatus/Query.js"
import { createRoomType } from "./RoomType/Mutation.js"
import { _allRoomTypesMeta, allRoomTypes } from "./RoomType/Query.js"

export const Query = {
    allRoomTypes,
    _allRoomTypesMeta,
    allRoomStatuses,
    _allRoomStatusesMeta
}

export const Mutation = {
    createRoomType,
    createRoomStatus,
}