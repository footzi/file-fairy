# React Typescript hook
- name: `react-hook-ts`
- alias: `rht`
- command: `ff g rht ./src/components/useSomeHook`

### cli options:
- `--notest` - not generate test file
- `--notypes` - not generate types file

### ff.config.json:
- `noTest` (`--notest` in cli) - never not generate test file
- `noTypes` (`--notypes` in cli) - never not generate type file and not import type file
- `useTypesInComponent` - add types in component file and not generate types file
- `useTypeAsKeyWord` - use type keyword instead of interface
- `rewriteFiles` - rewrite files section on default config. Every file option will be rewritten by template name. See [describe config for template](https://github.com/footzi/file-fairy/blob/main/docs/config-json.md)
- `rewriteAlias` - change alias to your own

Default values:
```json
  {
   "templates": {
     "react-hook-ts": {
       "noTest": false,
       "noTypes": false,
       "useTypesInComponent": false,
       "useTypeAsKeyWord": false,
       "rewriteFiles": [],
       "rewriteAlias": ""
     }
   }
}
```

`index.ts`:
```typescript
import { UseSomeHookProps, UseSomeHookResult } from './types';

export const useSomeHook = (props: UseSomeHookProps): UseSomeHookResult => {
  return 'hello';
};
```

`index.ts` with **useTypesInComponent** option:
```typescript
interface UseSomeHookProps {}

interface UseSomeHookResult {}

export const useSomeHook = (props: UseSomeHookProps): UseSomeHookResult => {
  return 'hello';
};
```

`index.ts` with **useTypeAsKeyWord** option:
```typescript
type UseSomeHookProps = {};

type UseSomeHookResult = {};

export const useSomeHook = (props: UseSomeHookProps): UseSomeHookResult => {
  return 'hello';
};
```

`types.ts`:
```typescript
export interface UseSomeHookProps {}

export interface UseSomeHookResult {}
```

`types.ts` with **useTypeAsKeyWord** option::
```typescript
export type UseSomeHookProps = {};

export type UseSomeHookResult = {};
```

`__spec__/index.spec.ts`:
```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import { useSomeHook } from '../index';

describe('useSomeHook', () => {
  it('should return correct result', () => {
    const props = {};
    const expectedResult = {};

    const { result } = renderHook(() => useSomeHook(props));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(expectedResult);
  });
});
```
