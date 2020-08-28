<script>
import ImageInput from '~/components/common/ImageInput'

export default {
  name: 'MetaForm',

  components: {
    ImageInput
  },

  props: {
    ogTitle: String,
    ogDescription: String,
    ogImage: String
  },
}
</script>

<template>
  <form action>
    <b-field label="OG:Title">
      <b-input :value="ogTitle" @input="$emit('update:ogTitle', $event)" />
    </b-field>
    <b-field label="OG:Description">
      <b-input
        :value="ogDescription"
        @input="$emit('update:ogDescription', $event)"
        has-counter
        maxlength="110"
      />
    </b-field>
    <ImageInput :value="ogImage" @input="$emit('update:ogImage', $event)"/>
  </form>
</template>

<style></style>
