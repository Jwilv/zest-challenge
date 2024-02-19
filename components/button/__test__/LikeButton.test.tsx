import { render } from "~/jest/test-utils";
import { LikeButton } from "../LikeButton";




describe('Name of the group', () => {


    it('test', () => {
        const component = render(<LikeButton name="test" state="test" country="test" city="test" id="test" />);
        expect(component).toBeDefined();
    })
});