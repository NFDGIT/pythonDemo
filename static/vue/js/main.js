

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods : {
       greet: function (event) {
           if (event){
               alert(event);
           }else{
               alert("无对象");
           }
       }

    }
});
