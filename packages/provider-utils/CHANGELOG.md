# @ai-sdk/provider-utils

## 1.0.13

### Patch Changes

- Updated dependencies [6ac355e]
  - @ai-sdk/provider@0.0.20

## 1.0.12

### Patch Changes

- dd712ac: fix: use FetchFunction type to prevent self-reference

## 1.0.11

### Patch Changes

- Updated dependencies [dd4a0f5]
  - @ai-sdk/provider@0.0.19

## 1.0.10

### Patch Changes

- 4bd27a9: chore (ai/provider): refactor type validation
- 845754b: fix (ai/provider): fix atob/btoa execution on cloudflare edge workers
- Updated dependencies [4bd27a9]
  - @ai-sdk/provider@0.0.18

## 1.0.9

### Patch Changes

- Updated dependencies [029af4c]
  - @ai-sdk/provider@0.0.17

## 1.0.8

### Patch Changes

- Updated dependencies [d58517b]
  - @ai-sdk/provider@0.0.16

## 1.0.7

### Patch Changes

- Updated dependencies [96aed25]
  - @ai-sdk/provider@0.0.15

## 1.0.6

### Patch Changes

- 9614584: fix (ai/core): use Symbol.for
- 0762a22: feat (ai/core): support zod transformers in generateObject & streamObject

## 1.0.5

### Patch Changes

- a8d1c9e9: feat (ai/core): parallel image download
- Updated dependencies [a8d1c9e9]
  - @ai-sdk/provider@0.0.14

## 1.0.4

### Patch Changes

- 4f88248f: feat (core): support json schema

## 1.0.3

### Patch Changes

- Updated dependencies [2b9da0f0]
- Updated dependencies [a5b58845]
- Updated dependencies [4aa8deb3]
- Updated dependencies [13b27ec6]
  - @ai-sdk/provider@0.0.13

## 1.0.2

### Patch Changes

- Updated dependencies [b7290943]
  - @ai-sdk/provider@0.0.12

## 1.0.1

### Patch Changes

- d481729f: fix (ai/provider-utils): generalize to Error (DomException not always available)

## 1.0.0

### Major Changes

- 5edc6110: feat (provider-utils): change getRequestHeader() test helper to return Record (breaking change)

### Patch Changes

- 5edc6110: feat (provider-utils): add combineHeaders helper
- Updated dependencies [5edc6110]
  - @ai-sdk/provider@0.0.11

## 0.0.16

### Patch Changes

- 02f6a088: feat (provider-utils): add convertArrayToAsyncIterable test helper

## 0.0.15

### Patch Changes

- 85712895: feat (@ai-sdk/provider-utils): add createJsonStreamResponseHandler
- 85712895: chore (@ai-sdk/provider-utils): move test helper to provider utils

## 0.0.14

### Patch Changes

- 7910ae84: feat (providers): support custom fetch implementations

## 0.0.13

### Patch Changes

- Updated dependencies [102ca22f]
  - @ai-sdk/provider@0.0.10

## 0.0.12

### Patch Changes

- 09295e2e: feat (@ai-sdk/provider-utils): add download helper
- 043a5de2: fix (provider-utils): rename to isParsableJson
- Updated dependencies [09295e2e]
  - @ai-sdk/provider@0.0.9

## 0.0.11

### Patch Changes

- Updated dependencies [f39c0dd2]
  - @ai-sdk/provider@0.0.8

## 0.0.10

### Patch Changes

- Updated dependencies [8e780288]
  - @ai-sdk/provider@0.0.7

## 0.0.9

### Patch Changes

- 6a50ac4: feat (provider-utils): add loadSetting and convertAsyncGeneratorToReadableStream helpers
- Updated dependencies [6a50ac4]
  - @ai-sdk/provider@0.0.6

## 0.0.8

### Patch Changes

- Updated dependencies [0f6bc4e]
  - @ai-sdk/provider@0.0.5

## 0.0.7

### Patch Changes

- Updated dependencies [325ca55]
  - @ai-sdk/provider@0.0.4

## 0.0.6

### Patch Changes

- 276f22b: fix (ai/provider): improve request error handling

## 0.0.5

### Patch Changes

- Updated dependencies [41d5736]
  - @ai-sdk/provider@0.0.3

## 0.0.4

### Patch Changes

- 56ef84a: ai/core: fix abort handling in transformation stream

## 0.0.3

### Patch Changes

- 25f3350: ai/core: add support for getting raw response headers.
- Updated dependencies [d6431ae]
- Updated dependencies [25f3350]
  - @ai-sdk/provider@0.0.2

## 0.0.2

### Patch Changes

- eb150a6: ai/core: remove scaling of setting values (breaking change). If you were using the temperature, frequency penalty, or presence penalty settings, you need to update the providers and adjust the setting values.
- Updated dependencies [eb150a6]
  - @ai-sdk/provider@0.0.1

## 0.0.1

### Patch Changes

- 7b8791d: Rename baseUrl to baseURL. Automatically remove trailing slashes.
