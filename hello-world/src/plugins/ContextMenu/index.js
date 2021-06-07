export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$contextMenu = {
      EventBus: new Vue(),

      edit (name, settings) {
        this.EventBus.$emit('show', { name, settings })
      },

      delete () {
        this.EventBus.$emit('close')
      }
    }
  }
}
