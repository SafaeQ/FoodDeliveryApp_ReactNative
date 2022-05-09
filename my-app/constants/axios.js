import axios from "axios";

export default axios.create({
    baseURL: 'http://127.0.0.1:9988',
    headers: {
        'Authorization': "JWT_TOKEN",
        'Content-Type': 'application/json'
      }
});