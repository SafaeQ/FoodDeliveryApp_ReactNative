import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:9988',
    headers: {
        'Authorization': "JWT_TOKEN",
        'Content-Type': 'application/json'
      }
});