export async function createRoomStatus(_, args, context) {
    const { name, description } = args;
    return await context.prisma.roomStatus.create({ data: { name, description } })
}