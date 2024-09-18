import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

const RoomTypeList = () => { 
    return(
        <List>
            <Datagrid>
                <TextField source="name"/>
            </Datagrid>
        </List>
    )
};

export default RoomTypeList;