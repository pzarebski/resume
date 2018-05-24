<template>
    <div class="col-md-4 w3-icon-grid1">
        <i :class="iconClass" aria-hidden="true"></i>
        <h3>{{title}}</h3>
        <div class="clearfix"></div>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: "",
        description: "",
        icon: ""
    },
    computed: {
        iconClass: function() {
            return "fa fa-" + this.icon;
        }
    }
}
</script>

