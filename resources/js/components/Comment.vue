<template>
    <div class="ma-0">
        <v-card class="mx-auto my-1" max-width="100%" width="100%" outlined>
            <v-list-item>
                <v-list-item-content>
                    <div class="overline mb-1">
                        <v-icon small>fa-user-alt</v-icon>{{ comment.name }}
                        <v-spacer></v-spacer>
                        <div>
                            Date posted: {{ moment(comment.created_at) }})
                        </div>
                    </div>

                    <v-list-item-subtitle v-if="ancestor != null"
                        >Reply to :{{ ancestor.name }}</v-list-item-subtitle
                    >
                    <v-list-item-title class="headline mb-1">{{
                        comment.body
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions class="ma-0">
                <v-spacer></v-spacer>
                <v-btn text @click.stop="onReply">Reply</v-btn>
            </v-card-actions>
        </v-card>
        <ReplyComments :parent="comment" />
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ReplyComments from "./ReplyComments";
import moment from "moment";
export default {
    name: "Comment",
    data() {
        return { name: "", body: "" };
    },
    components: { ReplyComments },
    props: { comment: {}, ancestor: {} },
    methods: {
        ...mapActions(["addComment"]),
        ...mapMutations(["showDialog", "setComment"]),
        onReply() {
            this.setComment(this.comment);
            this.showDialog();
        },

        moment: function(date) {
            return moment(date).format("MMM DD YYYY, h:mm:ss a");
        }
    },
    computed: { ...mapGetters(["getDialog"]) }
};
</script>

<style></style>
