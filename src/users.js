import axios from "axios";

class Users {
  static getUsers() {
    return axios.get("/users.json").then((response) => response.data);
  }
}

export default Users;
