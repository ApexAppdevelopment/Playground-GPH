# @ai-sdk/openai

## 0.0.48

### Patch Changes

- Updated dependencies [6ac355e]
  - @ai-sdk/provider@0.0.20
  - @ai-sdk/provider-utils@1.0.13

## 0.0.47

### Patch Changes

- 4ffbaee: fix (provider/openai): fix strict flag for structured outputs with tools
- dd712ac: fix: use FetchFunction type to prevent self-reference
- Updated dependencies [dd712ac]
  - @ai-sdk/provider-utils@1.0.12

## 0.0.46

### Patch Changes

- 89b18ca: fix (ai/provider): send finish reason 'unknown' by default
- Updated dependencies [dd4a0f5]
  - @ai-sdk/provider@0.0.19
  - @ai-sdk/provider-utils@1.0.11

## 0.0.45

### Patch Changes

- Updated dependencies [4bd27a9]
- Updated dependencies [845754b]
  - @ai-sdk/provider-utils@1.0.10
  - @ai-sdk/provider@0.0.18

## 0.0.44

### Patch Changes

- 029af4c: feat (ai/core): support schema name & description in generateObject & streamObject
- Updated dependencies [029af4c]
  - @ai-sdk/provider@0.0.17
  - @ai-sdk/provider-utils@1.0.9

## 0.0.43

### Patch Changes

- d58517b: feat (ai/openai): structured outputs
- c0a73ee: feat (provider/openai): add gpt-4o-2024-08-06 to list of supported models
- Updated dependencies [d58517b]
  - @ai-sdk/provider@0.0.16
  - @ai-sdk/provider-utils@1.0.8

## 0.0.42

### Patch Changes

- Updated dependencies [96aed25]
  - @ai-sdk/provider@0.0.15
  - @ai-sdk/provider-utils@1.0.7

## 0.0.41

### Patch Changes

- 7a2eb27: feat (provider/openai): make role nullish to enhance provider support
- Updated dependencies [9614584]
- Updated dependencies [0762a22]
  - @ai-sdk/provider-utils@1.0.6

## 0.0.40

### Patch Changes

- Updated dependencies [a8d1c9e9]
  - @ai-sdk/provider-utils@1.0.5
  - @ai-sdk/provider@0.0.14

## 0.0.39

### Patch Changes

- Updated dependencies [4f88248f]
  - @ai-sdk/provider-utils@1.0.4

## 0.0.38

### Patch Changes

- 2b9da0f0: feat (core): support stopSequences setting.
- 909b9d27: feat (ai/openai): Support legacy function calls
- a5b58845: feat (core): support topK setting
- 4aa8deb3: feat (provider): support responseFormat setting in provider api
- 13b27ec6: chore (ai/core): remove grammar mode
- Updated dependencies [2b9da0f0]
- Updated dependencies [a5b58845]
- Updated dependencies [4aa8deb3]
- Updated dependencies [13b27ec6]
  - @ai-sdk/provider@0.0.13
  - @ai-sdk/provider-utils@1.0.3

## 0.0.37

### Patch Changes

- 89947fc5: chore (provider/openai): update model list for type-ahead support

## 0.0.36

### Patch Changes

- b7290943: feat (ai/core): add token usage to embed and embedMany
- Updated dependencies [b7290943]
  - @ai-sdk/provider@0.0.12
  - @ai-sdk/provider-utils@1.0.2

## 0.0.35

### Patch Changes

- Updated dependencies [d481729f]
  - @ai-sdk/provider-utils@1.0.1

## 0.0.34

### Patch Changes

- 5edc6110: feat (ai/core): add custom request header support
- Updated dependencies [5edc6110]
- Updated dependencies [5edc6110]
- Updated dependencies [5edc6110]
  - @ai-sdk/provider@0.0.11
  - @ai-sdk/provider-utils@1.0.0

## 0.0.33

### Patch Changes

- Updated dependencies [02f6a088]
  - @ai-sdk/provider-utils@0.0.16

## 0.0.32

### Patch Changes

- 1b37b8b9: fix (@ai-sdk/openai): only send logprobs settings when logprobs are requested

## 0.0.31

### Patch Changes

- eba071dd: feat (@ai-sdk/azure): add azure openai completion support
- 1ea890fe: feat (@ai-sdk/azure): add azure openai completion support

## 0.0.30

### Patch Changes

- Updated dependencies [85712895]
- Updated dependencies [85712895]
  - @ai-sdk/provider-utils@0.0.15

## 0.0.29

### Patch Changes

- 4728c37f: feat (core): add text embedding model support to provider registry
- 7910ae84: feat (providers): support custom fetch implementations
- Updated dependencies [7910ae84]
  - @ai-sdk/provider-utils@0.0.14

## 0.0.28

### Patch Changes

- f9db8fd6: feat (@ai-sdk/openai): add parallelToolCalls setting

## 0.0.27

### Patch Changes

- fc9552ec: fix (@ai-sdk/azure): allow for nullish delta

## 0.0.26

### Patch Changes

- 7530f861: fix (@ai-sdk/openai): add internal dist to bundle

## 0.0.25

### Patch Changes

- 8b1362a7: chore (@ai-sdk/openai): expose models under /internal for reuse in other providers

## 0.0.24

### Patch Changes

- 0e78960c: fix (@ai-sdk/openai): make function name and arguments nullish

## 0.0.23

### Patch Changes

- a68fe74a: fix (@ai-sdk/openai): allow null tool_calls value.

## 0.0.22

### Patch Changes

- Updated dependencies [102ca22f]
  - @ai-sdk/provider@0.0.10
  - @ai-sdk/provider-utils@0.0.13

## 0.0.21

### Patch Changes

- fca7d026: feat (provider/openai): support streaming tool calls that are sent in one chunk
- Updated dependencies [09295e2e]
- Updated dependencies [09295e2e]
- Updated dependencies [043a5de2]
  - @ai-sdk/provider@0.0.9
  - @ai-sdk/provider-utils@0.0.12

## 0.0.20

### Patch Changes

- a1d08f3e: fix (provider/openai): handle error chunks when streaming

## 0.0.19

### Patch Changes

- beb8b739: fix (provider/openai): return unknown finish reasons as unknown

## 0.0.18

### Patch Changes

- fb42e760: feat (provider/openai): send user message content as text when possible

## 0.0.17

### Patch Changes

- f39c0dd2: feat (provider): implement toolChoice support
- Updated dependencies [f39c0dd2]
  - @ai-sdk/provider@0.0.8
  - @ai-sdk/provider-utils@0.0.11

## 0.0.16

### Patch Changes

- 2b18fa11: fix (provider/openai): remove object type validation

## 0.0.15

### Patch Changes

- 24683b72: fix (providers): Zod is required dependency
- Updated dependencies [8e780288]
  - @ai-sdk/provider@0.0.7
  - @ai-sdk/provider-utils@0.0.10

## 0.0.14

### Patch Changes

- Updated dependencies [6a50ac4]
- Updated dependencies [6a50ac4]
  - @ai-sdk/provider@0.0.6
  - @ai-sdk/provider-utils@0.0.9

## 0.0.13

### Patch Changes

- 4e3c922: fix (provider/openai): introduce compatibility mode in which "stream_options" are not sent

## 0.0.12

### Patch Changes

- 6f48839: feat (provider/openai): add gpt-4o to the list of supported models
- 1009594: feat (provider/openai): set stream_options/include_usage to true when streaming
- 0f6bc4e: feat (ai/core): add embed function
- Updated dependencies [0f6bc4e]
  - @ai-sdk/provider@0.0.5
  - @ai-sdk/provider-utils@0.0.8

## 0.0.11

### Patch Changes

- Updated dependencies [325ca55]
  - @ai-sdk/provider@0.0.4
  - @ai-sdk/provider-utils@0.0.7

## 0.0.10

### Patch Changes

- Updated dependencies [276f22b]
  - @ai-sdk/provider-utils@0.0.6

## 0.0.9

### Patch Changes

- Updated dependencies [41d5736]
  - @ai-sdk/provider@0.0.3
  - @ai-sdk/provider-utils@0.0.5

## 0.0.8

### Patch Changes

- Updated dependencies [56ef84a]
  - @ai-sdk/provider-utils@0.0.4

## 0.0.7

### Patch Changes

- 0833e19: Allow optional content to support Fireworks function calling.

## 0.0.6

### Patch Changes

- d6431ae: ai/core: add logprobs support (thanks @SamStenner for the contribution)
- 25f3350: ai/core: add support for getting raw response headers.
- Updated dependencies [d6431ae]
- Updated dependencies [25f3350]
  - @ai-sdk/provider@0.0.2
  - @ai-sdk/provider-utils@0.0.3

## 0.0.5

### Patch Changes

- eb150a6: ai/core: remove scaling of setting values (breaking change). If you were using the temperature, frequency penalty, or presence penalty settings, you need to update the providers and adjust the setting values.
- Updated dependencies [eb150a6]
  - @ai-sdk/provider-utils@0.0.2
  - @ai-sdk/provider@0.0.1

## 0.0.4

### Patch Changes

- c6fc35b: Add custom header and OpenAI project support.

## 0.0.3

### Patch Changes

- ab60b18: Simplified model construction by directly calling provider functions. Add create... functions to create provider instances.

## 0.0.2

### Patch Changes

- 2bff460: Fix build for release.

## 0.0.1

### Patch Changes

- 7b8791d: Support streams with 'chat.completion' objects.
- 7b8791d: Rename baseUrl to baseURL. Automatically remove trailing slashes.
- Updated dependencies [7b8791d]
  - @ai-sdk/provider-utils@0.0.1
