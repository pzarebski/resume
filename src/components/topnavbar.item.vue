<template>
    <li>
        <a :href="href" :title="tooltip"><span :class="iconStyle"></span></a>
    </li>
</template>

<script>
export default {
    props: {
        href: "",
        tooltip: "",
        icon: ""
        
    },
    computed: {
        iconStyle: function() { 
            return "fa fa-" + this.icon; 
        }
    }
}
</script>