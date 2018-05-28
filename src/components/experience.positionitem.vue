<template>
    <div class="exp_grid1">
        <h4>{{position}}</h4>
        <h5>{{years}}</h5>
        <p>{{summary}}</p>
        <span class="fa fa-circle"></span>
    </div>
</template>

<script>
export default {
    props: {
        position:"",
        years: "",
        summary: ""
    }
}
</script>

