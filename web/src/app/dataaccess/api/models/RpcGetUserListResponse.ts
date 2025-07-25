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
 * @interface RpcGetUserListResponse
 */
export interface RpcGetUserListResponse {
    /**
     * 
     * @type {number}
     * @memberof RpcGetUserListResponse
     */
    totalUserCount: number;
    /**
     * 
     * @type {Array<RpcUser>}
     * @memberof RpcGetUserListResponse
     */
    userList: Array<RpcUser>;
}

/**
 * Check if a given object implements the RpcGetUserListResponse interface.
 */
export function instanceOfRpcGetUserListResponse(value: object): value is RpcGetUserListResponse {
    if (!('totalUserCount' in value) || value['totalUserCount'] === undefined) return false;
    if (!('userList' in value) || value['userList'] === undefined) return false;
    return true;
}

export function RpcGetUserListResponseFromJSON(json: any): RpcGetUserListResponse {
    return RpcGetUserListResponseFromJSONTyped(json, false);
}

export function RpcGetUserListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcGetUserListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'totalUserCount': json['TotalUserCount'],
        'userList': ((json['UserList'] as Array<any>).map(RpcUserFromJSON)),
    };
}

export function RpcGetUserListResponseToJSON(json: any): RpcGetUserListResponse {
    return RpcGetUserListResponseToJSONTyped(json, false);
}

export function RpcGetUserListResponseToJSONTyped(value?: RpcGetUserListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'TotalUserCount': value['totalUserCount'],
        'UserList': ((value['userList'] as Array<any>).map(RpcUserToJSON)),
    };
}

