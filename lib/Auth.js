/**
 * dp-client
 * 
 *
 * OpenAPI spec version: 1.0.2
 * Contact: towyuan@outlook.com
 *
 * NOTE: This library is auto generated by the Open API Codegen program.
 * https://github.com/taoyuan/generator-oac.git
 * Do not edit the class manually.
 *
 */

const utils = require('./_utils');

/*jshint -W069 */
/**
 * @class Auth
 * @alias module:api/Auth
 * @param {Requestor} [requestor] - The project domain or options object. If object, see the object's optional properties.
 */
class Auth {
  constructor(requestor) {
    this.requestor = requestor;
  }
  /**
   * Authenticate client
   *
   * @method
   * @path [GET] /auth/creds
   * @name Auth#creds
   * @param {function} [cb] - Callback function
   */
  creds(cb) {

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = '/auth/creds';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Login with user dingtalk code
   *
   * @method
   * @path [POST] /auth/login
   * @name Auth#login
   * @param {string} code - The user dingtalk code
   * @param {function} [cb] - Callback function
   */
  login(code, cb) {
    // verify the required parameter 'code' is set
    if (code === undefined || code === null) {
      throw new Error("Missing the required parameter 'code' when calling login");
    }

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.form = {
      code: code,
    };

    const path = '/auth/login';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
}

module.exports = Auth;