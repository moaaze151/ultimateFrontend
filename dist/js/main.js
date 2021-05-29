



new Vue({
    el:'#app',
    data:{
        clicked:false,
        showenone:true, 
        showentwo:true,
    },
    computed:{
        'noslidebar':function(){
            return (this.clicked)? 'no-sidebar':''; 
        },
        'allcontent':function(){
            return (this.clicked)? 'ally-area':'';
        },
        'toBeShowenOne':function(){
            return (this.showenone)? 'beShowen':'';
        },
        'toBeShowenTwo':function(){
            return (this.showentwo)? 'beShowen':'';
        },
    },
})


  // methods:{ 
    //     showIt:function(e){
    //         e.target.setAttribute('class','beShowen'); 
    //     }

    // },