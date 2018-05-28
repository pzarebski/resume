<template>
    <div class="col-lg-6 col-md-6 col-sm-6 comment-agile2" data-aos="flip-right">  
        <h4>Contact me for more details</h4>
        <p class="comment-w3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed insapien urna. Aenean Sed insapien urna in diam lacus. Nullam nisl urna, in consequat eget enim vitae, faucibus malesuada consectetur adipisc ingelit in consequat enim vitae</p>
        
        <commentdetailsitem text="+48 510 049 531" icon="phone" />
        <commentdetailsitem is-email="true" text="pzarebski@gmail.com" icon="envelope" />
        <commentdetailsitem text="Warsaw, Poland" icon="map-marker" />
        <commentdetailsitem text="github.com/pzarebski" icon="github" />
        <commentdetailsitem text="stackoverflow.com/users/1498401" icon="stack-overflow" />
    </div>
</template>

<script>
import commentdetailsitem from './comments.details.item.vue'

export default {
    components: {
        commentdetailsitem
    }
}
</script>
