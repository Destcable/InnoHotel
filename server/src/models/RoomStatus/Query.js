export async function allRoomStatuses(_, args, context) {
    return await context.prisma.roomStatus.findMany();
};

export async function _allRoomStatusesMeta(_, args, context) {
    return { count: await context.prisma.roomStatus.count() }
}