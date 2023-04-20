import React from 'react';
import { render } from '@testing-library/react-native';

import { HabitIcon } from '@/components/HabitIcon';

describe('HabitIcon', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(
      <HabitIcon colour="rgb(0, 0, 0" iconName="check" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
