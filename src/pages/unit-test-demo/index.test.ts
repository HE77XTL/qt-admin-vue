import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AddNum from './index.vue'

describe('组件单元测试', () => {
  it('test1', async () => {
    const wrapper = shallowMount(AddNum)
    const btn = '.test-utils-button'
    const value = '.test-utils-value'
    expect(wrapper.find(value).text()).toContain('值为：1')
    await wrapper.find(btn).trigger('click') // await nextTick()的简写
    expect(wrapper.find(value).text()).toBe('值为：2')
  })
})
