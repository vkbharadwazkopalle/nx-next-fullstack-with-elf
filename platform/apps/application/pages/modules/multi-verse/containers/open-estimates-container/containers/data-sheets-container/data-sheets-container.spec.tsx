import { render } from '@testing-library/react';

import DataSheetsContainer from '.';

describe('DataSheetsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataSheetsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
