import { render } from "@testing-library/react";
import { ContentContact } from ".";


test('ContentContact renders correctly', () => {
    const { debug } = render(
        <ContentContact />
    )
    debug()
})
