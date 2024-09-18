import { Create, required, SimpleForm, TextInput } from "react-admin";

const RoomTypeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    )
};

export default RoomTypeCreate;