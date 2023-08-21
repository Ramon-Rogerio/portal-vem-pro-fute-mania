export const erroInterceptor = (error) => {
    if (error.message === 'Network Error') {
        return Promise.reject(new Error('Error de conexão com a internet'));
    }

    if (error.code === 401) {
        return Promise.reject(new Error('Erro de autenticação'));
    }

    return Promise.reject(error);
}