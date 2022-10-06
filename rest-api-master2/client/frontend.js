import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'


Vue.component('loader', {
  template: `
    <div style="display: flex;justify-content: center;align-items: center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `
})

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      form: {
        validationDefault01: '',
        validationDefault02: ''
      },
      contacts: []
    }
  },
  methods: {
    async createContact() {

      console.log(this.form)

      this.form.validationDefault01 = this.form.validationDefault02 = ''
    },
  },})
