const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: '',
            selectedFile: '',
            selectedFileName: '',
            searchTerm: '',
            files: [
                {
                    "id": 1,
                    "name": "File 1.jpg"
                },
                {
                    "id": 2,
                    "name": "File 2.jpg"
                },
                {
                    "id": 3,
                    "name": "File 3.jpg"
                }
            ],
            hoveredItem: null,
            progress: 0
        }
    },
    methods: {
        handleUpload () {
            this.uploading = true;
            
            const updateProgress = setInterval(() => {
                this.progress++

                if (this.progress === 100) {
                    clearInterval(updateProgress);

                    setTimeout(() => {
                        this.files.push({
                            id: this.files.length + 1,
                            name: this.selectedFile.name
                        })

                        this.uploading = false
                        this.selectedFile = null
                        this.selectedFileName = ""
                    }, 1000)
                }
            }, 50)
        },
        browseFile () {
            this.$refs.file.click();
        },
        handleChange (event) {
            const files = event.target.files
            this.selectedFile = files[0]
            this.selectedFileName = files[0].name
        },
        handleRemove (file) {
            if (confirm("Are you sure?")) {
                const index = this.files.findIndex(item => item.id === file.id)
                this.files.splice(index, 1)
            }
        },
        handleKeypress (event) {
            console.log('keyPress', event.key)
           },
           handleKeydown (event) {
            console.log('keyDown', event.key)
           },
           handleKeyup (event) {
            if (event.key === 'Enter') {
                console.log('Searching')
                }
                if (event.key === 'Escape') {
                console.log('Reset')
                }           
            },
            handleEnter (event) {
                this.searchTerm = event.target.value
               },
               handleEscape () {
                this.searchTerm = ''
               },
               filesFiltered () {
                return this.files.filter(file => file.name.match(new
               RegExp(this.searchTerm, 'i')))
               }
    }
})
const mountedApp = app.mount('#app')