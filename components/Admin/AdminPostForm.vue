<template>
    <v-card>
        <v-form v-model="valid" @submit.prevent="onSave">
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex xs12>
                    <v-text-field v-model="editedPost.title" label="Title" required  :rules="[v => !!v || 'Item is required']"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field v-model="editedPost.previewText" label="Text" required></v-text-field>

                    </v-flex>
                    <v-flex xs12>
                        <v-text-field v-model="editedPost.thumbnail" label="Imagen" required></v-text-field>

                    </v-flex>
                    <v-flex xs6>
                        <v-btn color="error" dark large @click="onCancel">Cancel</v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-btn color="error" dark large type="submit">Submit    </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            editedPost: this.post 
            ? { ... this.post } 
            :{
                title: '',
                previewText: '',
                thumbnail: ''
            },
            rules: [
                v => !!v || 'Name is required' 
            ]
        }
    },
    methods: {
        onSave() {
            this.$emit('submit', this.editedPost);
        },
        onCancel() {
            this.$router.push('/admin');
        }
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    }
}

</script>

<style scoped>
    input {
        background-color: white;
        color: black;
    }
</style>
