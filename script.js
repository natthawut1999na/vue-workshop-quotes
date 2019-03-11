var app = new Vue({
    el: '#app',
    data: {
        quote : null,
        loading: false
    },
    methods:{
        getNew: function(){
            this.loading = true;
            this.quote = null;
            
            fetch('https://andruxnet-random-famous-quotes.p.mashape.com?count=1', {
                headers: {
                    "X-Mashape-Key": "8VSxu5zbNVmshEfpNbMRRlNlTqTDp1PNKeHjsnSJRrQamRPifi",
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })
            .then(res => {
                return res.json()
                
            })
            .then(data =>{
                this.loading = false;
                this.quote = data;
            });
        }
    },
    mounted: function(){
        
    }
});