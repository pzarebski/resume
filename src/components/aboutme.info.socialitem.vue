<template>
    <li>
        <a :href="href" :title="title"><span :class="iconClass"></span></a>
    </li>
</template>

<script>
export default {
    props: {
        icon: "",
        title: "",
        href: ""
    },
    computed: {
        iconClass: function() {
            return "fa fa-" + this.icon;
        }
    }    
}
</script>

