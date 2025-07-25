/* tslint:disable */
/* eslint-disable */
/**
 * API
 * Generated by genpjrpc: v0.5.0
 *
 * The version of the OpenAPI document: v0.0.0-unknown
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { RpcError } from './RpcError';
import {
    RpcErrorFromJSON,
    RpcErrorFromJSONTyped,
    RpcErrorToJSON,
    RpcErrorToJSONTyped,
} from './RpcError';
import type { RpcGetProblemSubmissionSnippetListResponse } from './RpcGetProblemSubmissionSnippetListResponse';
import {
    RpcGetProblemSubmissionSnippetListResponseFromJSON,
    RpcGetProblemSubmissionSnippetListResponseFromJSONTyped,
    RpcGetProblemSubmissionSnippetListResponseToJSON,
    RpcGetProblemSubmissionSnippetListResponseToJSONTyped,
} from './RpcGetProblemSubmissionSnippetListResponse';

/**
 * 
 * @export
 * @interface ResponseBodyOfTheGetProblemSubmissionSnippetListMethod
 */
export interface ResponseBodyOfTheGetProblemSubmissionSnippetListMethod {
    /**
     * A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
     * @type {string}
     * @memberof ResponseBodyOfTheGetProblemSubmissionSnippetListMethod
     */
    jsonrpc?: ResponseBodyOfTheGetProblemSubmissionSnippetListMethodJsonrpcEnum;
    /**
     * It MUST be the same as the value of the id member in the Request.
     * @type {string}
     * @memberof ResponseBodyOfTheGetProblemSubmissionSnippetListMethod
     */
    id?: string;
    /**
     * 
     * @type {RpcError}
     * @memberof ResponseBodyOfTheGetProblemSubmissionSnippetListMethod
     */
    error?: RpcError;
    /**
     * 
     * @type {RpcGetProblemSubmissionSnippetListResponse}
     * @memberof ResponseBodyOfTheGetProblemSubmissionSnippetListMethod
     */
    result?: RpcGetProblemSubmissionSnippetListResponse;
}


/**
 * @export
 */
export const ResponseBodyOfTheGetProblemSubmissionSnippetListMethodJsonrpcEnum = {
    _20: '2.0'
} as const;
export type ResponseBodyOfTheGetProblemSubmissionSnippetListMethodJsonrpcEnum = typeof ResponseBodyOfTheGetProblemSubmissionSnippetListMethodJsonrpcEnum[keyof typeof ResponseBodyOfTheGetProblemSubmissionSnippetListMethodJsonrpcEnum];


/**
 * Check if a given object implements the ResponseBodyOfTheGetProblemSubmissionSnippetListMethod interface.
 */
export function instanceOfResponseBodyOfTheGetProblemSubmissionSnippetListMethod(value: object): value is ResponseBodyOfTheGetProblemSubmissionSnippetListMethod {
    return true;
}

export function ResponseBodyOfTheGetProblemSubmissionSnippetListMethodFromJSON(json: any): ResponseBodyOfTheGetProblemSubmissionSnippetListMethod {
    return ResponseBodyOfTheGetProblemSubmissionSnippetListMethodFromJSONTyped(json, false);
}

export function ResponseBodyOfTheGetProblemSubmissionSnippetListMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseBodyOfTheGetProblemSubmissionSnippetListMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'jsonrpc': json['jsonrpc'] == null ? undefined : json['jsonrpc'],
        'id': json['id'] == null ? undefined : json['id'],
        'error': json['error'] == null ? undefined : RpcErrorFromJSON(json['error']),
        'result': json['result'] == null ? undefined : RpcGetProblemSubmissionSnippetListResponseFromJSON(json['result']),
    };
}

export function ResponseBodyOfTheGetProblemSubmissionSnippetListMethodToJSON(json: any): ResponseBodyOfTheGetProblemSubmissionSnippetListMethod {
    return ResponseBodyOfTheGetProblemSubmissionSnippetListMethodToJSONTyped(json, false);
}

export function ResponseBodyOfTheGetProblemSubmissionSnippetListMethodToJSONTyped(value?: ResponseBodyOfTheGetProblemSubmissionSnippetListMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jsonrpc': value['jsonrpc'],
        'id': value['id'],
        'error': RpcErrorToJSON(value['error']),
        'result': RpcGetProblemSubmissionSnippetListResponseToJSON(value['result']),
    };
}

