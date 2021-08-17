import axios from 'axios'




export const login = async (username: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password
    })
    return response.data.token;
}
