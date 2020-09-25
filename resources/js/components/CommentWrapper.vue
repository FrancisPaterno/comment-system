<template>
    <div>
        <v-container class="my-4 mx-0 pa-0">
            <v-card
                v-scroll.self="onScroll"
                class="overflow-y-auto"
                height="400"
                width="100%"
            >
                <v-layout column>
                    <v-flex v-for="comment in parentComments" :key="comment.id">
                        <Comment :comment="comment" />
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
        <div class="text-center">
            <v-dialog v-model="getDialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-if="getDialog"
                        text
                        color="sucess"
                        v-bind="attrs"
                        v-on="on"
                        >Add Comment
                    </v-btn>
                </template>
                <v-card>
                    <form @submit="onSubmit">
                        <v-card-title class="headline grey lighten-2">
                            Reply to comment
                        </v-card-title>
                        <v-card-text>
                            <v-flex flex-column>
                                <v-text-field
                                    v-model="name"
                                    label="Name"
                                ></v-text-field>
                                <v-text-field
                                    v-model="body"
                                    label="Your comment"
                                ></v-text-field>
                            </v-flex>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="secondary" @click="hideDialog"
                                >Cancel</v-btn
                            >
                            <v-btn type="submit" color="primary">Submit</v-btn>
                        </v-card-actions>
                    </form>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Comment from "./Comment";

export default {
    data() {
        return { name: "", body: "", mycomments: [], scrollInvoked: 0 };
    },
    components: { Comment },
    methods: {
        ...mapActions(["addComment", "fetchComments", "encodeHTML"]),
        ...mapMutations(["hideDialog"]),
        onSubmit(e) {
            e.preventDefault();
            this.addComment({
                parent_id: this.getComment.id,
                name: this.name,
                body: this.body
            });
            this.fetchComments();
            this.hideDialog();
        },
        onScroll() {
            this.scrollInvoked++;
        }
    },
    computed: {
        ...mapGetters(["allcomments", "getDialog", "getComment"]),
        parentComments: function() {
            return this.allcomments.filter(
                comment => comment.parent_id == null
            );
        }
    },
    mounted() {
        this.fetchComments();
        console.log("allcomments", this.allcomments);
    }
};
</script>

<style></style>
