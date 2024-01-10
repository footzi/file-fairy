# React hook
- name: `react-hook`
- alias: `rh`
- command: `ff g rh ./src/components/useSomeHook`

### cli options:
- `--notest` - not generate test file

### ff.config.json:
- `noTest` (`--notest` in cli) - never not generate test file
- `rewriteFiles` - rewrite files section on default config. Every file option will be rewritten by template name. See [describe config for template](https://github.com/footzi/file-fairy/blob/main/docs/config-json.md)
- `rewriteAlias` - change alias to your own

Default values:
```json
  {
   "templates": {
     "react-hook": {
       "noTest": false,
       "rewriteFiles": [],
       "rewriteAlias": ""
     }
   }
}
```

`index.js`:
```javascript
export const useSomeHook = (props) => {
  return 'hello';
};
```

`__spec__/index.spec.js`:
```javascript
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
