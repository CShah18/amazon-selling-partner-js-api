/*
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import {CreateProductReviewAndSellerFeedbackSolicitationResponse} from './js-client.solicitations.model/CreateProductReviewAndSellerFeedbackSolicitationResponse.js';
import {Error} from './js-client.solicitations.model/Error.js';
import {ErrorList} from './js-client.solicitations.model/ErrorList.js';
import {GetSchemaResponse} from './js-client.solicitations.model/GetSchemaResponse.js';
import {GetSchemaResponseLinks} from './js-client.solicitations.model/GetSchemaResponseLinks.js';
import {GetSolicitationActionResponse} from './js-client.solicitations.model/GetSolicitationActionResponse.js';
import {GetSolicitationActionResponseEmbedded} from './js-client.solicitations.model/GetSolicitationActionResponseEmbedded.js';
import {GetSolicitationActionResponseLinks} from './js-client.solicitations.model/GetSolicitationActionResponseLinks.js';
import {GetSolicitationActionsForOrderResponse} from './js-client.solicitations.model/GetSolicitationActionsForOrderResponse.js';
import {GetSolicitationActionsForOrderResponseEmbedded} from './js-client.solicitations.model/GetSolicitationActionsForOrderResponseEmbedded.js';
import {GetSolicitationActionsForOrderResponseLinks} from './js-client.solicitations.model/GetSolicitationActionsForOrderResponseLinks.js';
import {LinkObject} from './js-client.solicitations.model/LinkObject.js';
import {Schema} from './js-client.solicitations.model/Schema.js';
import {SolicitationsAction} from './js-client.solicitations.model/SolicitationsAction.js';
import {SolicitationsApi} from './js-client.solicitations.api/SolicitationsApi.js';


/**
* With_the_Solicitations_API_you_can_build_applications_that_send_non_critical_solicitations_to_buyers__You_can_get_a_list_of_solicitation_types_that_are_available_for_an_order_that_you_specify_then_call_an_operation_that_sends_a_solicitation_to_the_buyer_for_that_order__Buyers_cannot_respond_to_solicitations_sent_by_this_API_and_these_solicitations_do_not_appear_in_the_Messaging_section_of_Seller_Central_or_in_the_recipients_Message_Center__The_Solicitations_API_returns_responses_that_are_formed_according_to_the_a_hrefhttpstools_ietf_orghtmldraft_kelly_json_hal_08JSON_Hypertext_Application_Languagea__HAL_standard_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForSolicitations = require('solicitations/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForSolicitations.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForSolicitations.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['solicitations/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForSolicitations.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForSolicitations.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module solicitations/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:solicitations/ApiClient}
     */
    ApiClient,

    /**
     * The CreateProductReviewAndSellerFeedbackSolicitationResponse model constructor.
     * @property {module:solicitations/js-client.solicitations.model/CreateProductReviewAndSellerFeedbackSolicitationResponse}
     */
    CreateProductReviewAndSellerFeedbackSolicitationResponse,

    /**
     * The Error model constructor.
     * @property {module:solicitations/js-client.solicitations.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:solicitations/js-client.solicitations.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetSchemaResponse model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSchemaResponse}
     */
    GetSchemaResponse,

    /**
     * The GetSchemaResponseLinks model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSchemaResponseLinks}
     */
    GetSchemaResponseLinks,

    /**
     * The GetSolicitationActionResponse model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSolicitationActionResponse}
     */
    GetSolicitationActionResponse,

    /**
     * The GetSolicitationActionResponseEmbedded model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSolicitationActionResponseEmbedded}
     */
    GetSolicitationActionResponseEmbedded,

    /**
     * The GetSolicitationActionResponseLinks model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSolicitationActionResponseLinks}
     */
    GetSolicitationActionResponseLinks,

    /**
     * The GetSolicitationActionsForOrderResponse model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSolicitationActionsForOrderResponse}
     */
    GetSolicitationActionsForOrderResponse,

    /**
     * The GetSolicitationActionsForOrderResponseEmbedded model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSolicitationActionsForOrderResponseEmbedded}
     */
    GetSolicitationActionsForOrderResponseEmbedded,

    /**
     * The GetSolicitationActionsForOrderResponseLinks model constructor.
     * @property {module:solicitations/js-client.solicitations.model/GetSolicitationActionsForOrderResponseLinks}
     */
    GetSolicitationActionsForOrderResponseLinks,

    /**
     * The LinkObject model constructor.
     * @property {module:solicitations/js-client.solicitations.model/LinkObject}
     */
    LinkObject,

    /**
     * The Schema model constructor.
     * @property {module:solicitations/js-client.solicitations.model/Schema}
     */
    Schema,

    /**
     * The SolicitationsAction model constructor.
     * @property {module:solicitations/js-client.solicitations.model/SolicitationsAction}
     */
    SolicitationsAction,

    /**
    * The SolicitationsApi service constructor.
    * @property {module:solicitations/js-client.solicitations.api/SolicitationsApi}
    */
    SolicitationsApi
};
