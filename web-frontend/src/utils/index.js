import ls from 'local-storage'
const TOKEN_KEY = 'access_token';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (ls.get('token')) {
        return true;
    }
    return false;
}