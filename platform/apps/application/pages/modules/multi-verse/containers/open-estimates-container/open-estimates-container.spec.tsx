import { render } from '@testing-library/react';

import OpenEstimates from '.';

describe('OpenEstimates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OpenEstimates />);
    expect(baseElement).toBeTruthy();
  });
});
