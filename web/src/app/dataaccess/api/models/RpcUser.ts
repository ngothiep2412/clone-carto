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
import type { RpcUserRole } from './RpcUserRole';
import {
    RpcUserRoleFromJSON,
    RpcUserRoleFromJSONTyped,
    RpcUserRoleToJSON,
    RpcUserRoleToJSONTyped,
} from './RpcUserRole';

/**
 * 
 * @export
 * @interface RpcUser
 */
export interface RpcUser {
    /**
     * 
     * @type {number}
     * @memberof RpcUser
     */
    iD: number;
    /**
     * 
     * @type {string}
     * @memberof RpcUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof RpcUser
     */
    displayName: string;
    /**
     * 
     * @type {RpcUserRole}
     * @memberof RpcUser
     */
    role: RpcUserRole;
}



/**
 * Check if a given object implements the RpcUser interface.
 */
export function instanceOfRpcUser(value: object): value is RpcUser {
    if (!('iD' in value) || value['iD'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function RpcUserFromJSON(json: any): RpcUser {
    return RpcUserFromJSONTyped(json, false);
}

export function RpcUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcUser {
    if (json == null) {
        return json;
    }
    return {
        
        'iD': json['ID'],
        'username': json['Username'],
        'displayName': json['DisplayName'],
        'role': RpcUserRoleFromJSON(json['Role']),
    };
}

export function RpcUserToJSON(json: any): RpcUser {
    return RpcUserToJSONTyped(json, false);
}

export function RpcUserToJSONTyped(value?: RpcUser | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ID': value['iD'],
        'Username': value['username'],
        'DisplayName': value['displayName'],
        'Role': RpcUserRoleToJSON(value['role']),
    };
}

