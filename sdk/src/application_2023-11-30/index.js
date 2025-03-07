/*
 * Selling Partner API for Application Management
 * The Selling Partner API for Application Management lets you programmatically update the client secret on registered applications.
 *
 * OpenAPI spec version: 2023-11-30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {Error} from './js-client.application_2023-11-30.model/Error.js';
import {ErrorList} from './js-client.application_2023-11-30.model/ErrorList.js';
import {ApplicationsApi} from './js-client.application_2023-11-30.api/ApplicationsApi.js';


/**
* The_Selling_Partner_API_for_Application_Management_lets_you_programmatically_update_the_client_secret_on_registered_applications_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForApplicationManagement = require('application_2023-11-30/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForApplicationManagement.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForApplicationManagement.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['application_2023-11-30/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForApplicationManagement.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForApplicationManagement.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module application_2023-11-30/index
* @version 2023-11-30
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:application_2023-11-30/ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:application_2023-11-30/js-client.application_2023-11-30.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:application_2023-11-30/js-client.application_2023-11-30.model/ErrorList}
     */
    ErrorList,

    /**
    * The ApplicationsApi service constructor.
    * @property {module:application_2023-11-30/js-client.application_2023-11-30.api/ApplicationsApi}
    */
    ApplicationsApi
};
