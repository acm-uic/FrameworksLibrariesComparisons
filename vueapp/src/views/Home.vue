<template>
  <div class="home">
    <h1 style="text-align: center;" class="my-2">ACM User Management</h1>
    <hr>
    <usermanager />
  </div>
</template>

<script>
// @ is an alias to /src
import usermanager from '@/components/usermanager.vue'

export default {
  name: 'Home',
  components: {
    usermanager
  }
}
</script>
