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
import type { RpcCreateUserResponse } from './RpcCreateUserResponse';
import {
    RpcCreateUserResponseFromJSON,
    RpcCreateUserResponseFromJSONTyped,
    RpcCreateUserResponseToJSON,
    RpcCreateUserResponseToJSONTyped,
} from './RpcCreateUserResponse';

/**
 * 
 * @export
 * @interface ResponseBodyOfTheCreateUserMethod
 */
export interface ResponseBodyOfTheCreateUserMethod {
    /**
     * A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
     * @type {string}
     * @memberof ResponseBodyOfTheCreateUserMethod
     */
    jsonrpc?: ResponseBodyOfTheCreateUserMethodJsonrpcEnum;
    /**
     * It MUST be the same as the value of the id member in the Request.
     * @type {string}
     * @memberof ResponseBodyOfTheCreateUserMethod
     */
    id?: string;
    /**
     * 
     * @type {RpcError}
     * @memberof ResponseBodyOfTheCreateUserMethod
     */
    error?: RpcError;
    /**
     * 
     * @type {RpcCreateUserResponse}
     * @memberof ResponseBodyOfTheCreateUserMethod
     */
    result?: RpcCreateUserResponse;
}


/**
 * @export
 */
export const ResponseBodyOfTheCreateUserMethodJsonrpcEnum = {
    _20: '2.0'
} as const;
export type ResponseBodyOfTheCreateUserMethodJsonrpcEnum = typeof ResponseBodyOfTheCreateUserMethodJsonrpcEnum[keyof typeof ResponseBodyOfTheCreateUserMethodJsonrpcEnum];


/**
 * Check if a given object implements the ResponseBodyOfTheCreateUserMethod interface.
 */
export function instanceOfResponseBodyOfTheCreateUserMethod(value: object): value is ResponseBodyOfTheCreateUserMethod {
    return true;
}

export function ResponseBodyOfTheCreateUserMethodFromJSON(json: any): ResponseBodyOfTheCreateUserMethod {
    return ResponseBodyOfTheCreateUserMethodFromJSONTyped(json, false);
}

export function ResponseBodyOfTheCreateUserMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseBodyOfTheCreateUserMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'jsonrpc': json['jsonrpc'] == null ? undefined : json['jsonrpc'],
        'id': json['id'] == null ? undefined : json['id'],
        'error': json['error'] == null ? undefined : RpcErrorFromJSON(json['error']),
        'result': json['result'] == null ? undefined : RpcCreateUserResponseFromJSON(json['result']),
    };
}

export function ResponseBodyOfTheCreateUserMethodToJSON(json: any): ResponseBodyOfTheCreateUserMethod {
    return ResponseBodyOfTheCreateUserMethodToJSONTyped(json, false);
}

export function ResponseBodyOfTheCreateUserMethodToJSONTyped(value?: ResponseBodyOfTheCreateUserMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jsonrpc': value['jsonrpc'],
        'id': value['id'],
        'error': RpcErrorToJSON(value['error']),
        'result': RpcCreateUserResponseToJSON(value['result']),
    };
}

