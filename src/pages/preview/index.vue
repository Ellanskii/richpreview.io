<script>
export default {
  data: () => ({
    defaultTitle: '',
    // description: ''
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
  computed: {
    title() {
      return this.$route.query.title
    },
    description() {
      return this.$route.query.description || 'description'
    },
  },
  methods: {
    updateHead() {
      this.title = this.$route.query.title
    },
  },
}
</script>

<template></template>

<style></style>
