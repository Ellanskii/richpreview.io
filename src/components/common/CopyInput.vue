<script>
export default {
  name: 'CopyInput',

  props: {
    value: String,
    label: String,
    tooltipText: {
      type: String,
      default: 'Copied to clipboard!',
    },
    tooltipLifetime: {
      type: Number,
      default: 3000,
    },
  },

  data: () => ({
    showTooltip: false,
  }),

  methods: {
    copyToClipboard() {
      const input = this.$refs.input.$el.querySelector('input')
      input.select()
      input.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.showTooltip = true
      setTimeout(() => {
        this.showTooltip = false
      }, this.tooltipLifetime)
    },
  },
}
</script>

<template>
  <b-tooltip :label="tooltipText" :active="showTooltip" always class="is-flex">
    <b-field :label="label" style="width: 100%">
      <b-input ref="input" :value="value" expanded></b-input>
      <p class="control">
        <b-button class="button is-primary" @click="copyToClipboard">
          <b-icon icon="content-copy" />
        </b-button>
      </p>
    </b-field>
  </b-tooltip>
</template>

<style></style>
