<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  components: {
    
  },

    methods: {
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          'foo@foo.foo',
          'test'
        )
      } catch (e) {
        handleError(e)
      }
    }
  },

  mounted() {
    // this.createUser()
  }
}
</script>
