/* tslint:disable */
/* eslint-disable */
/**
 * Mincuru Cars App
 * Mincuru Cars App API仕様
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: awwa500@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CodeResponse
 */
export interface CodeResponse {
    /**
     * 
     * @type {number}
     * @memberof CodeResponse
     */
    'code': number;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface IdResponse
 */
export interface IdResponse {
    /**
     * 
     * @type {number}
     * @memberof IdResponse
     */
    'id': number;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface PatchUserMeRequest
 */
export interface PatchUserMeRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchUserMeRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserMeRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserMeRequest
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface PatchUserRequest
 */
export interface PatchUserRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequest
     */
    'role'?: PatchUserRequestRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequest
     */
    'password'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum PatchUserRequestRoleEnum {
    User = 'user',
    Admin = 'admin'
}

/**
 * 
 * @export
 * @interface PostUserRequest
 */
export interface PostUserRequest {
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'role': PostUserRequestRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'password': string;
}

/**
    * @export
    * @enum {string}
    */
export enum PostUserRequestRoleEnum {
    User = 'user',
    Admin = 'admin'
}

/**
 * 
 * @export
 * @interface TokenResponse
 */
export interface TokenResponse {
    /**
     * 
     * @type {number}
     * @memberof TokenResponse
     */
    'code': number;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    'expire': string;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    'token': string;
}
/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {number}
     * @memberof UserResponse
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'role': UserResponseRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'updated_at': string;
    /**
     * 
     * @type {number}
     * @memberof UserResponse
     */
    'is_del': number;
}

/**
    * @export
    * @enum {string}
    */
export enum UserResponseRoleEnum {
    User = 'user',
    Admin = 'admin'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ユーザの削除
         * @param {number} id 対象AdminのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 指定したIDの\'UserResponse\'取得
         * @param {number} id 対象AdminのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 自アカウントのユーザー情報取得
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMe: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 条件にマッチしたユーザの一覧取得
         * @param {string} [email] メールアドレス
         * @param {string} [name] 名前
         * @param {'user' | 'admin'} [role] ロール
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (email?: string, name?: string, role?: 'user' | 'admin', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (role !== undefined) {
                localVarQueryParameter['role'] = role;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * トークン更新
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersRefreshToken: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/refresh_token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザの更新
         * @param {number} id 対象AdminのID
         * @param {PatchUserRequest} [patchUserRequest] 更新するAdmin情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUser: async (id: number, patchUserRequest?: PatchUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 自アカウントのユーザ情報更新
         * @param {PatchUserMeRequest} [patchUserMeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserMe: async (patchUserMeRequest?: PatchUserMeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchUserMeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザの追加
         * @param {PostUserRequest} [postUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsers: async (postUserRequest?: PostUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ログイン
         * @param {LoginRequest} [loginRequest] 認証情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersLogin: async (loginRequest?: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ログアウト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersLogout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * ユーザの削除
         * @param {number} id 対象AdminのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 指定したIDの\'UserResponse\'取得
         * @param {number} id 対象AdminのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 自アカウントのユーザー情報取得
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserMe(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMe(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 条件にマッチしたユーザの一覧取得
         * @param {string} [email] メールアドレス
         * @param {string} [name] 名前
         * @param {'user' | 'admin'} [role] ロール
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(email?: string, name?: string, role?: 'user' | 'admin', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(email, name, role, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * トークン更新
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersRefreshToken(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersRefreshToken(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザの更新
         * @param {number} id 対象AdminのID
         * @param {PatchUserRequest} [patchUserRequest] 更新するAdmin情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchUser(id: number, patchUserRequest?: PatchUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUser(id, patchUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 自アカウントのユーザ情報更新
         * @param {PatchUserMeRequest} [patchUserMeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchUserMe(patchUserMeRequest?: PatchUserMeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUserMe(patchUserMeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザの追加
         * @param {PostUserRequest} [postUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUsers(postUserRequest?: PostUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUsers(postUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ログイン
         * @param {LoginRequest} [loginRequest] 認証情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUsersLogin(loginRequest?: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUsersLogin(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ログアウト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUsersLogout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CodeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUsersLogout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * ユーザの削除
         * @param {number} id 対象AdminのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 指定したIDの\'UserResponse\'取得
         * @param {number} id 対象AdminのID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(id: number, options?: any): AxiosPromise<UserResponse> {
            return localVarFp.getUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 自アカウントのユーザー情報取得
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMe(options?: any): AxiosPromise<UserResponse> {
            return localVarFp.getUserMe(options).then((request) => request(axios, basePath));
        },
        /**
         * 条件にマッチしたユーザの一覧取得
         * @param {string} [email] メールアドレス
         * @param {string} [name] 名前
         * @param {'user' | 'admin'} [role] ロール
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(email?: string, name?: string, role?: 'user' | 'admin', options?: any): AxiosPromise<Array<UserResponse>> {
            return localVarFp.getUsers(email, name, role, options).then((request) => request(axios, basePath));
        },
        /**
         * トークン更新
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersRefreshToken(options?: any): AxiosPromise<TokenResponse> {
            return localVarFp.getUsersRefreshToken(options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザの更新
         * @param {number} id 対象AdminのID
         * @param {PatchUserRequest} [patchUserRequest] 更新するAdmin情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUser(id: number, patchUserRequest?: PatchUserRequest, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.patchUser(id, patchUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 自アカウントのユーザ情報更新
         * @param {PatchUserMeRequest} [patchUserMeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserMe(patchUserMeRequest?: PatchUserMeRequest, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.patchUserMe(patchUserMeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザの追加
         * @param {PostUserRequest} [postUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsers(postUserRequest?: PostUserRequest, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.postUsers(postUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * ログイン
         * @param {LoginRequest} [loginRequest] 認証情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersLogin(loginRequest?: LoginRequest, options?: any): AxiosPromise<TokenResponse> {
            return localVarFp.postUsersLogin(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * ログアウト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersLogout(options?: any): AxiosPromise<CodeResponse> {
            return localVarFp.postUsersLogout(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * ユーザの削除
     * @param {number} id 対象AdminのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteUser(id: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).deleteUser(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 指定したIDの\'UserResponse\'取得
     * @param {number} id 対象AdminのID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUser(id: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUser(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 自アカウントのユーザー情報取得
     * @summary Your GET endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUserMe(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUserMe(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 条件にマッチしたユーザの一覧取得
     * @param {string} [email] メールアドレス
     * @param {string} [name] 名前
     * @param {'user' | 'admin'} [role] ロール
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsers(email?: string, name?: string, role?: 'user' | 'admin', options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUsers(email, name, role, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * トークン更新
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsersRefreshToken(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUsersRefreshToken(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザの更新
     * @param {number} id 対象AdminのID
     * @param {PatchUserRequest} [patchUserRequest] 更新するAdmin情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public patchUser(id: number, patchUserRequest?: PatchUserRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).patchUser(id, patchUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 自アカウントのユーザ情報更新
     * @param {PatchUserMeRequest} [patchUserMeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public patchUserMe(patchUserMeRequest?: PatchUserMeRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).patchUserMe(patchUserMeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザの追加
     * @param {PostUserRequest} [postUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUsers(postUserRequest?: PostUserRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postUsers(postUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ログイン
     * @param {LoginRequest} [loginRequest] 認証情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUsersLogin(loginRequest?: LoginRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postUsersLogin(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ログアウト
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUsersLogout(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postUsersLogout(options).then((request) => request(this.axios, this.basePath));
    }
}


