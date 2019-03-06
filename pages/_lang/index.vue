<template>
    <div>
        {{ $t('index.home') }}  
        <button @click="handleSetLang">切换</button>  
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
    methods: {
        handleSetLang() {
            
        }  
    },
}
</script>

