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
/**
 * 
 * @export
 * @interface RpcGetProblemSnippetListRequest
 */
export interface RpcGetProblemSnippetListRequest {
    /**
     * 
     * @type {number}
     * @memberof RpcGetProblemSnippetListRequest
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof RpcGetProblemSnippetListRequest
     */
    limit: number;
}

/**
 * Check if a given object implements the RpcGetProblemSnippetListRequest interface.
 */
export function instanceOfRpcGetProblemSnippetListRequest(value: object): value is RpcGetProblemSnippetListRequest {
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    return true;
}

export function RpcGetProblemSnippetListRequestFromJSON(json: any): RpcGetProblemSnippetListRequest {
    return RpcGetProblemSnippetListRequestFromJSONTyped(json, false);
}

export function RpcGetProblemSnippetListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcGetProblemSnippetListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'offset': json['Offset'],
        'limit': json['Limit'],
    };
}

export function RpcGetProblemSnippetListRequestToJSON(json: any): RpcGetProblemSnippetListRequest {
    return RpcGetProblemSnippetListRequestToJSONTyped(json, false);
}

export function RpcGetProblemSnippetListRequestToJSONTyped(value?: RpcGetProblemSnippetListRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Offset': value['offset'],
        'Limit': value['limit'],
    };
}

