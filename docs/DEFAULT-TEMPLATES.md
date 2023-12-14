# Default Templates

### React Typescript component
command: `ff g rct ./src/components/Test`

The following files will be generated:

`index.tsx`:
```typescript
import React from 'react';
import { TestProps } from './types';

export const Test: React.FC<TestProps> = (props) => {
  return <h1>Test</h1>;
};
```

`types.ts`:
```typescript
export interface TestProps {}
```

`__spec__/index.spec.tsx`:
```typescript
import { render } from '@testing-library/react';
import { Test } from '../index';

describe('Test', () => {
  it('should render', () => {
    render(Test);
  });
});
```

### React Typescript hook
command: `ff g rht ./src/hooks/useTest`

The following files will be generated:

`index.tsx`:
```typescript
import { UseTestProps, UseTestResult } from './types';

export const useTest = (props: UseTestProps): UseTestResult => {
  return 'hello';
};
```

`types.ts`:
```typescript
export interface UseTestProps {}

export interface UseTestResult {}
```

`__spec__/index.spec.ts`:
```typescript
import { renderHook, act } from '@testing-library/react-hooks'
import { useTest } from '../index';

describe('useTest', () => {
  it('should return correct result', () => {
    const { result } = renderHook(() => useTest());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

### Typescript arrow function
command: `ff g aft ./src/utils/getTest`

The following files will be generated:
`index.tsx`:
```typescript
import { GetDataProps, GetDataResult } from './types';

export const getData = (props: GetDataProps): GetDataResult => {
  return 'hello';
};
```

`types.ts`:
```typescript
export interface GetDataProps {}

export interface GetDataResult {}
```

`__spec__/index.spec.ts`:
```typescript
import { getData } from '../index';

describe('getData', () => {
  it('should return correct result', () => {
    const props = {};
    const result = {};

    expect(getData(props)).toEqual(result);
  });
});
```