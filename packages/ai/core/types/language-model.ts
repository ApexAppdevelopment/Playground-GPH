import {
  LanguageModelV1,
  LanguageModelV1CallWarning,
  LanguageModelV1FinishReason,
  LanguageModelV1LogProbs,
  LanguageModelV1ProviderMetadata,
} from '@ai-sdk/provider';

/**
Language model that is used by the AI SDK Core functions.
*/
export type LanguageModel = LanguageModelV1;

/**
Reason why a language model finished generating a response.

Can be one of the following:
- `stop`: model generated stop sequence
- `length`: model generated maximum number of tokens
- `content-filter`: content filter violation stopped the model
- `tool-calls`: model triggered tool calls
- `error`: model stopped because of an error
- `other`: model stopped for other reasons
*/
export type FinishReason = LanguageModelV1FinishReason;

/**
Log probabilities for each token and its top log probabilities.
 */
export type LogProbs = LanguageModelV1LogProbs;

/**
Warning from the model provider for this call. The call will proceed, but e.g.
some settings might not be supported, which can lead to suboptimal results.
*/
export type CallWarning = LanguageModelV1CallWarning;

/**
Additional provider-specific metadata. They are passed through
to the provider from the AI SDK and enable provider-specific
functionality that can be fully encapsulated in the provider.
 */
export type ProviderMetadata = LanguageModelV1ProviderMetadata;

/**
Tool choice for the generation. It supports the following settings:

- `auto` (default): the model can choose whether and which tools to call.
- `required`: the model must call a tool. It can choose which tool to call.
- `none`: the model must not call tools
- `{ type: 'tool', toolName: string (typed) }`: the model must call the specified tool
 */
// TODO rename to ToolChoice once shared/types.ts ToolChoice is gone
export type CoreToolChoice<TOOLS extends Record<string, unknown>> =
  | 'auto'
  | 'none'
  | 'required'
  | { type: 'tool'; toolName: keyof TOOLS };
