import { createRoomType } from "./RoomType/Mutation.js"
import { _allRoomTypesMeta, allRoomTypes } from "./RoomType/Query.js"

export const Query = {
    allRoomTypes,
    _allRoomTypesMeta
}

export const Mutation = {
    createRoomType
}