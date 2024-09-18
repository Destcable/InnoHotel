import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

export const RoomTypeList = () => { 
    return(
        <List>
            <Datagrid>
                <TextField source="name"/>
            </Datagrid>
        </List>
    )
};