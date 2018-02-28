import { configure } from '@storybook/vue';

import Vue from 'vue';

import SNInput from '../components/sn-input.vue';

Vue.component('sn-input', SNInput);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
