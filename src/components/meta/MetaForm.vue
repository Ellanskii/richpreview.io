<script>
export default {
  name: 'MetaForm',

  props: {
    ogTitle: String,
    ogDescription: String,
  },
}
</script>

<template>
  <form action>
    <b-field label="OG:Title">
      <b-input
        :value="ogTitle"
        type="text"
        @input="$emit('update:ogTitle', $event)"
      />
    </b-field>
    <b-field label="OG:Description">
      <b-input type="text" has-counter maxlength="110" />
    </b-field>
  </form>
</template>

<style></style>
