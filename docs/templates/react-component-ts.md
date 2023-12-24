# React Typescript component
- name: `react-component-ts`
- alias: `rct`
- command: `ff g rct ./src/components/SomeComponent`

### cli options:
- `--nost` - not generate style file
- `--notest` - not generate test file
- `--notypes` - not generate types file

### ff.config.json:
- `noStyle` (`--nost` in cli) - never not generate style file and not import style file
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
      "react-component-ts": {
        "noStyle": false,
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

`index.tsx`:
```typescript jsx
import React, { FC } from 'react';
import { SomeComponentProps } from './types';
import styles from './index.css';

export const SomeComponent: FC<SomeComponentProps> = (props) => {
  return <h1 className={styles.root}>Hello</h1>;
};
```

`index.tsx` with **noStyle** option:
```typescript jsx
import { SomeComponentProps } from './types';

export const SomeComponent: FC<SomeComponentProps> = (props) => {
  return <h1>Hello</h1>;
};
```

`index.tsx` with **useTypesInComponent** option:
```typescript jsx
import React, { FC } from 'react';

interface SomeComponentProps {}

export const SomeComponent: FC<SomeComponentProps> = (props) => {
  return <h1>Hello</h1>;
};
```

`index.tsx` with **useTypeAsKeyWord** option:
```typescript jsx
import React, { FC } from 'react';

type SomeComponentProps = {};

export const SomeComponent: FC<SomeComponentProps> = (props) => {
  return <h1>Hello</h1>;
};
```

`types.ts`:
```typescript
export interface TestProps {}
```

`types.ts` with useTypeAsKeyWord option::
```typescript
export type SomeComponentProps = {}
```

`__spec__/index.spec.tsx`:
```typescript
import { render } from '@testing-library/react';
import { SomeComponent } from '../index';

describe('SomeComponent', () => {
  it('should render', () => {
    render(SomeComponent);
  });
});
```

`index.css`:
```css
.root {

}
```
