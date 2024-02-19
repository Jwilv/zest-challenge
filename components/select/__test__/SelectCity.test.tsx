import { render } from "~/jest/test-utils";
import { SelectCity } from "../SelectCity";




describe('Name of the group', () => {


    it('test', () => {
        const component = render(<SelectCity citys={[]} onValueChange={() => { }} />);
        expect(component).toBeDefined();
    })
});