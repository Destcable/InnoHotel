export async function allRoomTypes(_, args, context) {
    return await context.prisma.roomType.findMany();
};

export async function _allRoomTypesMeta(_, args, context) {
    return { count: await context.prisma.roomType.count() }
}