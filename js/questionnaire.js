'use strict'
var app1_1 = new Vue({
    el: '#app1-1',
    data: {
        year: new Date().getFullYear()
    }
});

var app1_2 = new Vue({
    el: '#app1-2',
    data: {
        year: new Date().getFullYear()
    }
});

var app2_1 = new Vue({
    el: '#app2',
    data: {
        year: new Date().getFullYear()
    },
    methods: {
        yearInputHandler: function (event) {
            this.year = event.target.value;
        }
    }
});

var app3_1 = new Vue({
    el: '#app3-1',
    data: {
        message: '単方バインディング'
    }
});

var app3_2 = new Vue({
    el: '#app3-2',
    data: {
        message: '双方バインディング'
    }
});

var appapp3_3 = new Vue({
    el: '#app3-3',
    data: {
        message2: '双方向バインディング(全角)'
    },
    methods: {
        messageInputHandler: function (event) {
            this.message2 = event.target.value;
        }
    }
});

var app4_1 = new Vue({
    el: '#app4-1',
    data: {
        answer: false
    }
});

var app4_2 = new Vue({
    el: '#app4-2',
    data: {
        answer: 'いいえ'
    }
});

var app4_3 = new Vue({
    el: '#app4-3',
    data: {
        answer: []
    },
    computed: {
        selection: function () {
            return this.answer.join();
        }
    }
});

var app5_1 = new Vue({
    el: '#app5-1',
    data: {
        answer: ''
    }
});

var app6_1 = new Vue({
    el: '#app6-1',
    data: {
        answer: ''
    }
});

var app6_2 = new Vue({
    el: '#app6-2',
    data: {
        answer: '',
        option: [
            { code: 'ans1', label: '初めて' },
            { code: 'ans2', label: '週１回以上' },
            { code: 'ans3', label: '月に２回以上' },
            { code: 'ans4', label: '半年に１回' }


        ]
    }
});

var app7_1 = new Vue({
    el: '#app7-1',
    data: {
        category: []
    },
    computed: {
        selectedCategory: function () {
            if (this.category.length >= 1) {
                return this.category.join()
            } else {
                return ''
            }
        }
    }
});

var app8_1 = new Vue({
    el: '#app8-1',
    data: {
        arrival_date: null
    },
    created: function () {
        this.arrival_date = this.formatDate(new Date());
    },
    methods: {
        formatDate: function (dt) {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMongth() + 1)).slice(-2);
            var d = ('00' + (dt.getDate() + 1)).slice(-2);
            var result = y + '-' + m + '-' + d;
            return result;

        }
    }
});

var app8_2 = new Vue({
    el: '#app8-2',
    data: {
        arrival_date: null,
        min_date: null
    },
    created: function () {
        var dt = new Date();
        dt.setDate(dt.getDate() + 1);
        this.arrival_date = this.formatDate(dt);
        this.min_date = this.arrival_date;
    },
    methods: {
        formatDate: function (dt) {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMonth() + 1)).slice(-2);
            var d = ('00' + dt.getDate()).slice(-2);
            var result = y + '-' + m + '-' + d;
            return result;

        }

    }
});

var app9_1 = new Vue({
    el: '#app9-1',
    data: {
        color: '#000000',
        red: 0,
        green: 0,
        blue: 0
    },
    computed: {
        colorElement: function () {
            return [this.red, this.green, this.blue];
        }
    },
    watch: {
        colorElement: function (newRGB, oldRGB) {
            var r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
            var g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
            var b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
            this.color = '#' + r + g + b;
        },
        color: function (newRGB, oldRGB) {
            this.red = parseInt(newRGB, substr(1, 2), 16);
            this.green = parseInt(newRGB, substr(3, 2), 16);
            this.blue = parseInt(newRGB, substr(5, 2), 16);
        }
    }
});



