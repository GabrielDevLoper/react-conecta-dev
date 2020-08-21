import api from "../services/api";

class authServices {
  signIn(email, password) {
    return new Promise((resolve, reject) => {
      api
        .post("/api/home/login", { email, password })
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new authServices();
