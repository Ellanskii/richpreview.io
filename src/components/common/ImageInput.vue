

<script>
export default {
  name: 'ImageInput',

  props: {
    value: String,
    label: String,
  },

  data: () => ({
    image: null,
    url: '',
    isLoading: false,
  }),

  methods: {
    async uploadImage() {
      // const storage = this.$fireStorageObj()

      const file = this.image

      if (!file.type.match('image.*')) {
        alert('Please upload an image.')
        return
      }

      const metadata = {
        contentType: file.type,
      }

      this.isLoading = true

      // Create a reference to the destination where we're uploading
      // the file.
      const storage = this.$fireStorageObj()
      const imageRef = storage.ref(`images/${file.name}`)

      const uploadTask = imageRef
        .put(file, metadata)
        .then((snapshot) => {
          // Once the image is uploaded, obtain the download URL, which
          // is the publicly accessible URL of the image.
          return snapshot.ref.getDownloadURL().then((url) => {
            console.log(url)
            return url
          })
        })
        .catch((error) => {
          console.error('Error uploading image', error)
        })
      // When the upload ends, set the value of the blog image URL
      // and signal that uploading is done.
      uploadTask.then((url) => {
        this.url = url
        this.isLoading = false
      })
    },
    deleteImage() {},
  },

  watch: {
    url() {
      this.$emit('input', encodeURIComponent(this.url))
    },
  },
}
</script>

<template>
  <b-field :label="label">
    <b-input ref="input" v-model="url" expanded type="url" />
    <p class="control">
      <b-upload
        @input="uploadImage"
        v-model="image"
        class="button is-primary"
        :class="{'is-loading': isLoading}"
      >
        <span v-if="url" class="icon">
          <img :src="url" alt />
        </span>
        <b-icon v-else icon="upload" />
      </b-upload>
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