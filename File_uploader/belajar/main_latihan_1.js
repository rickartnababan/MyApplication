const app = Vue.createApp({
   data: () => ({
        title : "My Files",
        messageUpload : "Button Upload",
        messageSelect : "Button Select",
        uploading   : false,
        loadingImg : '',
        selectedFile: '',
        files: []
    
   }),
   methods: {
    handleUpload () {
        this.uploading = true;
        this.loadingImg= 'loading-loading-forever.gif';
    },
    browseFile () {
        this.$refs.file.click();
    },
    handleChange (event) {
        const files = event.target.files
        this.selectedFile = files[0].name
    }
   },
})
const mountedApp = app.mount("#app")