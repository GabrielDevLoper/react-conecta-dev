import mock from "./mock";

mock.onPost("/api/home/login").reply(200, {
  id: 1,
  username: "gbarreto",
  email: "gabriel.limabarreto@hotmail.com",
});
