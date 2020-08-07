import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: "",
		userData: {},
	},
	mutations: {},
	actions: {
		async LOGIN({ commit, state }, data) {
			try {
				let res = (
					await axios.post("/api/auth/user/login", {
						userID: data.userID,
						password: data.userID,
					})
				).data;
				state.token = res.data;
				let user = (
					await axios.get("/api/auth/user/my", {
						headers: {
							Authorization: state.token,
						},
					})
				).data.data;
				state.userData = user;
				return user;
			} catch (err) {}
		},
		async REGISTER({ commit, state }, data) {
			try {
				let res = (
					await axios.post("/api/auth/user", {
						userID: data.userID,
						password: data.userID,
					})
				).data;
				return res.result;
			} catch (err) {}
		},
	},
	modules: {},
});
