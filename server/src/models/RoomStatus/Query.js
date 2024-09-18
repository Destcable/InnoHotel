export async function allRoomStatus(_, args, context) {
    return await context.prisma.roomStatus.findMany();
};

export async function _allRoomStatusMeta(_, args, context) {
    return { count: await context.prisma.roomStatus.count() }
}