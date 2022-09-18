import { ObjectSchema } from 'realm';

class PassInput {
    public id = '';

    public input = '';

    public static schema: ObjectSchema = {
        name: 'PassInput',
        primaryKey: 'id',
        properties: {
            id: 'string',
            input: 'string',
        },
    };
}

export type PassInputType = PassInput;

export default PassInput;
