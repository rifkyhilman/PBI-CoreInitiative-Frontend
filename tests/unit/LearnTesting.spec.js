import LearnTesting from "@/components/week-03/LearnTesting"
import { mount } from "@vue/test-utils"

describe("Test Counter", () => {
    // Test 1
    test('Check Default Number', ()=> {

        const wrapper = mount(LearnTesting, {
            data(){
                return{
                    number: 0
                }
            }
        });

        const number_data = wrapper.get('[data-test="number"]');

        expect(number_data.text()).toContain("0");

    });

     // Test 2
     test('Add Number with Counter', async()=> {

        const wrapper = mount(LearnTesting, {
            data(){
                return{
                    number: 0
                }
            }
        });

        const number_data = wrapper.get('[data-test="number"]');

        await wrapper.get('[data-test="add_number"]').trigger('click');

        expect(number_data.text()).toContain("1");

    });

    // Test 3
    test('Substract Number with Counter', async()=> {

        const wrapper = mount(LearnTesting, {
            data(){
                return{
                    number: 1
                }
            }
        });

        const number_data = wrapper.get('[data-test="number"]');
        await wrapper.get('[data-test="substract_number"]').trigger('click');

        expect(number_data.text()).toContain("0");

    });

    // Test 4
    test('Reset Number with Counter', async()=> {

        const wrapper = mount(LearnTesting, {
            data() {
                return{
                    number: 5
                }
            }
        });

        const number_data = wrapper.get('[data-test="number"]');

        await wrapper.get('[data-test="reset_number"]').trigger('click');

        expect(number_data.text()).toContain("0");

    });
})