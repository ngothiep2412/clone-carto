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
import type { RpcUpdateUserResponse } from './RpcUpdateUserResponse';
import {
    RpcUpdateUserResponseFromJSON,
    RpcUpdateUserResponseFromJSONTyped,
    RpcUpdateUserResponseToJSON,
    RpcUpdateUserResponseToJSONTyped,
} from './RpcUpdateUserResponse';
import type { RpcError } from './RpcError';
import {
    RpcErrorFromJSON,
    RpcErrorFromJSONTyped,
    RpcErrorToJSON,
    RpcErrorToJSONTyped,
} from './RpcError';

/**
 * 
 * @export
 * @interface ResponseBodyOfTheUpdateUserMethod
 */
export interface ResponseBodyOfTheUpdateUserMethod {
    /**
     * A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
     * @type {string}
     * @memberof ResponseBodyOfTheUpdateUserMethod
     */
    jsonrpc?: ResponseBodyOfTheUpdateUserMethodJsonrpcEnum;
    /**
     * It MUST be the same as the value of the id member in the Request.
     * @type {string}
     * @memberof ResponseBodyOfTheUpdateUserMethod
     */
    id?: string;
    /**
     * 
     * @type {RpcError}
     * @memberof ResponseBodyOfTheUpdateUserMethod
     */
    error?: RpcError;
    /**
     * 
     * @type {RpcUpdateUserResponse}
     * @memberof ResponseBodyOfTheUpdateUserMethod
     */
    result?: RpcUpdateUserResponse;
}


/**
 * @export
 */
export const ResponseBodyOfTheUpdateUserMethodJsonrpcEnum = {
    _20: '2.0'
} as const;
export type ResponseBodyOfTheUpdateUserMethodJsonrpcEnum = typeof ResponseBodyOfTheUpdateUserMethodJsonrpcEnum[keyof typeof ResponseBodyOfTheUpdateUserMethodJsonrpcEnum];


/**
 * Check if a given object implements the ResponseBodyOfTheUpdateUserMethod interface.
 */
export function instanceOfResponseBodyOfTheUpdateUserMethod(value: object): value is ResponseBodyOfTheUpdateUserMethod {
    return true;
}

export function ResponseBodyOfTheUpdateUserMethodFromJSON(json: any): ResponseBodyOfTheUpdateUserMethod {
    return ResponseBodyOfTheUpdateUserMethodFromJSONTyped(json, false);
}

export function ResponseBodyOfTheUpdateUserMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseBodyOfTheUpdateUserMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'jsonrpc': json['jsonrpc'] == null ? undefined : json['jsonrpc'],
        'id': json['id'] == null ? undefined : json['id'],
        'error': json['error'] == null ? undefined : RpcErrorFromJSON(json['error']),
        'result': json['result'] == null ? undefined : RpcUpdateUserResponseFromJSON(json['result']),
    };
}

export function ResponseBodyOfTheUpdateUserMethodToJSON(json: any): ResponseBodyOfTheUpdateUserMethod {
    return ResponseBodyOfTheUpdateUserMethodToJSONTyped(json, false);
}

export function ResponseBodyOfTheUpdateUserMethodToJSONTyped(value?: ResponseBodyOfTheUpdateUserMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jsonrpc': value['jsonrpc'],
        'id': value['id'],
        'error': RpcErrorToJSON(value['error']),
        'result': RpcUpdateUserResponseToJSON(value['result']),
    };
}

