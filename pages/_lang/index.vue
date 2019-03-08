<template>
    <div>
        {{ a }}  
        <button @click="handleSetLang">{{$t($store.state.locale)}}</button>  
    </div>   
    
</template>

<script>
import axios from 'axios';
 export default {
    data(){
        return {
            a: ''
        }
    },
    asyncData(context) {
        console.log('sto711re', context);
        return axios.get('https://advisortest.1quant.me/api/cover/get_index').then((res) => {
            // store.commit('setStars', res.data);
            console.log('res1', res.data.data.cover_list);
            let cover_list = res.data.data.cover_list;
            return {
                a: cover_list[0]["column_name"]
            }
        })
    },
    mounted() {
        // console.log('this', this.$store.state.locale);
        console.log('this', this);
    },
    methods: {
        handleSetLang() {
            
            if(this.$store.state.locale == 'cn') {
                this.$store.commit('SET_LANG', 'en');
                this.$i18n.locale = this.$store.state.locale;
            }else {
                console.log('999');
                this.$store.commit('SET_LANG', 'cn');
                this.$i18n.locale = this.$store.state.locale;
            }
             console.log('this.$store.state.locale', this.$store.state.locale);
        }  
    },
}
</script>

