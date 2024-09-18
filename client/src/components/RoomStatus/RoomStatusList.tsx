import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

const RoomStatusList = () => { 
    return(
        <List>
            <Datagrid>
                <TextField source="name"/>
            </Datagrid>
        </List>
    )
};

export default RoomStatusList;