import users from "../../../../_mocks_/user";
import { Api } from "../axios-config";

const getAll = async (page = 1, limit = 1, nameOrId = "") => {
  try {
    return users;


    // Após configurar a API descomentar esse trecho e apagar o trecho acima
    // const url = `/users?page=${page}&limit=${limit}&nameOrId=${nameOrId}`;
    // const { data } = await Api.get(url);

    // if (data) {
    //   return data;
    // }

    // return new Error("Erro ao listar os registros.");
  } catch (error) {
    return new Error(error.message || "Erro ao listar os registros.");
  }
};

const getById = async () => {};

const create = async (user) => {
  try {
    const url = `/users`;
    const { data } = await Api.post(url, user);

    if (data) {
      return data;
    }

    return new Error("Erro ao criar usuário.");
  } catch (error) {
    return new Error(error.message || "Erro ao criar usuário.");
  }
};

const updateById = async () => {};

const deleteById = async () => {};

export const UsersService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
