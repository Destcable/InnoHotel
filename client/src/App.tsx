import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "./core/config/dataProvider.config";
import { RoomTypeResource } from "./components/RoomType";


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="comments" list={ListGuesser} />
        <Resource {...RoomTypeResource} />
    </Admin>
);

export default App;