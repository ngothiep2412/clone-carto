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
import type { RpcProblemExample } from './RpcProblemExample';
import {
    RpcProblemExampleFromJSON,
    RpcProblemExampleFromJSONTyped,
    RpcProblemExampleToJSON,
    RpcProblemExampleToJSONTyped,
} from './RpcProblemExample';
import type { RpcUser } from './RpcUser';
import {
    RpcUserFromJSON,
    RpcUserFromJSONTyped,
    RpcUserToJSON,
    RpcUserToJSONTyped,
} from './RpcUser';

/**
 * 
 * @export
 * @interface RpcCreateProblemResponse
 */
export interface RpcCreateProblemResponse {
    /**
     * 
     * @type {number}
     * @memberof RpcCreateProblemResponse
     */
    iD: number;
    /**
     * 
     * @type {string}
     * @memberof RpcCreateProblemResponse
     */
    displayName: string;
    /**
     * 
     * @type {RpcUser}
     * @memberof RpcCreateProblemResponse
     */
    author: RpcUser;
    /**
     * 
     * @type {string}
     * @memberof RpcCreateProblemResponse
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof RpcCreateProblemResponse
     */
    timeLimitInMillisecond: number;
    /**
     * 
     * @type {number}
     * @memberof RpcCreateProblemResponse
     */
    memoryLimitInByte: number;
    /**
     * 
     * @type {Array<RpcProblemExample>}
     * @memberof RpcCreateProblemResponse
     */
    exampleList: Array<RpcProblemExample>;
    /**
     * 
     * @type {number}
     * @memberof RpcCreateProblemResponse
     */
    createdTime: number;
    /**
     * 
     * @type {number}
     * @memberof RpcCreateProblemResponse
     */
    updatedTime: number;
}

/**
 * Check if a given object implements the RpcCreateProblemResponse interface.
 */
export function instanceOfRpcCreateProblemResponse(value: object): value is RpcCreateProblemResponse {
    if (!('iD' in value) || value['iD'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('author' in value) || value['author'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('timeLimitInMillisecond' in value) || value['timeLimitInMillisecond'] === undefined) return false;
    if (!('memoryLimitInByte' in value) || value['memoryLimitInByte'] === undefined) return false;
    if (!('exampleList' in value) || value['exampleList'] === undefined) return false;
    if (!('createdTime' in value) || value['createdTime'] === undefined) return false;
    if (!('updatedTime' in value) || value['updatedTime'] === undefined) return false;
    return true;
}

export function RpcCreateProblemResponseFromJSON(json: any): RpcCreateProblemResponse {
    return RpcCreateProblemResponseFromJSONTyped(json, false);
}

export function RpcCreateProblemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcCreateProblemResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'iD': json['ID'],
        'displayName': json['DisplayName'],
        'author': RpcUserFromJSON(json['Author']),
        'description': json['Description'],
        'timeLimitInMillisecond': json['TimeLimitInMillisecond'],
        'memoryLimitInByte': json['MemoryLimitInByte'],
        'exampleList': ((json['ExampleList'] as Array<any>).map(RpcProblemExampleFromJSON)),
        'createdTime': json['CreatedTime'],
        'updatedTime': json['UpdatedTime'],
    };
}

export function RpcCreateProblemResponseToJSON(json: any): RpcCreateProblemResponse {
    return RpcCreateProblemResponseToJSONTyped(json, false);
}

export function RpcCreateProblemResponseToJSONTyped(value?: RpcCreateProblemResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ID': value['iD'],
        'DisplayName': value['displayName'],
        'Author': RpcUserToJSON(value['author']),
        'Description': value['description'],
        'TimeLimitInMillisecond': value['timeLimitInMillisecond'],
        'MemoryLimitInByte': value['memoryLimitInByte'],
        'ExampleList': ((value['exampleList'] as Array<any>).map(RpcProblemExampleToJSON)),
        'CreatedTime': value['createdTime'],
        'UpdatedTime': value['updatedTime'],
    };
}

