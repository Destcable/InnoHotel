export async function createRoomType(_, args, context) {
    const { name, description } = args;
    return await context.prisma.roomType.create({ data: { name, description } })
}