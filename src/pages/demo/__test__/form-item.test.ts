import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import FormItem from '../components/form-item.vue'
import {ElInput, ElSelect, ElOption} from 'element-plus';


describe('组件单元测试', () => {
  it('test input render', async () => {
    const wrapper = shallowMount(FormItem, {
      props: {
        itemType: 'input'
      }
    });
    expect(wrapper.find('.formItemInput').exists()).toBe(true)
  });

  it('test input update modelValue', async () => {
    const initialValue = 'initialText';
    const updateValue = 'test 123';
    const wrapper = shallowMount(FormItem, {
      props: {
        itemType: 'input',
        modelValue: initialValue,
        'onUpdate:modelValue': (e:string) => wrapper.setProps({ modelValue: e })
      }
    });
    const elInput = wrapper.findComponent(ElInput);   
    expect(elInput.props('modelValue')).toBe(initialValue);
    await elInput.setValue(updateValue);
    expect(wrapper.vm.modelValue).toBe(updateValue);
  });

  it('test select render', async () => {
    const initialValue = 'apple';
    const options = [
      {
        label: '苹果',
        value: 'apple'
      },
      {
        label: '香蕉',
        value: 'banana'
      }
    ];
    const wrapper = shallowMount(FormItem, {
      global: {
        components: {
          ElSelect, // register ElSelect component
          ElOption, // register ElOption component
        },
      },
      props: {
        itemType: 'select',
        modelValue: initialValue,
        options: options,
      }
    });
    expect(wrapper.find('.formItemSelect').exists()).toBe(true)
  });
})

