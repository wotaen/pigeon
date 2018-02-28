import Vue from 'vue';

import { specs, describe, it } from 'storybook-addon-specifications'
import { storiesOf } from '@storybook/vue';

import SnInput from '../components/sn-input.vue';
import { mount } from '@vue/test-utils'

storiesOf('Serial Number Input', module)
    .add('with placeholder', () => {

        const story = {
            components: { SnInput },
            template: '<sn-input placeholder="Serial Number"/>'
        }

        specs(() => describe('with placeholder', function () {
            it('should have empty value', function () {
                let output = mount(story);
                expect(output.find('input').element.value).toContain('');
            });
        }));

        return story

    })

    .add('with default value', () => {

        const story = {
            components: { SnInput },
            template: '<sn-input initial="AAAD1234DFE3AE33"/>'
        }

        specs(() => describe('with default value', function () {
            it('should have value same as initial value', function () {
                let output = mount(story);
                expect(output.find('input').element.value).toContain('AAAD 1234 DFE3 AE33');
            });
        }));

        return story

    });
