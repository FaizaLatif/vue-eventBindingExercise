Vue.createApp({
    data() {
        return {
            exercise2: ''
        }
    },
    methods: {
        alert() {
            alert('button clicked');
        },
        setValue(event) {
            this.exercise2 = event.target.value;
        }
    }
}).mount('#assignment');
