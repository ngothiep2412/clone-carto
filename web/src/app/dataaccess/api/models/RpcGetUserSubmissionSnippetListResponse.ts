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
import type { RpcSubmissionSnippet } from './RpcSubmissionSnippet';
import {
    RpcSubmissionSnippetFromJSON,
    RpcSubmissionSnippetFromJSONTyped,
    RpcSubmissionSnippetToJSON,
    RpcSubmissionSnippetToJSONTyped,
} from './RpcSubmissionSnippet';

/**
 * 
 * @export
 * @interface RpcGetUserSubmissionSnippetListResponse
 */
export interface RpcGetUserSubmissionSnippetListResponse {
    /**
     * 
     * @type {number}
     * @memberof RpcGetUserSubmissionSnippetListResponse
     */
    totalSubmissionCount: number;
    /**
     * 
     * @type {Array<RpcSubmissionSnippet>}
     * @memberof RpcGetUserSubmissionSnippetListResponse
     */
    submissionSnippetList: Array<RpcSubmissionSnippet>;
}

/**
 * Check if a given object implements the RpcGetUserSubmissionSnippetListResponse interface.
 */
export function instanceOfRpcGetUserSubmissionSnippetListResponse(value: object): value is RpcGetUserSubmissionSnippetListResponse {
    if (!('totalSubmissionCount' in value) || value['totalSubmissionCount'] === undefined) return false;
    if (!('submissionSnippetList' in value) || value['submissionSnippetList'] === undefined) return false;
    return true;
}

export function RpcGetUserSubmissionSnippetListResponseFromJSON(json: any): RpcGetUserSubmissionSnippetListResponse {
    return RpcGetUserSubmissionSnippetListResponseFromJSONTyped(json, false);
}

export function RpcGetUserSubmissionSnippetListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcGetUserSubmissionSnippetListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'totalSubmissionCount': json['TotalSubmissionCount'],
        'submissionSnippetList': ((json['SubmissionSnippetList'] as Array<any>).map(RpcSubmissionSnippetFromJSON)),
    };
}

export function RpcGetUserSubmissionSnippetListResponseToJSON(json: any): RpcGetUserSubmissionSnippetListResponse {
    return RpcGetUserSubmissionSnippetListResponseToJSONTyped(json, false);
}

export function RpcGetUserSubmissionSnippetListResponseToJSONTyped(value?: RpcGetUserSubmissionSnippetListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'TotalSubmissionCount': value['totalSubmissionCount'],
        'SubmissionSnippetList': ((value['submissionSnippetList'] as Array<any>).map(RpcSubmissionSnippetToJSON)),
    };
}

