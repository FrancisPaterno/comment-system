<template>
    <div class="post ma-5">
        <v-card max-width="100%" width="100%" class="mx-auto">
            <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline"
                        >Our Changing Planet</v-list-item-title
                    >
                    <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img src="/images/mountain.jpg" height="350"></v-img>

            <v-card-text>
                Visit ten places on our planet that are undergoing the biggest
                changes today.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <CommentAdd />
            </v-card-actions>
        </v-card>
        <CommentWrapper />
    </div>
</template>

<script>
import Comment from "./Comment";
import CommentAdd from "./CommendAdd";
import CommentWrapper from "./CommentWrapper";

export default {
    components: { Comment, CommentAdd, CommentWrapper }
};
</script>

<style></style>
