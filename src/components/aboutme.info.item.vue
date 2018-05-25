<template>
    <li>
        <ul class="agileits-address-text ">
            <li><b>{{title}}</b></li>      
            <li v-if="isLink"><a :href="email">{{value}}</a></li>
            <li v-else>{{value}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        title: "",
        value: "",
        isLink: false
    },
    computed: {
        email: function() {
            return "mailto:" + this.value;
        }
    }
}
</script>

