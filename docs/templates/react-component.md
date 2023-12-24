# React component
- name: `react-component`
- alias: `rc`
- command: `ff g rc ./src/components/SomeComponent`

### cli options:
- `--nost` - not generate style file
- `--notest` - not generate test file

### ff.config.json:
- `noStyle` (`--nost` in cli) - never not generate style file and not import style file
- `noTest` (`--notest` in cli) - never not generate test file
- `rewriteFiles` - rewrite files section on default config. Every file option will be rewritten by template name. See [describe config for template](https://github.com/footzi/file-fairy/blob/main/docs/config-json.md)
- `rewriteAlias` - change alias to your own

Default values:
```json
  {
   "templates": {
      "react-component": {
        "noTest": false,
        "noStyle": false,
        "rewriteFiles": [],
        "rewriteAlias": ""
      }
   }
}
```

`index.jsx`:
```javascript jsx
import React from 'react';
import styles from './index.css';

export const SomeComponent = (props) => {
  return <h1 className={styles.root}>Hello</h1>;
};
```

`index.jsx` with **noStyle** option:
```typescript jsx
import React from 'react';

export const SomeComponent = (props) => {
  return <h1>Hello</h1>;
};
```

`__spec__/index.spec.jsx`:
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
