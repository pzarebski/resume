<template>
    <div class="col-md-5 about_left">
      <ul class="address">
        <aboutmeinfoitem title="Name" value="Przemyslaw Zarebski" />
        <aboutmeinfoitem title="D.O.B" value="16-11-1986" />
        <aboutmeinfoitem title="PHONE" value="+48 510 049 531" />
        <aboutmeinfoitem title="JOB" value="Developer" />
        <aboutmeinfoitem title="EXPERIENCE" value="+9 Years" />
        <aboutmeinfoitem title="ADDRESS" value="Warsaw, Poland." />
        <aboutmeinfoitem title="EMAIL" value="pzarebski@gmail.com" is-link="true" />
        <!-- <aboutmeinfoitem key="WEBSITE" value="" is-link="true" /> -->        
      </ul>
      <div class="w3-socials about-social">
          <ul>
            <aboutmeinfosocialitem href="mailto:pzarebski@gmail.com" title="e-mail" icon="envelope" />
            <aboutmeinfosocialitem href="//github.com/pzarebski" title="github" icon="github" />
            <aboutmeinfosocialitem href="//stackoverflow.com/users/1498401" title="stack-overflow" icon="stack-overflow" />
            <aboutmeinfosocialitem href="//linkedin.com/in/pzarebski" title="linkedin" icon="linkedin" />
          </ul>
        </div>
	</div>
</template>

<script>
import aboutmeinfoitem from './aboutme.info.item.vue'
import aboutmeinfosocialitem from './aboutme.info.socialitem.vue'

export default {
  components: {
    aboutmeinfoitem,
    aboutmeinfosocialitem
  }
}
</script>
