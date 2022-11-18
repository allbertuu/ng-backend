/**
 * Valida se o nome de usuário possui pelo menos 3 caracteres.
 * @param username Nome de usuário
 */
export const isUsernameValid = (username: string) => {
    const usernameFormatted = username.trim();
    if (usernameFormatted.length < 3) return false;
    return true;
};
/**
 * Valida se a senha de usuário é composta por pelo menos 8 caracteres, um número, uma letra maiúscula e uma letra minúscula.
 * @param password Senha de usuário
 */
export const isPasswordValid = (password: string) => {
    const passwordFormatted = password.trim().replaceAll(' ', '');
    const regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;

    if (passwordFormatted.search(regex) === -1) return false;
    return true;
};
