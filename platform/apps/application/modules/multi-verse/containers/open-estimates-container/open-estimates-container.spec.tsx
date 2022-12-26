import { render } from '@testing-library/react';

import OpenEstimates from './open-estimates-container';

describe('OpenEstimates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OpenEstimates />);
    expect(baseElement).toBeTruthy();
  });
});
