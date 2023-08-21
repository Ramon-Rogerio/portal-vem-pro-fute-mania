import { Api } from "../axios-config";

const getAll = async (page = 1, limit = 1, nameOrId = '', ) => {
    try {
        const url = `/users?page=${page}&limit=${limit}&nameOrId=${nameOrId}`;
        const { data } = await Api.get(url);

        if (data) {
            return data;
        }

        return new Error('Erro ao listar os registros.');
    } catch (error) {
        return new Error(error.message || 'Erro ao listar os registros.');
    }
};

const getById = async () => {};

const create = async () => {};

const updateById = async () => {};

const deleteById = async () => {};


export const UsersService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}