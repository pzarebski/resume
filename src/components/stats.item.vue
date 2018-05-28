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
        index: 0
    },
    computed: {
        getId: function () {
            return "gauge" + this.index;
        }
    }
}
</script>
