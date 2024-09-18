import { Create, required, SimpleForm, TextInput } from "react-admin";

const RoomStatusCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    )
};

export default RoomStatusCreate;