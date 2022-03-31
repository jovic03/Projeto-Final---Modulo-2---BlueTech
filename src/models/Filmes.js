
import Sequelize from 'sequelize'
import { connection } from '../database/db.js'

export const Filmes = connection.define("filmes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    diretores: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, 
{
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
}
)

const initTable = async () => {
    await Filmes.sync()
}

initTable()