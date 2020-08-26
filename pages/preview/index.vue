<script>
export default {
  data: () => ({
    title: '',
    description: ''
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    }
  },
  mounted() {
    this.title = this.$route.query.title
  },
}
</script>

<template></template>

<style></style>
