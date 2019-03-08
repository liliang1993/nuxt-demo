import Vue from 'vue'
import VueI18n from 'vue-i18n'
// let test = {
//   install: function() {
//       Vue.prototype.$test = () => console.log('test....');
//   }
// }
// Vue.use(test)
Vue.use(VueI18n)
console.log('888');
export default ({ app, store }, inject) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  console.log('plugins');
  // app.i18n = new VueI18n({
    
  //   locale: store.state.locale,
  //   fallbackLocale: 'en',
  //   messages: {
  //     'en': require('~/locales/en.json'),
  //     'cn': require('~/locales/cn.json')
  //   }
  // })

  app.i18n = new VueI18n({
    
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'cn': require('~/locales/cn.json')
    }
  });
  
  app.test = () =>  console.log('test......');

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
