'use strict'

var vm = new Vue({
    el:'#app',
    data:{
        name:'halosaka'
    }
});

var vm2 = new Vue({
    el:'#app2',
    data:{
        todos:[
            'task1',
            'task2',
            'task3'
        ]
    }
})

var vm3 = new Vue({
    el:'#app3',
    data:{
        newTodo:'',
        newTodo2:'',
        todos:[
            {title:'task1',val:'val1'},
            {title:'task2',val:'val2'},
            {title:'task3',val:'val3'}
        ]
    },
    methods:{
        addTodo: function(event){
            event.preventDefault();
            var newdata = {
                title:this.newTodo,
                val:this.newTodo2,
                isDone:false
            }
            this.todos.push(newdata);
            // this.newdata='';
        },
        deleteTodo: function(index){
            if(confirm('削除してもよろしいですか')){
                this.todos.splice(index,1);
            }
        },
        deleteTodos: function(){
            if(confirm('完了したタスクを削除します')){
                this.todos = this.notYet;
            }
        }
    },
    computed:{
        notYet:function(){
            return this.todos.filter(function(todo){
                return !todo.isDone;
            });
        },
    },
    watch:{
        todos:{
            handler: function(){
            localStorage.setItem('todos',JSON.stringify(this.todos));

        },
        deep:true
    }
    },
    mounted:function(){
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if(!this.todos){
            this.todos = [];
        }
    }

})