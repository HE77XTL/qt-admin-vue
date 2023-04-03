import {
  describe, expect, it
} from 'vitest';
import {mount, shallowMount} from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';
import FormItem from '../form-item.vue';
import {ElInput, ElSelect} from 'element-plus';

describe('form-item', () => {
  it('hellow world', () => {
    const wrapper = shallowMount(FormItem, {
      props: {
        type: 'input'
      },
      global: {
        components: {
          'el-input': ElInput
        }
      }
    });

    it('正确渲染', () => {
      const input = wrapper.findComponent(ElSelect)
      console.log(input);
      expect(input.exists()).toBe(false)
    });

  });
});
