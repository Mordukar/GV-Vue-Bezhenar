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
  test('Test dif operation', () => {
    const wrapper = mount(Calculator)
  
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('100')
  
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue('5')
  
    const sumOperationButton = wrapper.find('button[name="-"]')
    sumOperationButton.trigger('click')
  
    expect(wrapper.vm.result).toBe(95)
  })
  test('Test multiply operation', () => {
    const wrapper = mount(Calculator)
  
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('100')
  
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue('5')
  
    const sumOperationButton = wrapper.find('button[name="*"]')
    sumOperationButton.trigger('click')
  
    expect(wrapper.vm.result).toBe(500)
  })
  test('Test division operation', () => {
    const wrapper = mount(Calculator)
  
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('100')
  
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue('5')
  
    const sumOperationButton = wrapper.find('button[name="/"]')
    sumOperationButton.trigger('click')
  
    expect(wrapper.vm.result).toBe(20)
  })
  test('Test degree operation', () => {
    const wrapper = mount(Calculator)
  
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('10')
  
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue('5')
  
    const sumOperationButton = wrapper.find('button[name="^"]')
    sumOperationButton.trigger('click')
  
    expect(wrapper.vm.result).toBe(100000)
  })
  test('setChecked', async () => {
    const wrapper = mount(Calculator)
    const radioInput = wrapper.find('#checkbox')
  
    await radioInput.setChecked()
  
    expect(radioInput.element.checked).toBe(true)
  })
  // test('checkKeyboard', async () => {
  //   const wrapper = mount(Calculator)
  //   const radioInput = wrapper.find('#checkbox')
  
  //   await radioInput.setChecked()
  
  //   expect(radioInput.element.checked).toBe(true)

  //   const operandCheckbox1 = wrapper.find('#one')
  //   const operandCheckbox2 = wrapper.find('#two')

  //   await operandCheckbox1.setChecked()
  //   expect(operandCheckbox1.element.checked).toBe(true)

  //   let buttons=[]
  //   for (let i = 1; i<10; i++) {
  //     buttons[i] = i 
  //   } 
  //   return buttons;
    
  // })
 })
 
