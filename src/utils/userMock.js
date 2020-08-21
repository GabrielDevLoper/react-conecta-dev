import mock from "./mock";

// mock.onPost("/api/home/login").reply(200, {
//   id: 1,
//   username: "gbarreto",
//   email: "gabriel.limabarreto@hotmail.com",
// });

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "gabriel.limabarreto@hotmail.com" || password !== "123") {
    return [400, { message: "Seu email ou senha estão incorretos" }];
  }

  const user = {
    id: 1,
    name: "Gabriel Barreto",
    username: "gbarreto98",
    email: "gabrie.limabarreto@hotmail.com",
  };

  return [200, { user }];
});
