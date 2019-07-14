<template>
    <form @submit.prevent="onSave">
        <input type="text" v-model="editedPost.title"/>
        <input type="text" v-model="editedPost.previewText"/>
        <input type="text" v-model="editedPost.thumbnail"/>
        <button type="button" @click="onCancel">Cancel</button>
        <button type="submit">Save</button>
    </form> 
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
            }
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
