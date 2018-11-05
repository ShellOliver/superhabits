import {EntitySchema} from "typeorm";

export default new EntitySchema({
    name: "Habit",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
});