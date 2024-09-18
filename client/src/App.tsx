import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "./core/config/dataProvider.config";
import { RoomTypeResource } from "./components/RoomType";
import { RoomStatusResource } from "./components/RoomStatus";


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="comments" list={ListGuesser} />
        <Resource {...RoomTypeResource} />
        <Resource {...RoomStatusResource} />
    </Admin>
);

export default App;