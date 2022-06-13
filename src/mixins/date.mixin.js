import moment from 'moment';

export default {
    data() {
        return {
            date: '',
            interval: null
        }
    },
    methods: {
        getDate() {
            moment.locale('ru');
            return moment().format('DD.MM.YYYY, HH:mm:ss');  
        }
    }, 
    mounted() {
        this.interval = setInterval(() => {
            this.date = this.getDate();
        }, 1000)
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }       
}