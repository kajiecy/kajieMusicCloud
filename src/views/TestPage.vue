<template>
    <div class="vue-body">
        <svg width="200" height="200" class="svg-first">
            <rect x="10" y="10" width="100px" height="80px" stroke="red" fill="#ccc" stroke-width="1"/>
            <circle cx="153" cy="50" r="40" stroke="#59A869" fill="#1C83FA" stroke-width="1" />
        </svg>
        <svg width="200" height="200">
            <g transform="translate(-0, 0)"
               stroke-width="60"
               stroke="red"
               stroke-linejoin="round">
                <path d="M0,0 Q170,-50 260, -190 Q310, -250 410,-250"
                      fill="#1C83FA" />
            </g>
        </svg>
        <svg width="200" height="200">
            <defs>
                <g id="shapeGroup">
                    <rect x="10" y="10" width="100" height="80" stroke="red" fill="#ccc" />
                    <circle cx="120" cy="80" r="40" stroke="#00f" fill="none" stroke-width="8" />
                </g>
            </defs>
            <use xlink:href="#shapeGroup" transform="translate(20,0) scale(0.5)" />
            <use xlink:href="#shapeGroup" transform="translate(80,0) scale(0.25)" />
        </svg>
        <svg width="200" height="200">
            <defs>
                <pattern id="GravelPattern" patternUnits="userSpaceOnUse" x="0" y="0" width="100" height="67" viewBox="0 0 100 67">
                    <image x="0" y="0" width="100" height="67" xlink:href:"http://qiniu.kajie88.com/28913648.jpg"></image>
                </pattern>
                <linearGradient id="Gradient">
                    <stop offset="0%" stop-color="#000"></stop>
                    <stop offset="100%" stop-color="#f00"></stop>
                </linearGradient>
            </defs>
            <rect x="10" y="10" width="100" height="80" stroke="red" fill="url(#Gradient)" />
            <circle cx="120" cy="80" r="40" stroke="#00f" fill="url(#GravelPattern)" stroke-width="8" />
        </svg>
        <svg width="200" height="200">
            <text x="10" y="80" font-family="Droid Sans" stroke="#00f" fill="#00f" font-size="18px">
                hello SVG
            </text>
        </svg>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {

            };
        },

        methods: {

        },
        watch: {

        },
        created() {

        },

        mounted() {
        },
        components:{
        }
    };
</script>
<style scoped>
    .vue-body{
    }
    .svg-first{
        /*margin: 0 auto;*/
        /*text-align: center;*/
    }


</style>
