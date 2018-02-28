import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import SnInput from '../components/sn-input.vue';

storiesOf('Serial Number Input', module)
  .add('with placeholder', () => ({
    components: { SnInput },
    template: '<sn-input placeholder="Serial Number"/>'
  }))

  .add('with default value', () => ({
    components: { SnInput },
    template: '<sn-input initial="AAAD1234DFE3AE33"/>'
  }));
