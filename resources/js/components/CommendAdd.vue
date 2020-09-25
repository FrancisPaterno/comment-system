<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text color="sucess" v-bind="attrs" v-on="on"
                    >Add Comment
                </v-btn>
            </template>
            <v-card>
                <div v-if="getErrors" text class="red--text">
                    <div v-for="(error, k) in getErrors" :key="k">
                        {{ error }}
                    </div>
                </div>
                <form @submit="onSubmit">
                    <v-card-title class="headline grey lighten-2">
                        Add Comment
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
                        <v-btn color="secondary" @click="dialog = false"
                            >Cancel</v-btn
                        >
                        <v-btn type="submit" color="primary">Submit</v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import sanitize from "../sanitize";
export default {
    data() {
        return { dialog: false, name: "", body: "" };
    },
    methods: {
        ...mapActions(["addComment", "fetchComments"]),
        onSubmit(e) {
            e.preventDefault();

            this.addComment({
                name: this.name,
                body: this.body
            });
            this.dialog = false;
            this.fetchComments();
        }
    },
    computed: { ...mapGetters(["getErrors"]) }
};
</script>

<style></style>
