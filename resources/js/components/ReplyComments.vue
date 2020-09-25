<template>
    <v-container>
        <v-layout column>
            <v-flex v-for="comment in getReplies" :key="comment.id">
                <comment :comment="comment" :ancestor="parent" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ReplyComment",
    props: { parent: {} },
    computed: {
        ...mapGetters(["allcomments"]),
        getReplies: function() {
            return this.allcomments.filter(
                com => com.parent_id == this.parent.id
            );
        }
    },
    methods: {
        ...mapActions(["fetchComments"])
    },
    mounted() {
        this.fetchComments();
    }
};
</script>

<style></style>
