import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = process.cwd();

export const schemaFilePaths = [
    path.join(rootDir, 'customTypes.graphql'),
    path.join(rootDir, 'src/models/Room/schema.graphql'),
    path.join(rootDir, 'src/models/RoomType/schema.graphql'),
    path.join(rootDir, 'src/models/RoomStatus/schema.graphql'),
];
