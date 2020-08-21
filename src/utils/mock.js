import MockAdapter from "axios-mock-adapter";
import api from "../services/api";

const instance = new MockAdapter(api, { delayResponse: 100 });

export default instance;
