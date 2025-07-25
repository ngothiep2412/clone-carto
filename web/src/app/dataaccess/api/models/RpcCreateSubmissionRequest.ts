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
 * @interface RpcCreateSubmissionRequest
 */
export interface RpcCreateSubmissionRequest {
    /**
     * 
     * @type {number}
     * @memberof RpcCreateSubmissionRequest
     */
    problemID: number;
    /**
     * 
     * @type {number}
     * @memberof RpcCreateSubmissionRequest
     */
    authorUserID: number;
    /**
     * 
     * @type {string}
     * @memberof RpcCreateSubmissionRequest
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof RpcCreateSubmissionRequest
     */
    language: string;
}

/**
 * Check if a given object implements the RpcCreateSubmissionRequest interface.
 */
export function instanceOfRpcCreateSubmissionRequest(value: object): value is RpcCreateSubmissionRequest {
    if (!('problemID' in value) || value['problemID'] === undefined) return false;
    if (!('authorUserID' in value) || value['authorUserID'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    return true;
}

export function RpcCreateSubmissionRequestFromJSON(json: any): RpcCreateSubmissionRequest {
    return RpcCreateSubmissionRequestFromJSONTyped(json, false);
}

export function RpcCreateSubmissionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcCreateSubmissionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'problemID': json['ProblemID'],
        'authorUserID': json['AuthorUserID'],
        'content': json['Content'],
        'language': json['Language'],
    };
}

export function RpcCreateSubmissionRequestToJSON(json: any): RpcCreateSubmissionRequest {
    return RpcCreateSubmissionRequestToJSONTyped(json, false);
}

export function RpcCreateSubmissionRequestToJSONTyped(value?: RpcCreateSubmissionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ProblemID': value['problemID'],
        'AuthorUserID': value['authorUserID'],
        'Content': value['content'],
        'Language': value['language'],
    };
}

