<template>
    <div class="col-md-3 w3ls_about_guage">
        <canvas :id="getId" width="200" height="100"></canvas>
        <h4>{{title}}</h4>
    </div>
</template>

<script>
export default {
    props: {
        title: "",
        index: 0,
        percent: 0,
        color: "",
        type: ""
    },
    computed: {
        getId: function () {
            return "gauge" + this.index;
        },
        getType: function() {
            return this.type === undefined ? "halfcircle" : this.type;
        }
    },
    mounted: function () {
        $("#" + this.getId).gauge(parseInt(this.percent), {color: this.color,unit: " %",type: this.getType});
    }
}
</script>
