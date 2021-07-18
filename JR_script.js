// Code for navigation functionality using Vue

let app = new Vue({
    el: "#app",

    data: {
        mainsec: "about",
        subsec: "nil",
        submenu: [false, false],
    },

    methods: {
        switchmain: function (newsec) {
            this.mainsec = newsec;
        },

        switchsub: function (newsec) {
            this.subsec = newsec;
        },

        updatenow: function () {
            this.$forceUpdate();
        }
    },

    computed: {},
});