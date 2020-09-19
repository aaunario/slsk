import types from './types';
const login = () => ({ 
    type: types.LOGIN, 
    payload: { username: 'blah' } 
})
export default login;

