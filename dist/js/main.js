

let sliderbar = document.getElementById('sliderbar-id');
let allcontent = document.getElementById('allcontent-id'); 

new Vue({
    el:'#app', 
    data:{
        showenone:true, 
        showentwo:true,
        sliderbarr:sliderbar,
        allcontentt:allcontent,
        mycolor:'#27ae60',
    },
    methods:{ 
        showing:function(){
            this.sliderbarr.classList.toggle('no-sidebar');
            this.allcontentt.classList.toggle('ally-area');
            console.log(this.sliderbarr) 
        },
        updatingcolors:function(e){
            this.mycolor= e.target.getAttribute('data-theme');
        }
    
    },
    computed:{
        'toBeShowenOne':function(){
            return (this.showenone)? 'beShowen':'';
        },
        'toBeShowenTwo':function(){
            return (this.showentwo)? 'beShowen':'';
        }, 
    },
});

function show(){
    document.getElementById('sliderbar-id').classList.toggle('no-sidebar');
    document.getElementById('allcontent-id').classList.toggle('ally-area');
};
function showHbox(){
    document.getElementById('clicking-box').classList.toggle('hide-box');
    document.querySelector('.toggle-settings').classList.toggle('fa-spin');  
};
