import { mount } from '@vue/test-utils'
import { Box } from './index'
describe('BoxType', () => {
    it('Display Of Box', () => {
        const display = 'inline-flex'
        const wrapper = mount(Box, { props: { display } })

        expect(wrapper.classes()).toContain('awe-box-inline-flex')
    })
})
