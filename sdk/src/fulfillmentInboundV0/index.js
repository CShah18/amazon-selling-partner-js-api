/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import {ASINPrepInstructions} from './js-client.fulfillmentInboundV0.model/ASINPrepInstructions.js';
import {ASINPrepInstructionsList} from './js-client.fulfillmentInboundV0.model/ASINPrepInstructionsList.js';
import {Address} from './js-client.fulfillmentInboundV0.model/Address.js';
import {AmazonPrepFeesDetails} from './js-client.fulfillmentInboundV0.model/AmazonPrepFeesDetails.js';
import {AmazonPrepFeesDetailsList} from './js-client.fulfillmentInboundV0.model/AmazonPrepFeesDetailsList.js';
import {Amount} from './js-client.fulfillmentInboundV0.model/Amount.js';
import {BarcodeInstruction} from './js-client.fulfillmentInboundV0.model/BarcodeInstruction.js';
import {BigDecimalType} from './js-client.fulfillmentInboundV0.model/BigDecimalType.js';
import {BillOfLadingDownloadURL} from './js-client.fulfillmentInboundV0.model/BillOfLadingDownloadURL.js';
import {BoxContentsFeeDetails} from './js-client.fulfillmentInboundV0.model/BoxContentsFeeDetails.js';
import {BoxContentsSource} from './js-client.fulfillmentInboundV0.model/BoxContentsSource.js';
import {CurrencyCode} from './js-client.fulfillmentInboundV0.model/CurrencyCode.js';
import {DateStringType} from './js-client.fulfillmentInboundV0.model/DateStringType.js';
import {Error} from './js-client.fulfillmentInboundV0.model/Error.js';
import {ErrorList} from './js-client.fulfillmentInboundV0.model/ErrorList.js';
import {ErrorReason} from './js-client.fulfillmentInboundV0.model/ErrorReason.js';
import {GetBillOfLadingResponse} from './js-client.fulfillmentInboundV0.model/GetBillOfLadingResponse.js';
import {GetLabelsResponse} from './js-client.fulfillmentInboundV0.model/GetLabelsResponse.js';
import {GetPrepInstructionsResponse} from './js-client.fulfillmentInboundV0.model/GetPrepInstructionsResponse.js';
import {GetPrepInstructionsResult} from './js-client.fulfillmentInboundV0.model/GetPrepInstructionsResult.js';
import {GetShipmentItemsResponse} from './js-client.fulfillmentInboundV0.model/GetShipmentItemsResponse.js';
import {GetShipmentItemsResult} from './js-client.fulfillmentInboundV0.model/GetShipmentItemsResult.js';
import {GetShipmentsResponse} from './js-client.fulfillmentInboundV0.model/GetShipmentsResponse.js';
import {GetShipmentsResult} from './js-client.fulfillmentInboundV0.model/GetShipmentsResult.js';
import {InboundShipmentInfo} from './js-client.fulfillmentInboundV0.model/InboundShipmentInfo.js';
import {InboundShipmentItem} from './js-client.fulfillmentInboundV0.model/InboundShipmentItem.js';
import {InboundShipmentItemList} from './js-client.fulfillmentInboundV0.model/InboundShipmentItemList.js';
import {InboundShipmentList} from './js-client.fulfillmentInboundV0.model/InboundShipmentList.js';
import {InvalidASIN} from './js-client.fulfillmentInboundV0.model/InvalidASIN.js';
import {InvalidASINList} from './js-client.fulfillmentInboundV0.model/InvalidASINList.js';
import {InvalidSKU} from './js-client.fulfillmentInboundV0.model/InvalidSKU.js';
import {InvalidSKUList} from './js-client.fulfillmentInboundV0.model/InvalidSKUList.js';
import {LabelDownloadURL} from './js-client.fulfillmentInboundV0.model/LabelDownloadURL.js';
import {LabelPrepType} from './js-client.fulfillmentInboundV0.model/LabelPrepType.js';
import {PrepDetails} from './js-client.fulfillmentInboundV0.model/PrepDetails.js';
import {PrepDetailsList} from './js-client.fulfillmentInboundV0.model/PrepDetailsList.js';
import {PrepGuidance} from './js-client.fulfillmentInboundV0.model/PrepGuidance.js';
import {PrepInstruction} from './js-client.fulfillmentInboundV0.model/PrepInstruction.js';
import {PrepInstructionList} from './js-client.fulfillmentInboundV0.model/PrepInstructionList.js';
import {PrepOwner} from './js-client.fulfillmentInboundV0.model/PrepOwner.js';
import {Quantity} from './js-client.fulfillmentInboundV0.model/Quantity.js';
import {SKUPrepInstructions} from './js-client.fulfillmentInboundV0.model/SKUPrepInstructions.js';
import {SKUPrepInstructionsList} from './js-client.fulfillmentInboundV0.model/SKUPrepInstructionsList.js';
import {ShipmentStatus} from './js-client.fulfillmentInboundV0.model/ShipmentStatus.js';
import {FbaInboundApi} from './js-client.fulfillmentInboundV0.api/FbaInboundApi.js';


/**
* The_Selling_Partner_API_for_Fulfillment_Inbound_lets_you_create_applications_that_create_and_update_inbound_shipments_of_inventory_to_Amazons_fulfillment_network_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForFulfillmentInbound = require('fulfillmentInboundV0/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForFulfillmentInbound.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForFulfillmentInbound.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['fulfillmentInboundV0/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForFulfillmentInbound.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForFulfillmentInbound.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module fulfillmentInboundV0/index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:fulfillmentInboundV0/ApiClient}
     */
    ApiClient,

    /**
     * The ASINPrepInstructions model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ASINPrepInstructions}
     */
    ASINPrepInstructions,

    /**
     * The ASINPrepInstructionsList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ASINPrepInstructionsList}
     */
    ASINPrepInstructionsList,

    /**
     * The Address model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Address}
     */
    Address,

    /**
     * The AmazonPrepFeesDetails model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/AmazonPrepFeesDetails}
     */
    AmazonPrepFeesDetails,

    /**
     * The AmazonPrepFeesDetailsList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/AmazonPrepFeesDetailsList}
     */
    AmazonPrepFeesDetailsList,

    /**
     * The Amount model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount}
     */
    Amount,

    /**
     * The BarcodeInstruction model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BarcodeInstruction}
     */
    BarcodeInstruction,

    /**
     * The BigDecimalType model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType}
     */
    BigDecimalType,

    /**
     * The BillOfLadingDownloadURL model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BillOfLadingDownloadURL}
     */
    BillOfLadingDownloadURL,

    /**
     * The BoxContentsFeeDetails model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BoxContentsFeeDetails}
     */
    BoxContentsFeeDetails,

    /**
     * The BoxContentsSource model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BoxContentsSource}
     */
    BoxContentsSource,

    /**
     * The CurrencyCode model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/CurrencyCode}
     */
    CurrencyCode,

    /**
     * The DateStringType model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType}
     */
    DateStringType,

    /**
     * The Error model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ErrorList}
     */
    ErrorList,

    /**
     * The ErrorReason model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ErrorReason}
     */
    ErrorReason,

    /**
     * The GetBillOfLadingResponse model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetBillOfLadingResponse}
     */
    GetBillOfLadingResponse,

    /**
     * The GetLabelsResponse model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetLabelsResponse}
     */
    GetLabelsResponse,

    /**
     * The GetPrepInstructionsResponse model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetPrepInstructionsResponse}
     */
    GetPrepInstructionsResponse,

    /**
     * The GetPrepInstructionsResult model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetPrepInstructionsResult}
     */
    GetPrepInstructionsResult,

    /**
     * The GetShipmentItemsResponse model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetShipmentItemsResponse}
     */
    GetShipmentItemsResponse,

    /**
     * The GetShipmentItemsResult model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetShipmentItemsResult}
     */
    GetShipmentItemsResult,

    /**
     * The GetShipmentsResponse model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetShipmentsResponse}
     */
    GetShipmentsResponse,

    /**
     * The GetShipmentsResult model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetShipmentsResult}
     */
    GetShipmentsResult,

    /**
     * The InboundShipmentInfo model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentInfo}
     */
    InboundShipmentInfo,

    /**
     * The InboundShipmentItem model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentItem}
     */
    InboundShipmentItem,

    /**
     * The InboundShipmentItemList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentItemList}
     */
    InboundShipmentItemList,

    /**
     * The InboundShipmentList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentList}
     */
    InboundShipmentList,

    /**
     * The InvalidASIN model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InvalidASIN}
     */
    InvalidASIN,

    /**
     * The InvalidASINList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InvalidASINList}
     */
    InvalidASINList,

    /**
     * The InvalidSKU model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InvalidSKU}
     */
    InvalidSKU,

    /**
     * The InvalidSKUList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InvalidSKUList}
     */
    InvalidSKUList,

    /**
     * The LabelDownloadURL model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/LabelDownloadURL}
     */
    LabelDownloadURL,

    /**
     * The LabelPrepType model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/LabelPrepType}
     */
    LabelPrepType,

    /**
     * The PrepDetails model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetails}
     */
    PrepDetails,

    /**
     * The PrepDetailsList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetailsList}
     */
    PrepDetailsList,

    /**
     * The PrepGuidance model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepGuidance}
     */
    PrepGuidance,

    /**
     * The PrepInstruction model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepInstruction}
     */
    PrepInstruction,

    /**
     * The PrepInstructionList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepInstructionList}
     */
    PrepInstructionList,

    /**
     * The PrepOwner model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepOwner}
     */
    PrepOwner,

    /**
     * The Quantity model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Quantity}
     */
    Quantity,

    /**
     * The SKUPrepInstructions model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUPrepInstructions}
     */
    SKUPrepInstructions,

    /**
     * The SKUPrepInstructionsList model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUPrepInstructionsList}
     */
    SKUPrepInstructionsList,

    /**
     * The ShipmentStatus model constructor.
     * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ShipmentStatus}
     */
    ShipmentStatus,

    /**
    * The FbaInboundApi service constructor.
    * @property {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.api/FbaInboundApi}
    */
    FbaInboundApi
};
