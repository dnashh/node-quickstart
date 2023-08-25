import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import { nanoid } from "nanoid";
import { sequelize } from "../config/databaseConfig.js";


const User = sequelize.define("User", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: nanoid(),
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            // eslint-disable-next-line no-useless-escape
            is: "^\+\d{1,4}\d{10}$",
        },
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        set(plainText: string) {
            this.setDataValue("password", bcrypt.hashSync(plainText, 12));
        },

    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
    },
    last_sign_in: {
        type: DataTypes.DATE,
    },
}, {
    defaultScope: {
        attributes: { exclude: ["password"] }
    },
    hooks: {
        afterCreate: (record) => {
            delete record.dataValues.password;
        },
        afterUpdate: (record) => {
            delete record.dataValues.password;
        }
    }
});

User.sync({ alter: true });

export default User;