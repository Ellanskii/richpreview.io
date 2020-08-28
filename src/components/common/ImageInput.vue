

<script>
export default {
  name: 'ImageInput',

  props: {
    value: String,
    label: String
  },

  data: () => ({
    url: '1',
  }),

  watch: {
    url() {
      this.$emit('input', this.url)
    }
  }
}
</script>

<template>
  <b-field :label="label">
    <b-input ref="input" v-model="url" expanded type="url"></b-input>
    <p class="control">
      <b-button class="button is-primary">
        <span v-if="url" class="icon">
          <img
            src="https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </span>
        <b-icon v-else icon="upload" />
      </b-button>
    </p>
    <p class="control" v-if="url">
      <b-button class="button is-primary">
        <b-icon icon="close" />
      </b-button>
    </p>
  </b-field>
</template>

<style>
</style>