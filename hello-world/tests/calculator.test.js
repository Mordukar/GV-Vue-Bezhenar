import 'regenerator-runtime/runtime'
import { mount } from '@vue/test-utils'
import Calculator from '../src/components/HelloWorld'
 
describe('Calculator operations tests', () => {
  test('Test sum operation', () => {
    const wrapper = mount(Calculator)
  
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('100')
  
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue('5')
  
    const sumOperationButton = wrapper.find('button[name="+"]')
    sumOperationButton.trigger('click')
  
    expect(wrapper.vm.result).toBe(105)
  })
 })
 
