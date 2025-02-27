/*
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * OpenAPI spec version: v1
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
import {Decimal} from './js-client.sales.model/Decimal.js';
import {Error} from './js-client.sales.model/Error.js';
import {ErrorList} from './js-client.sales.model/ErrorList.js';
import {GetOrderMetricsResponse} from './js-client.sales.model/GetOrderMetricsResponse.js';
import {Money} from './js-client.sales.model/Money.js';
import {OrderMetricsInterval} from './js-client.sales.model/OrderMetricsInterval.js';
import {OrderMetricsList} from './js-client.sales.model/OrderMetricsList.js';
import {SalesApi} from './js-client.sales.api/SalesApi.js';


/**
* The_Selling_Partner_API_for_Sales_provides_APIs_related_to_sales_performance_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForSales = require('sales/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForSales.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForSales.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['sales/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForSales.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForSales.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module sales/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:sales/ApiClient}
     */
    ApiClient,

    /**
     * The Decimal model constructor.
     * @property {module:sales/js-client.sales.model/Decimal}
     */
    Decimal,

    /**
     * The Error model constructor.
     * @property {module:sales/js-client.sales.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:sales/js-client.sales.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetOrderMetricsResponse model constructor.
     * @property {module:sales/js-client.sales.model/GetOrderMetricsResponse}
     */
    GetOrderMetricsResponse,

    /**
     * The Money model constructor.
     * @property {module:sales/js-client.sales.model/Money}
     */
    Money,

    /**
     * The OrderMetricsInterval model constructor.
     * @property {module:sales/js-client.sales.model/OrderMetricsInterval}
     */
    OrderMetricsInterval,

    /**
     * The OrderMetricsList model constructor.
     * @property {module:sales/js-client.sales.model/OrderMetricsList}
     */
    OrderMetricsList,

    /**
    * The SalesApi service constructor.
    * @property {module:sales/js-client.sales.api/SalesApi}
    */
    SalesApi
};
