<script>
export default {
  asyncData({ route }) {
    const title = route.query.title || 'Default title'
    return { title }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
      ],
    }
  },
}
</script>

<template></template>

<style></style>
