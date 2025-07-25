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
 * @interface RpcCreateSessionRequest
 */
export interface RpcCreateSessionRequest {
    /**
     * 
     * @type {string}
     * @memberof RpcCreateSessionRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof RpcCreateSessionRequest
     */
    password: string;
}

/**
 * Check if a given object implements the RpcCreateSessionRequest interface.
 */
export function instanceOfRpcCreateSessionRequest(value: object): value is RpcCreateSessionRequest {
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    return true;
}

export function RpcCreateSessionRequestFromJSON(json: any): RpcCreateSessionRequest {
    return RpcCreateSessionRequestFromJSONTyped(json, false);
}

export function RpcCreateSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcCreateSessionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['Username'],
        'password': json['Password'],
    };
}

export function RpcCreateSessionRequestToJSON(json: any): RpcCreateSessionRequest {
    return RpcCreateSessionRequestToJSONTyped(json, false);
}

export function RpcCreateSessionRequestToJSONTyped(value?: RpcCreateSessionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Username': value['username'],
        'Password': value['password'],
    };
}

