<template>
    <nav class="w3-navbar">
      <div class="container">
        <div class="nav-top">          
          <div class="logo">
            <a href="#home" class="scroll">
            Professional <span>CV</span>
            </a>
          </div>          
          <div class="right">
            <div class="w3-socials">
              <ul>
                <navbaritem href="mailto:pzarebski@gmail.com" tooltip="e-mail" icon="envelope" />
                <navbaritem href="github.com/pzarebski" tooltip="github" icon="github" />
                <navbaritem href="stackoverflow.com/users/1498401" tooltip="stack-overflow" icon="stack-overflow" />
                <navbaritem href="//linkedin.com/in/pzarebski" tooltip="linkedin" icon="linkedin" />
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import navbaritem from './topnavbar.item.vue'

export default {
  components: {
    navbaritem
  }
}
</script>



