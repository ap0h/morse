const axios = require('axios').default;
const api = axios.create({ baseURL: 'http://omega-morse-service.eu-central-1.elasticbeanstalk.com' });

let token = '';
/**
 * 
 * @returns {Promise<{value: string}>}
 */
const auth = async () => {
    try {
        const { data } = await api.post('/api/v1/auth', {
            username: "omega",
            password: "candidate"
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        token = data;
        return token;
    } catch (error) {
        console.log(error)
        return null;
    }
}

/**
 * 
 * @param {{
 *         firstName: string;
 *         lastName: string,
 *         email: string,
 *         result: string,
 *         githubUrl: string
 *      }}data 
 * @returns {Promise<{message: string}>}
 */
const sendResult = async (data) => {
    try {
        const { data: message } = await api.post('/api/v1/result',
            data, {
            headers: {
                Authorization: `Bearer ${(await getToken()).value}`,
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        });
        return message
    } catch (error) {
        console.error(error);
    }
    return null;
}

/**
 * @returns {Promise<{value: string}>}
 */
const getToken = async () => {
    if (!token) {
        token = await auth()
    }
    return token;
}

module.exports = {
    sendResult,
    getToken
}