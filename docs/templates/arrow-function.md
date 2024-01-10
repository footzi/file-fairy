# Arrow function
- name: `arrow-function`
- alias: `af`
- command: `ff g af ./src/components/some-function`

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
     "arrow-function": {
       "noTest": false,
       "rewriteFiles": [],
       "rewriteAlias": ""
     }
   }
}
```

`index.js`:
```javascript
export const someFunction = () => {
  return 'hello';
};
```

`__spec__/index.spec.js`:
```javascript
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
