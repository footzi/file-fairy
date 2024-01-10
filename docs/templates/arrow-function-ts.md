# Arrow Typescript function
- name: `arrow-function-ts`
- alias: `aft`
- command: `ff g aft ./src/components/some-function`

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
     "arrow-function-ts": {
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
import { SomeFunctionProps, SomeFunctionResult } from './types';

export const someFunction = (props: SomeFunctionProps): SomeFunctionResult => {
  return 'hello';
};
```

`index.ts` with **useTypesInComponent** option:
```typescript
interface SomeFunctionProps {}

interface SomeFunctionResult {}

export const someFunction = (props: SomeFunctionProps): SomeFunctionResult => {
  return 'hello';
};
```

`index.ts` with **useTypeAsKeyWord** option:
```typescript
type SomeFunctionProps = {};

type SomeFunctionResult = {};

export const someFunction = (props: SomeFunctionProps): SomeFunctionResult => {
  return 'hello';
};
```

`types.ts`:
```typescript
export interface SomeFunctionProps {}

export interface SomeFunctionResult {}
```

`types.ts` with **useTypeAsKeyWord** option::
```typescript
export type SomeFunctionProps = {};

export type SomeFunctionResult = {};
```

`__spec__/index.spec.ts`:
```typescript
import { someFunction } from '../index';

describe('someFunction', () => {
  it('should return correct result', () => {
    const props = {};
    const expectedResult = {};

    const result = someFunction(props);

    expect(result).toEqual(expectedResult);
  });
});
```
