/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import {Attachment} from './js-client.messaging.model/Attachment.js';
import {CreateAmazonMotorsRequest} from './js-client.messaging.model/CreateAmazonMotorsRequest.js';
import {CreateAmazonMotorsResponse} from './js-client.messaging.model/CreateAmazonMotorsResponse.js';
import {CreateConfirmCustomizationDetailsRequest} from './js-client.messaging.model/CreateConfirmCustomizationDetailsRequest.js';
import {CreateConfirmCustomizationDetailsResponse} from './js-client.messaging.model/CreateConfirmCustomizationDetailsResponse.js';
import {CreateConfirmDeliveryDetailsRequest} from './js-client.messaging.model/CreateConfirmDeliveryDetailsRequest.js';
import {CreateConfirmDeliveryDetailsResponse} from './js-client.messaging.model/CreateConfirmDeliveryDetailsResponse.js';
import {CreateConfirmOrderDetailsRequest} from './js-client.messaging.model/CreateConfirmOrderDetailsRequest.js';
import {CreateConfirmOrderDetailsResponse} from './js-client.messaging.model/CreateConfirmOrderDetailsResponse.js';
import {CreateConfirmServiceDetailsRequest} from './js-client.messaging.model/CreateConfirmServiceDetailsRequest.js';
import {CreateConfirmServiceDetailsResponse} from './js-client.messaging.model/CreateConfirmServiceDetailsResponse.js';
import {CreateDigitalAccessKeyRequest} from './js-client.messaging.model/CreateDigitalAccessKeyRequest.js';
import {CreateDigitalAccessKeyResponse} from './js-client.messaging.model/CreateDigitalAccessKeyResponse.js';
import {CreateLegalDisclosureRequest} from './js-client.messaging.model/CreateLegalDisclosureRequest.js';
import {CreateLegalDisclosureResponse} from './js-client.messaging.model/CreateLegalDisclosureResponse.js';
import {CreateNegativeFeedbackRemovalResponse} from './js-client.messaging.model/CreateNegativeFeedbackRemovalResponse.js';
import {CreateUnexpectedProblemRequest} from './js-client.messaging.model/CreateUnexpectedProblemRequest.js';
import {CreateUnexpectedProblemResponse} from './js-client.messaging.model/CreateUnexpectedProblemResponse.js';
import {CreateWarrantyRequest} from './js-client.messaging.model/CreateWarrantyRequest.js';
import {CreateWarrantyResponse} from './js-client.messaging.model/CreateWarrantyResponse.js';
import {Error} from './js-client.messaging.model/Error.js';
import {ErrorList} from './js-client.messaging.model/ErrorList.js';
import {GetAttributesResponse} from './js-client.messaging.model/GetAttributesResponse.js';
import {GetAttributesResponseBuyer} from './js-client.messaging.model/GetAttributesResponseBuyer.js';
import {GetMessagingActionResponse} from './js-client.messaging.model/GetMessagingActionResponse.js';
import {GetMessagingActionResponseEmbedded} from './js-client.messaging.model/GetMessagingActionResponseEmbedded.js';
import {GetMessagingActionResponseLinks} from './js-client.messaging.model/GetMessagingActionResponseLinks.js';
import {GetMessagingActionsForOrderResponse} from './js-client.messaging.model/GetMessagingActionsForOrderResponse.js';
import {GetMessagingActionsForOrderResponseEmbedded} from './js-client.messaging.model/GetMessagingActionsForOrderResponseEmbedded.js';
import {GetMessagingActionsForOrderResponseLinks} from './js-client.messaging.model/GetMessagingActionsForOrderResponseLinks.js';
import {GetSchemaResponse} from './js-client.messaging.model/GetSchemaResponse.js';
import {GetSchemaResponseLinks} from './js-client.messaging.model/GetSchemaResponseLinks.js';
import {InvoiceRequest} from './js-client.messaging.model/InvoiceRequest.js';
import {InvoiceResponse} from './js-client.messaging.model/InvoiceResponse.js';
import {LinkObject} from './js-client.messaging.model/LinkObject.js';
import {MessagingAction} from './js-client.messaging.model/MessagingAction.js';
import {Schema} from './js-client.messaging.model/Schema.js';
import {MessagingApi} from './js-client.messaging.api/MessagingApi.js';


/**
* With_the_Messaging_API_you_can_build_applications_that_send_messages_to_buyers__You_can_get_a_list_of_message_types_that_are_available_for_an_order_that_you_specify_then_call_an_operation_that_sends_a_message_to_the_buyer_for_that_order__The_Messaging_API_returns_responses_that_are_formed_according_to_the_a_hrefhttpstools_ietf_orghtmldraft_kelly_json_hal_08JSON_Hypertext_Application_Languagea__HAL_standard_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForMessaging = require('messaging/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForMessaging.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForMessaging.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['messaging/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForMessaging.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForMessaging.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module messaging/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:messaging/ApiClient}
     */
    ApiClient,

    /**
     * The Attachment model constructor.
     * @property {module:messaging/js-client.messaging.model/Attachment}
     */
    Attachment,

    /**
     * The CreateAmazonMotorsRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateAmazonMotorsRequest}
     */
    CreateAmazonMotorsRequest,

    /**
     * The CreateAmazonMotorsResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateAmazonMotorsResponse}
     */
    CreateAmazonMotorsResponse,

    /**
     * The CreateConfirmCustomizationDetailsRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmCustomizationDetailsRequest}
     */
    CreateConfirmCustomizationDetailsRequest,

    /**
     * The CreateConfirmCustomizationDetailsResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmCustomizationDetailsResponse}
     */
    CreateConfirmCustomizationDetailsResponse,

    /**
     * The CreateConfirmDeliveryDetailsRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmDeliveryDetailsRequest}
     */
    CreateConfirmDeliveryDetailsRequest,

    /**
     * The CreateConfirmDeliveryDetailsResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmDeliveryDetailsResponse}
     */
    CreateConfirmDeliveryDetailsResponse,

    /**
     * The CreateConfirmOrderDetailsRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmOrderDetailsRequest}
     */
    CreateConfirmOrderDetailsRequest,

    /**
     * The CreateConfirmOrderDetailsResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmOrderDetailsResponse}
     */
    CreateConfirmOrderDetailsResponse,

    /**
     * The CreateConfirmServiceDetailsRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmServiceDetailsRequest}
     */
    CreateConfirmServiceDetailsRequest,

    /**
     * The CreateConfirmServiceDetailsResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateConfirmServiceDetailsResponse}
     */
    CreateConfirmServiceDetailsResponse,

    /**
     * The CreateDigitalAccessKeyRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateDigitalAccessKeyRequest}
     */
    CreateDigitalAccessKeyRequest,

    /**
     * The CreateDigitalAccessKeyResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateDigitalAccessKeyResponse}
     */
    CreateDigitalAccessKeyResponse,

    /**
     * The CreateLegalDisclosureRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateLegalDisclosureRequest}
     */
    CreateLegalDisclosureRequest,

    /**
     * The CreateLegalDisclosureResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateLegalDisclosureResponse}
     */
    CreateLegalDisclosureResponse,

    /**
     * The CreateNegativeFeedbackRemovalResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateNegativeFeedbackRemovalResponse}
     */
    CreateNegativeFeedbackRemovalResponse,

    /**
     * The CreateUnexpectedProblemRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateUnexpectedProblemRequest}
     */
    CreateUnexpectedProblemRequest,

    /**
     * The CreateUnexpectedProblemResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateUnexpectedProblemResponse}
     */
    CreateUnexpectedProblemResponse,

    /**
     * The CreateWarrantyRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateWarrantyRequest}
     */
    CreateWarrantyRequest,

    /**
     * The CreateWarrantyResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/CreateWarrantyResponse}
     */
    CreateWarrantyResponse,

    /**
     * The Error model constructor.
     * @property {module:messaging/js-client.messaging.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:messaging/js-client.messaging.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetAttributesResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/GetAttributesResponse}
     */
    GetAttributesResponse,

    /**
     * The GetAttributesResponseBuyer model constructor.
     * @property {module:messaging/js-client.messaging.model/GetAttributesResponseBuyer}
     */
    GetAttributesResponseBuyer,

    /**
     * The GetMessagingActionResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/GetMessagingActionResponse}
     */
    GetMessagingActionResponse,

    /**
     * The GetMessagingActionResponseEmbedded model constructor.
     * @property {module:messaging/js-client.messaging.model/GetMessagingActionResponseEmbedded}
     */
    GetMessagingActionResponseEmbedded,

    /**
     * The GetMessagingActionResponseLinks model constructor.
     * @property {module:messaging/js-client.messaging.model/GetMessagingActionResponseLinks}
     */
    GetMessagingActionResponseLinks,

    /**
     * The GetMessagingActionsForOrderResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/GetMessagingActionsForOrderResponse}
     */
    GetMessagingActionsForOrderResponse,

    /**
     * The GetMessagingActionsForOrderResponseEmbedded model constructor.
     * @property {module:messaging/js-client.messaging.model/GetMessagingActionsForOrderResponseEmbedded}
     */
    GetMessagingActionsForOrderResponseEmbedded,

    /**
     * The GetMessagingActionsForOrderResponseLinks model constructor.
     * @property {module:messaging/js-client.messaging.model/GetMessagingActionsForOrderResponseLinks}
     */
    GetMessagingActionsForOrderResponseLinks,

    /**
     * The GetSchemaResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/GetSchemaResponse}
     */
    GetSchemaResponse,

    /**
     * The GetSchemaResponseLinks model constructor.
     * @property {module:messaging/js-client.messaging.model/GetSchemaResponseLinks}
     */
    GetSchemaResponseLinks,

    /**
     * The InvoiceRequest model constructor.
     * @property {module:messaging/js-client.messaging.model/InvoiceRequest}
     */
    InvoiceRequest,

    /**
     * The InvoiceResponse model constructor.
     * @property {module:messaging/js-client.messaging.model/InvoiceResponse}
     */
    InvoiceResponse,

    /**
     * The LinkObject model constructor.
     * @property {module:messaging/js-client.messaging.model/LinkObject}
     */
    LinkObject,

    /**
     * The MessagingAction model constructor.
     * @property {module:messaging/js-client.messaging.model/MessagingAction}
     */
    MessagingAction,

    /**
     * The Schema model constructor.
     * @property {module:messaging/js-client.messaging.model/Schema}
     */
    Schema,

    /**
    * The MessagingApi service constructor.
    * @property {module:messaging/js-client.messaging.api/MessagingApi}
    */
    MessagingApi
};
