<template>
    <div class="col-md-4 w3-services-left-grid">
        <h4>{{title}}</h4>
        <p>{{description}}</p>
        <div class="more">
            <a href="#">Know more</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: "",
        description: ""
    }
}
</script>
