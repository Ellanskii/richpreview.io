<script>
import MetaForm from '~/components/meta/MetaForm'
import CopyInput from '~/components/common/CopyInput'

export default {
  components: {
    MetaForm,
    CopyInput,
  },

  asyncData({ route }) {
    const meta = { // TODO change defaults
      ogTitle: route.query.ogTitle || 'default title',
      ogDescription: route.query.ogDescription || 'default description',
      ogImage: route.query.ogImage || 'default Image',
    }
    return { meta }
  },

  data: () => ({
    currentUrl: '',
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

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.meta.ogTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.meta.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.meta.ogImage,
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <MetaForm :og-title.sync="meta.ogTitle" :og-description.sync="meta.ogDescription" :og-image.sync="meta.ogImage" />
    <CopyInput :value="currentUrl"/>
  </div>
</template>

<style></style>
