<template>
  <div>home</div>
</template>

<script>

export default {
  name: "index",
  mounted() {
    this.$confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      confirmButtonText: 'Re-Login',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
        this.$router.replace({path:'/login'})
    })
  }
}
</script>

<style scoped>

</style>
