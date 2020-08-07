import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: "",
		userData: {},
		mainPath: "https://cotex.andy0414.com/api",
	},
	mutations: {},
	actions: {
		async LOGIN({ commit, state }, data) {
			try {
				let res = (
					await axios.post(state.mainPath + "/auth/user/login", {
						userID: data.userID,
						password: data.userID,
					})
				).data;
				state.token = res.data;
				let user = (
					await axios.get(state.mainPath + "/auth/user/my", {
						headers: {
							Authorization: state.token,
						},
					})
				).data.data;
				state.userData = user;
				console.log(state.token, state.userData);
				return user;
			} catch (err) {}
		},
		async REGISTER({ commit, state }, data) {
			try {
				let res = (
					await axios.post(state.mainPath + "/auth/user", {
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
