/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
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
import {Address} from './js-client.ordersV0.model/Address.js';
import {AddressExtendedFields} from './js-client.ordersV0.model/AddressExtendedFields.js';
import {AmazonPrograms} from './js-client.ordersV0.model/AmazonPrograms.js';
import {AssociatedItem} from './js-client.ordersV0.model/AssociatedItem.js';
import {AssociationType} from './js-client.ordersV0.model/AssociationType.js';
import {AutomatedShippingSettings} from './js-client.ordersV0.model/AutomatedShippingSettings.js';
import {BusinessHours} from './js-client.ordersV0.model/BusinessHours.js';
import {BuyerCustomizedInfoDetail} from './js-client.ordersV0.model/BuyerCustomizedInfoDetail.js';
import {BuyerInfo} from './js-client.ordersV0.model/BuyerInfo.js';
import {BuyerRequestedCancel} from './js-client.ordersV0.model/BuyerRequestedCancel.js';
import {BuyerTaxInfo} from './js-client.ordersV0.model/BuyerTaxInfo.js';
import {BuyerTaxInformation} from './js-client.ordersV0.model/BuyerTaxInformation.js';
import {ConfirmShipmentErrorResponse} from './js-client.ordersV0.model/ConfirmShipmentErrorResponse.js';
import {ConfirmShipmentOrderItem} from './js-client.ordersV0.model/ConfirmShipmentOrderItem.js';
import {ConfirmShipmentOrderItemsList} from './js-client.ordersV0.model/ConfirmShipmentOrderItemsList.js';
import {ConfirmShipmentRequest} from './js-client.ordersV0.model/ConfirmShipmentRequest.js';
import {ConstraintType} from './js-client.ordersV0.model/ConstraintType.js';
import {DeliveryPreferences} from './js-client.ordersV0.model/DeliveryPreferences.js';
import {EasyShipShipmentStatus} from './js-client.ordersV0.model/EasyShipShipmentStatus.js';
import {ElectronicInvoiceStatus} from './js-client.ordersV0.model/ElectronicInvoiceStatus.js';
import {Error} from './js-client.ordersV0.model/Error.js';
import {ErrorList} from './js-client.ordersV0.model/ErrorList.js';
import {ExceptionDates} from './js-client.ordersV0.model/ExceptionDates.js';
import {FulfillmentInstruction} from './js-client.ordersV0.model/FulfillmentInstruction.js';
import {GetOrderAddressResponse} from './js-client.ordersV0.model/GetOrderAddressResponse.js';
import {GetOrderBuyerInfoResponse} from './js-client.ordersV0.model/GetOrderBuyerInfoResponse.js';
import {GetOrderItemsBuyerInfoResponse} from './js-client.ordersV0.model/GetOrderItemsBuyerInfoResponse.js';
import {GetOrderItemsResponse} from './js-client.ordersV0.model/GetOrderItemsResponse.js';
import {GetOrderRegulatedInfoResponse} from './js-client.ordersV0.model/GetOrderRegulatedInfoResponse.js';
import {GetOrderResponse} from './js-client.ordersV0.model/GetOrderResponse.js';
import {GetOrdersResponse} from './js-client.ordersV0.model/GetOrdersResponse.js';
import {ItemBuyerInfo} from './js-client.ordersV0.model/ItemBuyerInfo.js';
import {MarketplaceId} from './js-client.ordersV0.model/MarketplaceId.js';
import {MarketplaceTaxInfo} from './js-client.ordersV0.model/MarketplaceTaxInfo.js';
import {Measurement} from './js-client.ordersV0.model/Measurement.js';
import {Money} from './js-client.ordersV0.model/Money.js';
import {OpenInterval} from './js-client.ordersV0.model/OpenInterval.js';
import {OpenTimeInterval} from './js-client.ordersV0.model/OpenTimeInterval.js';
import {Order} from './js-client.ordersV0.model/Order.js';
import {OrderAddress} from './js-client.ordersV0.model/OrderAddress.js';
import {OrderBuyerInfo} from './js-client.ordersV0.model/OrderBuyerInfo.js';
import {OrderItem} from './js-client.ordersV0.model/OrderItem.js';
import {OrderItemBuyerInfo} from './js-client.ordersV0.model/OrderItemBuyerInfo.js';
import {OrderItemBuyerInfoList} from './js-client.ordersV0.model/OrderItemBuyerInfoList.js';
import {OrderItemList} from './js-client.ordersV0.model/OrderItemList.js';
import {OrderItems} from './js-client.ordersV0.model/OrderItems.js';
import {OrderItemsBuyerInfoList} from './js-client.ordersV0.model/OrderItemsBuyerInfoList.js';
import {OrderItemsInner} from './js-client.ordersV0.model/OrderItemsInner.js';
import {OrderItemsList} from './js-client.ordersV0.model/OrderItemsList.js';
import {OrderList} from './js-client.ordersV0.model/OrderList.js';
import {OrderRegulatedInfo} from './js-client.ordersV0.model/OrderRegulatedInfo.js';
import {OrdersList} from './js-client.ordersV0.model/OrdersList.js';
import {OtherDeliveryAttributes} from './js-client.ordersV0.model/OtherDeliveryAttributes.js';
import {PackageDetail} from './js-client.ordersV0.model/PackageDetail.js';
import {PackageReferenceId} from './js-client.ordersV0.model/PackageReferenceId.js';
import {PaymentExecutionDetailItem} from './js-client.ordersV0.model/PaymentExecutionDetailItem.js';
import {PaymentExecutionDetailItemList} from './js-client.ordersV0.model/PaymentExecutionDetailItemList.js';
import {PaymentMethodDetailItemList} from './js-client.ordersV0.model/PaymentMethodDetailItemList.js';
import {PointsGrantedDetail} from './js-client.ordersV0.model/PointsGrantedDetail.js';
import {PreferredDeliveryTime} from './js-client.ordersV0.model/PreferredDeliveryTime.js';
import {PrescriptionDetail} from './js-client.ordersV0.model/PrescriptionDetail.js';
import {ProductInfoDetail} from './js-client.ordersV0.model/ProductInfoDetail.js';
import {PromotionIdList} from './js-client.ordersV0.model/PromotionIdList.js';
import {RegulatedInformation} from './js-client.ordersV0.model/RegulatedInformation.js';
import {RegulatedInformationField} from './js-client.ordersV0.model/RegulatedInformationField.js';
import {RegulatedOrderVerificationStatus} from './js-client.ordersV0.model/RegulatedOrderVerificationStatus.js';
import {RejectionReason} from './js-client.ordersV0.model/RejectionReason.js';
import {ShipmentStatus} from './js-client.ordersV0.model/ShipmentStatus.js';
import {ShippingConstraints} from './js-client.ordersV0.model/ShippingConstraints.js';
import {SubstitutionOption} from './js-client.ordersV0.model/SubstitutionOption.js';
import {SubstitutionOptionList} from './js-client.ordersV0.model/SubstitutionOptionList.js';
import {SubstitutionPreferences} from './js-client.ordersV0.model/SubstitutionPreferences.js';
import {TaxClassification} from './js-client.ordersV0.model/TaxClassification.js';
import {TaxCollection} from './js-client.ordersV0.model/TaxCollection.js';
import {TransparencyCode} from './js-client.ordersV0.model/TransparencyCode.js';
import {TransparencyCodeList} from './js-client.ordersV0.model/TransparencyCodeList.js';
import {UpdateShipmentStatusErrorResponse} from './js-client.ordersV0.model/UpdateShipmentStatusErrorResponse.js';
import {UpdateShipmentStatusRequest} from './js-client.ordersV0.model/UpdateShipmentStatusRequest.js';
import {UpdateVerificationStatusErrorResponse} from './js-client.ordersV0.model/UpdateVerificationStatusErrorResponse.js';
import {UpdateVerificationStatusRequest} from './js-client.ordersV0.model/UpdateVerificationStatusRequest.js';
import {UpdateVerificationStatusRequestBody} from './js-client.ordersV0.model/UpdateVerificationStatusRequestBody.js';
import {ValidVerificationDetail} from './js-client.ordersV0.model/ValidVerificationDetail.js';
import {VerificationDetails} from './js-client.ordersV0.model/VerificationDetails.js';
import {VerificationStatus} from './js-client.ordersV0.model/VerificationStatus.js';
import {OrdersApi} from './js-client.ordersV0.api/OrdersApi.js';


/**
* Use_the_Orders_Selling_Partner_API_to_programmatically_retrieve_order_information__With_this_API_you_can_develop_fast_flexible_and_custom_applications_to_manage_order_synchronization_perform_order_research_and_create_demand_based_decision_support_tools___Note__For_the_JP_AU_and_SG_marketplaces_the_Orders_API_supports_orders_from_2016_onward__For_all_other_marketplaces_the_Orders_API_supports_orders_for_the_last_two_years__orders_older_than_this_dont_show_up_in_the_response_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OrdersV0 = require('ordersV0/index'); // See note below*.
* var xxxSvc = new OrdersV0.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OrdersV0.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['ordersV0/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OrdersV0.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OrdersV0.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module ordersV0/index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ordersV0/ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/Address}
     */
    Address,

    /**
     * The AddressExtendedFields model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/AddressExtendedFields}
     */
    AddressExtendedFields,

    /**
     * The AmazonPrograms model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/AmazonPrograms}
     */
    AmazonPrograms,

    /**
     * The AssociatedItem model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/AssociatedItem}
     */
    AssociatedItem,

    /**
     * The AssociationType model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/AssociationType}
     */
    AssociationType,

    /**
     * The AutomatedShippingSettings model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/AutomatedShippingSettings}
     */
    AutomatedShippingSettings,

    /**
     * The BusinessHours model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/BusinessHours}
     */
    BusinessHours,

    /**
     * The BuyerCustomizedInfoDetail model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/BuyerCustomizedInfoDetail}
     */
    BuyerCustomizedInfoDetail,

    /**
     * The BuyerInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/BuyerInfo}
     */
    BuyerInfo,

    /**
     * The BuyerRequestedCancel model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/BuyerRequestedCancel}
     */
    BuyerRequestedCancel,

    /**
     * The BuyerTaxInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/BuyerTaxInfo}
     */
    BuyerTaxInfo,

    /**
     * The BuyerTaxInformation model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/BuyerTaxInformation}
     */
    BuyerTaxInformation,

    /**
     * The ConfirmShipmentErrorResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentErrorResponse}
     */
    ConfirmShipmentErrorResponse,

    /**
     * The ConfirmShipmentOrderItem model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentOrderItem}
     */
    ConfirmShipmentOrderItem,

    /**
     * The ConfirmShipmentOrderItemsList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentOrderItemsList}
     */
    ConfirmShipmentOrderItemsList,

    /**
     * The ConfirmShipmentRequest model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentRequest}
     */
    ConfirmShipmentRequest,

    /**
     * The ConstraintType model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ConstraintType}
     */
    ConstraintType,

    /**
     * The DeliveryPreferences model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/DeliveryPreferences}
     */
    DeliveryPreferences,

    /**
     * The EasyShipShipmentStatus model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/EasyShipShipmentStatus}
     */
    EasyShipShipmentStatus,

    /**
     * The ElectronicInvoiceStatus model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ElectronicInvoiceStatus}
     */
    ElectronicInvoiceStatus,

    /**
     * The Error model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ErrorList}
     */
    ErrorList,

    /**
     * The ExceptionDates model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ExceptionDates}
     */
    ExceptionDates,

    /**
     * The FulfillmentInstruction model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/FulfillmentInstruction}
     */
    FulfillmentInstruction,

    /**
     * The GetOrderAddressResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrderAddressResponse}
     */
    GetOrderAddressResponse,

    /**
     * The GetOrderBuyerInfoResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrderBuyerInfoResponse}
     */
    GetOrderBuyerInfoResponse,

    /**
     * The GetOrderItemsBuyerInfoResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrderItemsBuyerInfoResponse}
     */
    GetOrderItemsBuyerInfoResponse,

    /**
     * The GetOrderItemsResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrderItemsResponse}
     */
    GetOrderItemsResponse,

    /**
     * The GetOrderRegulatedInfoResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrderRegulatedInfoResponse}
     */
    GetOrderRegulatedInfoResponse,

    /**
     * The GetOrderResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrderResponse}
     */
    GetOrderResponse,

    /**
     * The GetOrdersResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/GetOrdersResponse}
     */
    GetOrdersResponse,

    /**
     * The ItemBuyerInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ItemBuyerInfo}
     */
    ItemBuyerInfo,

    /**
     * The MarketplaceId model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/MarketplaceId}
     */
    MarketplaceId,

    /**
     * The MarketplaceTaxInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/MarketplaceTaxInfo}
     */
    MarketplaceTaxInfo,

    /**
     * The Measurement model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/Measurement}
     */
    Measurement,

    /**
     * The Money model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/Money}
     */
    Money,

    /**
     * The OpenInterval model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OpenInterval}
     */
    OpenInterval,

    /**
     * The OpenTimeInterval model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OpenTimeInterval}
     */
    OpenTimeInterval,

    /**
     * The Order model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/Order}
     */
    Order,

    /**
     * The OrderAddress model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderAddress}
     */
    OrderAddress,

    /**
     * The OrderBuyerInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderBuyerInfo}
     */
    OrderBuyerInfo,

    /**
     * The OrderItem model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItem}
     */
    OrderItem,

    /**
     * The OrderItemBuyerInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItemBuyerInfo}
     */
    OrderItemBuyerInfo,

    /**
     * The OrderItemBuyerInfoList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItemBuyerInfoList}
     */
    OrderItemBuyerInfoList,

    /**
     * The OrderItemList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItemList}
     */
    OrderItemList,

    /**
     * The OrderItems model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItems}
     */
    OrderItems,

    /**
     * The OrderItemsBuyerInfoList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItemsBuyerInfoList}
     */
    OrderItemsBuyerInfoList,

    /**
     * The OrderItemsInner model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItemsInner}
     */
    OrderItemsInner,

    /**
     * The OrderItemsList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderItemsList}
     */
    OrderItemsList,

    /**
     * The OrderList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderList}
     */
    OrderList,

    /**
     * The OrderRegulatedInfo model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrderRegulatedInfo}
     */
    OrderRegulatedInfo,

    /**
     * The OrdersList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OrdersList}
     */
    OrdersList,

    /**
     * The OtherDeliveryAttributes model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/OtherDeliveryAttributes}
     */
    OtherDeliveryAttributes,

    /**
     * The PackageDetail model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PackageDetail}
     */
    PackageDetail,

    /**
     * The PackageReferenceId model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PackageReferenceId}
     */
    PackageReferenceId,

    /**
     * The PaymentExecutionDetailItem model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PaymentExecutionDetailItem}
     */
    PaymentExecutionDetailItem,

    /**
     * The PaymentExecutionDetailItemList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PaymentExecutionDetailItemList}
     */
    PaymentExecutionDetailItemList,

    /**
     * The PaymentMethodDetailItemList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PaymentMethodDetailItemList}
     */
    PaymentMethodDetailItemList,

    /**
     * The PointsGrantedDetail model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PointsGrantedDetail}
     */
    PointsGrantedDetail,

    /**
     * The PreferredDeliveryTime model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PreferredDeliveryTime}
     */
    PreferredDeliveryTime,

    /**
     * The PrescriptionDetail model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PrescriptionDetail}
     */
    PrescriptionDetail,

    /**
     * The ProductInfoDetail model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ProductInfoDetail}
     */
    ProductInfoDetail,

    /**
     * The PromotionIdList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/PromotionIdList}
     */
    PromotionIdList,

    /**
     * The RegulatedInformation model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/RegulatedInformation}
     */
    RegulatedInformation,

    /**
     * The RegulatedInformationField model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/RegulatedInformationField}
     */
    RegulatedInformationField,

    /**
     * The RegulatedOrderVerificationStatus model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/RegulatedOrderVerificationStatus}
     */
    RegulatedOrderVerificationStatus,

    /**
     * The RejectionReason model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/RejectionReason}
     */
    RejectionReason,

    /**
     * The ShipmentStatus model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ShipmentStatus}
     */
    ShipmentStatus,

    /**
     * The ShippingConstraints model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ShippingConstraints}
     */
    ShippingConstraints,

    /**
     * The SubstitutionOption model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/SubstitutionOption}
     */
    SubstitutionOption,

    /**
     * The SubstitutionOptionList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/SubstitutionOptionList}
     */
    SubstitutionOptionList,

    /**
     * The SubstitutionPreferences model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences}
     */
    SubstitutionPreferences,

    /**
     * The TaxClassification model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/TaxClassification}
     */
    TaxClassification,

    /**
     * The TaxCollection model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/TaxCollection}
     */
    TaxCollection,

    /**
     * The TransparencyCode model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/TransparencyCode}
     */
    TransparencyCode,

    /**
     * The TransparencyCodeList model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/TransparencyCodeList}
     */
    TransparencyCodeList,

    /**
     * The UpdateShipmentStatusErrorResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/UpdateShipmentStatusErrorResponse}
     */
    UpdateShipmentStatusErrorResponse,

    /**
     * The UpdateShipmentStatusRequest model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/UpdateShipmentStatusRequest}
     */
    UpdateShipmentStatusRequest,

    /**
     * The UpdateVerificationStatusErrorResponse model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/UpdateVerificationStatusErrorResponse}
     */
    UpdateVerificationStatusErrorResponse,

    /**
     * The UpdateVerificationStatusRequest model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/UpdateVerificationStatusRequest}
     */
    UpdateVerificationStatusRequest,

    /**
     * The UpdateVerificationStatusRequestBody model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/UpdateVerificationStatusRequestBody}
     */
    UpdateVerificationStatusRequestBody,

    /**
     * The ValidVerificationDetail model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/ValidVerificationDetail}
     */
    ValidVerificationDetail,

    /**
     * The VerificationDetails model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/VerificationDetails}
     */
    VerificationDetails,

    /**
     * The VerificationStatus model constructor.
     * @property {module:ordersV0/js-client.ordersV0.model/VerificationStatus}
     */
    VerificationStatus,

    /**
    * The OrdersApi service constructor.
    * @property {module:ordersV0/js-client.ordersV0.api/OrdersApi}
    */
    OrdersApi
};
