import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import FormItem from '../components/form-item.vue'

describe('组件单元测试', () => {
  it('test input render', async () => {
    const wrapper = shallowMount(FormItem, {
      props: {
        type: 'input'
      }
    });
    expect(wrapper.find('.formItemInput').exists()).toBe(true)
  })
  it('test select render', async () => {
    const wrapper = shallowMount(FormItem, {
      props: {
        type: 'select'
      }
    });
    expect(wrapper.find('.formItemSelect').exists()).toBe(true)
  })
})
