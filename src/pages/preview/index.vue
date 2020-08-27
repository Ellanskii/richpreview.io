<script>
import MetaForm from '~/components/meta/MetaForm'
import CopyInput from '~/components/common/CopyInput'

export default {
  components: {
    MetaForm,
    CopyInput,
  },

  data: () => ({
    currentUrl: '',
    meta: {
      ogTitle: '',
    },
  }),
  computed: {
    title() {
      return this.$route.query.title
    },
    description() {
      return this.$route.query.description || 'description'
    },
  },

  watch: {
    meta: {
      deep: true,
      handler() {
        this.$router.replace({ query: this.meta }, () => {
          this.currentUrl = window.location.href
        })
      },
    },
  },

  mounted() {
    this.currentUrl = window.location.href
  },
  methods: {
    updateHead() {
      this.title = this.$route.query.title
    },
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
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <MetaForm :og-title.sync="meta.ogTitle" />
    <CopyInput :value="currentUrl" />
  </div>
</template>

<style></style>
