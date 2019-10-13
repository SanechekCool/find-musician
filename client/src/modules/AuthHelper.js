import axios from 'axios';
const domain = "http://localhost:5000";


export default class Auth {
    static async login(email, password){
        try{
            const data = await axios.post(domain + "/api/login", { 
                "email": email,
                "password": password
            });
            return data.data.token;
        } catch(err) {
            return err;
        }
    }

    static async register(email, username, password, photoUrl){
        try {
            const data = await axios.post(domain + "/api/register", { 
                "email": email,
                "password": password,
                "username": username,
                "photoUrl": photoUrl
            });
            return data.data.token;
        } catch(err){
            return err;
        }
    }
}