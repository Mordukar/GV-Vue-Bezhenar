export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$contextMenu = {
      EventBus: new Vue(),

      edit (settings) {
        this.EventBus.$emit('edit', settings)
      },

      delete () {
        this.EventBus.$emit('close')
      }
    }
  }
}
