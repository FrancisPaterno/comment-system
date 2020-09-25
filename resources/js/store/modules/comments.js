import axios from "axios";

const state = {
    comments: [],
    redialog: false,
    selecttedComment: {},
    errors: []
};
const getters = {
    allcomments: state => state.comments,
    getDialog: state => state.redialog,
    getComment: state => state.selecttedComment,
    getCommentsByParent: (state, parent_id) => {
        state.comments.filter(comment => comment.parent_id == parent_id);
    },
    getErrors: state => state.errors
};
const actions = {
    async fetchComments({ commit }) {
        const response = await axios.get("comments");
        commit("setComments", response.data);
    },
    async addComment({ commit }, comment) {
        const response = await axios.post("comments", comment);
        commit("setComments", response.data);
    }
};
const mutations = {
    setComments: (state, comments) => (state.comments = comments),
    showDialog: state => (state.redialog = true),
    hideDialog: state => (state.redialog = false),
    setComment: (state, comment) => (state.selecttedComment = comment),
    setErrors: (state, errors) => {
        state.errors = [];
        state.errors.push(errors);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
