/**
 * Created by anguer on 2017/4/11.
 */
import VueEditor from './components/main.vue';

/* istanbul ignore next */
VueEditor.install = function(Vue) {
  Vue.config.keyCodes.a = 65;
  Vue.config.keyCodes.b = 66;
  Vue.config.keyCodes.c = 67;
  Vue.config.keyCodes.d = 68;
  Vue.config.keyCodes.h = 72;
  Vue.config.keyCodes.i = 73;
  Vue.config.keyCodes.l = 76;
  Vue.config.keyCodes.o = 79;
  Vue.config.keyCodes.p = 80;
  Vue.config.keyCodes.q = 81;
  Vue.config.keyCodes.t = 84;
  Vue.config.keyCodes.u = 85;
  Vue.component(VueEditor.name, VueEditor);
};

export default VueEditor;
