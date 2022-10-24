import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userData: {},
    mainPath: "https://cotex-api.hyunwoo.dev",
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
    async MY_PAGE({ commit, state }, data) {
      try {
        let res = (
          await axios.post(
            state.mainPath + "/page/my-page",
            {},
            {
              headers: {
                Authorization: state.token,
              },
            }
          )
        ).data;
        return res;
      } catch (err) {}
    },
    async CREATE_PAGE({ commit, state }, data) {
      let res = (
        await axios.post(
          state.mainPath + "/page",
          { content: data.content },
          {
            headers: {
              Authorization: state.token,
            },
          }
        )
      ).data;
      return res;
    },
    async DELETE_PAGE({ commit, state }, data) {
      let res = (
        await axios.delete(state.mainPath + "/page/" + data.pageId + "/invite", {
          headers: {
            Authorization: state.token,
          },
        })
      ).data;
      return res;
    },
    async INVITE({ commit, state }, data) {
      try {
        let res = (
          await axios.post(
            state.mainPath + "/page/" + data.pageId + "/invite",
            { userID: data.userID },
            {
              headers: {
                Authorization: state.token,
              },
            }
          )
        ).data;
        return res;
      } catch (err) {}
    },
    async KICK({ commit, state }, data) {
      try {
        let res = (
          await axios.post(
            state.mainPath + "/page/" + data.pageId + "/kick",
            { userID: data.userID },
            {
              headers: {
                Authorization: state.token,
              },
            }
          )
        ).data;
        return res;
      } catch (err) {}
    },
  },
  modules: {},
});
