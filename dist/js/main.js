



new Vue({
    el:'#app',
    data:{
        clicked:false,
    },
    methods:{

    },
    computed:{
        'noslidebar':function(){
            return (this.clicked)? 'no-sidebar':'';
        },
        'allcontent':function(){
            return (this.clicked)? 'ally-area':'';
        }
    },
}) 