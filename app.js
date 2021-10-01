Vue.createApp({
    data() {
        return {
            exercise2: '',
            exercise3: '',
        }
    },
    methods: {
        alert() {
            alert('button clicked');
        },
        setValue(event) {
            this.exercise2 = event.target.value;
        },
        setOtherValue(event) {
            this.exercise3 = event.target.value;
        }
    }
}).mount('#assignment');
