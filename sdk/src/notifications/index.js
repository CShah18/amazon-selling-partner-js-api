/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
import {AggregationFilter} from './js-client.notifications.model/AggregationFilter.js';
import {AggregationSettings} from './js-client.notifications.model/AggregationSettings.js';
import {AggregationTimePeriod} from './js-client.notifications.model/AggregationTimePeriod.js';
import {CreateDestinationRequest} from './js-client.notifications.model/CreateDestinationRequest.js';
import {CreateDestinationResponse} from './js-client.notifications.model/CreateDestinationResponse.js';
import {CreateSubscriptionRequest} from './js-client.notifications.model/CreateSubscriptionRequest.js';
import {CreateSubscriptionResponse} from './js-client.notifications.model/CreateSubscriptionResponse.js';
import {DeleteDestinationResponse} from './js-client.notifications.model/DeleteDestinationResponse.js';
import {DeleteSubscriptionByIdResponse} from './js-client.notifications.model/DeleteSubscriptionByIdResponse.js';
import {Destination} from './js-client.notifications.model/Destination.js';
import {DestinationList} from './js-client.notifications.model/DestinationList.js';
import {DestinationResource} from './js-client.notifications.model/DestinationResource.js';
import {DestinationResourceSpecification} from './js-client.notifications.model/DestinationResourceSpecification.js';
import {Error} from './js-client.notifications.model/Error.js';
import {ErrorList} from './js-client.notifications.model/ErrorList.js';
import {EventBridgeResource} from './js-client.notifications.model/EventBridgeResource.js';
import {EventBridgeResourceSpecification} from './js-client.notifications.model/EventBridgeResourceSpecification.js';
import {EventFilter} from './js-client.notifications.model/EventFilter.js';
import {GetDestinationResponse} from './js-client.notifications.model/GetDestinationResponse.js';
import {GetDestinationsResponse} from './js-client.notifications.model/GetDestinationsResponse.js';
import {GetSubscriptionByIdResponse} from './js-client.notifications.model/GetSubscriptionByIdResponse.js';
import {GetSubscriptionResponse} from './js-client.notifications.model/GetSubscriptionResponse.js';
import {MarketplaceFilter} from './js-client.notifications.model/MarketplaceFilter.js';
import {MarketplaceIds} from './js-client.notifications.model/MarketplaceIds.js';
import {OrderChangeTypeEnum} from './js-client.notifications.model/OrderChangeTypeEnum.js';
import {OrderChangeTypeFilter} from './js-client.notifications.model/OrderChangeTypeFilter.js';
import {OrderChangeTypes} from './js-client.notifications.model/OrderChangeTypes.js';
import {ProcessingDirective} from './js-client.notifications.model/ProcessingDirective.js';
import {SqsResource} from './js-client.notifications.model/SqsResource.js';
import {Subscription} from './js-client.notifications.model/Subscription.js';
import {NotificationsApi} from './js-client.notifications.api/NotificationsApi.js';


/**
* The_Selling_Partner_API_for_Notifications_lets_you_subscribe_to_notifications_that_are_relevant_to_a_selling_partners_business__Using_this_API_you_can_create_a_destination_to_receive_notifications_subscribe_to_notifications_delete_notification_subscriptions_and_more_For_more_information_refer_to_the__Notifications_Use_Case_Guide_httpsdeveloper_docs_amazon_comsp_apidocsnotifications_api_v1_use_case_guide_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForNotifications = require('notifications/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForNotifications.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForNotifications.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['notifications/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForNotifications.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForNotifications.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module notifications/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:notifications/ApiClient}
     */
    ApiClient,

    /**
     * The AggregationFilter model constructor.
     * @property {module:notifications/js-client.notifications.model/AggregationFilter}
     */
    AggregationFilter,

    /**
     * The AggregationSettings model constructor.
     * @property {module:notifications/js-client.notifications.model/AggregationSettings}
     */
    AggregationSettings,

    /**
     * The AggregationTimePeriod model constructor.
     * @property {module:notifications/js-client.notifications.model/AggregationTimePeriod}
     */
    AggregationTimePeriod,

    /**
     * The CreateDestinationRequest model constructor.
     * @property {module:notifications/js-client.notifications.model/CreateDestinationRequest}
     */
    CreateDestinationRequest,

    /**
     * The CreateDestinationResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/CreateDestinationResponse}
     */
    CreateDestinationResponse,

    /**
     * The CreateSubscriptionRequest model constructor.
     * @property {module:notifications/js-client.notifications.model/CreateSubscriptionRequest}
     */
    CreateSubscriptionRequest,

    /**
     * The CreateSubscriptionResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/CreateSubscriptionResponse}
     */
    CreateSubscriptionResponse,

    /**
     * The DeleteDestinationResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/DeleteDestinationResponse}
     */
    DeleteDestinationResponse,

    /**
     * The DeleteSubscriptionByIdResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/DeleteSubscriptionByIdResponse}
     */
    DeleteSubscriptionByIdResponse,

    /**
     * The Destination model constructor.
     * @property {module:notifications/js-client.notifications.model/Destination}
     */
    Destination,

    /**
     * The DestinationList model constructor.
     * @property {module:notifications/js-client.notifications.model/DestinationList}
     */
    DestinationList,

    /**
     * The DestinationResource model constructor.
     * @property {module:notifications/js-client.notifications.model/DestinationResource}
     */
    DestinationResource,

    /**
     * The DestinationResourceSpecification model constructor.
     * @property {module:notifications/js-client.notifications.model/DestinationResourceSpecification}
     */
    DestinationResourceSpecification,

    /**
     * The Error model constructor.
     * @property {module:notifications/js-client.notifications.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:notifications/js-client.notifications.model/ErrorList}
     */
    ErrorList,

    /**
     * The EventBridgeResource model constructor.
     * @property {module:notifications/js-client.notifications.model/EventBridgeResource}
     */
    EventBridgeResource,

    /**
     * The EventBridgeResourceSpecification model constructor.
     * @property {module:notifications/js-client.notifications.model/EventBridgeResourceSpecification}
     */
    EventBridgeResourceSpecification,

    /**
     * The EventFilter model constructor.
     * @property {module:notifications/js-client.notifications.model/EventFilter}
     */
    EventFilter,

    /**
     * The GetDestinationResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/GetDestinationResponse}
     */
    GetDestinationResponse,

    /**
     * The GetDestinationsResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/GetDestinationsResponse}
     */
    GetDestinationsResponse,

    /**
     * The GetSubscriptionByIdResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/GetSubscriptionByIdResponse}
     */
    GetSubscriptionByIdResponse,

    /**
     * The GetSubscriptionResponse model constructor.
     * @property {module:notifications/js-client.notifications.model/GetSubscriptionResponse}
     */
    GetSubscriptionResponse,

    /**
     * The MarketplaceFilter model constructor.
     * @property {module:notifications/js-client.notifications.model/MarketplaceFilter}
     */
    MarketplaceFilter,

    /**
     * The MarketplaceIds model constructor.
     * @property {module:notifications/js-client.notifications.model/MarketplaceIds}
     */
    MarketplaceIds,

    /**
     * The OrderChangeTypeEnum model constructor.
     * @property {module:notifications/js-client.notifications.model/OrderChangeTypeEnum}
     */
    OrderChangeTypeEnum,

    /**
     * The OrderChangeTypeFilter model constructor.
     * @property {module:notifications/js-client.notifications.model/OrderChangeTypeFilter}
     */
    OrderChangeTypeFilter,

    /**
     * The OrderChangeTypes model constructor.
     * @property {module:notifications/js-client.notifications.model/OrderChangeTypes}
     */
    OrderChangeTypes,

    /**
     * The ProcessingDirective model constructor.
     * @property {module:notifications/js-client.notifications.model/ProcessingDirective}
     */
    ProcessingDirective,

    /**
     * The SqsResource model constructor.
     * @property {module:notifications/js-client.notifications.model/SqsResource}
     */
    SqsResource,

    /**
     * The Subscription model constructor.
     * @property {module:notifications/js-client.notifications.model/Subscription}
     */
    Subscription,

    /**
    * The NotificationsApi service constructor.
    * @property {module:notifications/js-client.notifications.api/NotificationsApi}
    */
    NotificationsApi
};
