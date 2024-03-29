import { Sequelize } from 'sequelize-typescript';

import { Cat } from '../../modules/cats/cat.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                operatorsAliases: false,
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'test',
            });

            sequelize.addModels([Cat]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
