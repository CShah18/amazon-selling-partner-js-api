/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import {Address} from './js-client.vendorShipments.model/Address.js';
import {CarrierDetails} from './js-client.vendorShipments.model/CarrierDetails.js';
import {Carton} from './js-client.vendorShipments.model/Carton.js';
import {CartonReferenceDetails} from './js-client.vendorShipments.model/CartonReferenceDetails.js';
import {CollectFreightPickupDetails} from './js-client.vendorShipments.model/CollectFreightPickupDetails.js';
import {ContainerIdentification} from './js-client.vendorShipments.model/ContainerIdentification.js';
import {ContainerItem} from './js-client.vendorShipments.model/ContainerItem.js';
import {ContainerSequenceNumbers} from './js-client.vendorShipments.model/ContainerSequenceNumbers.js';
import {Containers} from './js-client.vendorShipments.model/Containers.js';
import {Decimal} from './js-client.vendorShipments.model/Decimal.js';
import {Dimensions} from './js-client.vendorShipments.model/Dimensions.js';
import {Duration} from './js-client.vendorShipments.model/Duration.js';
import {Error} from './js-client.vendorShipments.model/Error.js';
import {ErrorList} from './js-client.vendorShipments.model/ErrorList.js';
import {Expiry} from './js-client.vendorShipments.model/Expiry.js';
import {GetShipmentDetailsResponse} from './js-client.vendorShipments.model/GetShipmentDetailsResponse.js';
import {GetShipmentLabels} from './js-client.vendorShipments.model/GetShipmentLabels.js';
import {ImportDetails} from './js-client.vendorShipments.model/ImportDetails.js';
import {InnerContainersDetails} from './js-client.vendorShipments.model/InnerContainersDetails.js';
import {Item} from './js-client.vendorShipments.model/Item.js';
import {ItemDetails} from './js-client.vendorShipments.model/ItemDetails.js';
import {ItemQuantity} from './js-client.vendorShipments.model/ItemQuantity.js';
import {LabelData} from './js-client.vendorShipments.model/LabelData.js';
import {Location} from './js-client.vendorShipments.model/Location.js';
import {Money} from './js-client.vendorShipments.model/Money.js';
import {PackageItemDetails} from './js-client.vendorShipments.model/PackageItemDetails.js';
import {PackedItems} from './js-client.vendorShipments.model/PackedItems.js';
import {PackedQuantity} from './js-client.vendorShipments.model/PackedQuantity.js';
import {Pagination} from './js-client.vendorShipments.model/Pagination.js';
import {Pallet} from './js-client.vendorShipments.model/Pallet.js';
import {PartyIdentification} from './js-client.vendorShipments.model/PartyIdentification.js';
import {PurchaseOrderItemDetails} from './js-client.vendorShipments.model/PurchaseOrderItemDetails.js';
import {PurchaseOrderItems} from './js-client.vendorShipments.model/PurchaseOrderItems.js';
import {PurchaseOrders} from './js-client.vendorShipments.model/PurchaseOrders.js';
import {Route} from './js-client.vendorShipments.model/Route.js';
import {Shipment} from './js-client.vendorShipments.model/Shipment.js';
import {ShipmentConfirmation} from './js-client.vendorShipments.model/ShipmentConfirmation.js';
import {ShipmentDetails} from './js-client.vendorShipments.model/ShipmentDetails.js';
import {ShipmentInformation} from './js-client.vendorShipments.model/ShipmentInformation.js';
import {ShipmentMeasurements} from './js-client.vendorShipments.model/ShipmentMeasurements.js';
import {ShipmentStatusDetails} from './js-client.vendorShipments.model/ShipmentStatusDetails.js';
import {Stop} from './js-client.vendorShipments.model/Stop.js';
import {SubmitShipmentConfirmationsRequest} from './js-client.vendorShipments.model/SubmitShipmentConfirmationsRequest.js';
import {SubmitShipmentConfirmationsResponse} from './js-client.vendorShipments.model/SubmitShipmentConfirmationsResponse.js';
import {SubmitShipments} from './js-client.vendorShipments.model/SubmitShipments.js';
import {TaxRegistrationDetails} from './js-client.vendorShipments.model/TaxRegistrationDetails.js';
import {TotalWeight} from './js-client.vendorShipments.model/TotalWeight.js';
import {TransactionReference} from './js-client.vendorShipments.model/TransactionReference.js';
import {TransportLabel} from './js-client.vendorShipments.model/TransportLabel.js';
import {TransportShipmentMeasurements} from './js-client.vendorShipments.model/TransportShipmentMeasurements.js';
import {TransportationDetails} from './js-client.vendorShipments.model/TransportationDetails.js';
import {TransportationDetailsForShipmentConfirmation} from './js-client.vendorShipments.model/TransportationDetailsForShipmentConfirmation.js';
import {TransportationLabels} from './js-client.vendorShipments.model/TransportationLabels.js';
import {VendorDetails} from './js-client.vendorShipments.model/VendorDetails.js';
import {Volume} from './js-client.vendorShipments.model/Volume.js';
import {Weight} from './js-client.vendorShipments.model/Weight.js';
import {VendorShippingApi} from './js-client.vendorShipments.api/VendorShippingApi.js';


/**
* The_Selling_Partner_API_for_Retail_Procurement_Shipments_provides_programmatic_access_to_retail_shipping_data_for_vendors_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForRetailProcurementShipments = require('vendorShipments/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForRetailProcurementShipments.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForRetailProcurementShipments.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['vendorShipments/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForRetailProcurementShipments.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForRetailProcurementShipments.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module vendorShipments/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:vendorShipments/ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Address}
     */
    Address,

    /**
     * The CarrierDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/CarrierDetails}
     */
    CarrierDetails,

    /**
     * The Carton model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Carton}
     */
    Carton,

    /**
     * The CartonReferenceDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/CartonReferenceDetails}
     */
    CartonReferenceDetails,

    /**
     * The CollectFreightPickupDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/CollectFreightPickupDetails}
     */
    CollectFreightPickupDetails,

    /**
     * The ContainerIdentification model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ContainerIdentification}
     */
    ContainerIdentification,

    /**
     * The ContainerItem model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ContainerItem}
     */
    ContainerItem,

    /**
     * The ContainerSequenceNumbers model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ContainerSequenceNumbers}
     */
    ContainerSequenceNumbers,

    /**
     * The Containers model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Containers}
     */
    Containers,

    /**
     * The Decimal model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Decimal}
     */
    Decimal,

    /**
     * The Dimensions model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Dimensions}
     */
    Dimensions,

    /**
     * The Duration model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Duration}
     */
    Duration,

    /**
     * The Error model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ErrorList}
     */
    ErrorList,

    /**
     * The Expiry model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Expiry}
     */
    Expiry,

    /**
     * The GetShipmentDetailsResponse model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/GetShipmentDetailsResponse}
     */
    GetShipmentDetailsResponse,

    /**
     * The GetShipmentLabels model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/GetShipmentLabels}
     */
    GetShipmentLabels,

    /**
     * The ImportDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ImportDetails}
     */
    ImportDetails,

    /**
     * The InnerContainersDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/InnerContainersDetails}
     */
    InnerContainersDetails,

    /**
     * The Item model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Item}
     */
    Item,

    /**
     * The ItemDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ItemDetails}
     */
    ItemDetails,

    /**
     * The ItemQuantity model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The LabelData model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/LabelData}
     */
    LabelData,

    /**
     * The Location model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Location}
     */
    Location,

    /**
     * The Money model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Money}
     */
    Money,

    /**
     * The PackageItemDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PackageItemDetails}
     */
    PackageItemDetails,

    /**
     * The PackedItems model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PackedItems}
     */
    PackedItems,

    /**
     * The PackedQuantity model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PackedQuantity}
     */
    PackedQuantity,

    /**
     * The Pagination model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Pagination}
     */
    Pagination,

    /**
     * The Pallet model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Pallet}
     */
    Pallet,

    /**
     * The PartyIdentification model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PartyIdentification}
     */
    PartyIdentification,

    /**
     * The PurchaseOrderItemDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PurchaseOrderItemDetails}
     */
    PurchaseOrderItemDetails,

    /**
     * The PurchaseOrderItems model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PurchaseOrderItems}
     */
    PurchaseOrderItems,

    /**
     * The PurchaseOrders model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/PurchaseOrders}
     */
    PurchaseOrders,

    /**
     * The Route model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Route}
     */
    Route,

    /**
     * The Shipment model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Shipment}
     */
    Shipment,

    /**
     * The ShipmentConfirmation model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ShipmentConfirmation}
     */
    ShipmentConfirmation,

    /**
     * The ShipmentDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ShipmentDetails}
     */
    ShipmentDetails,

    /**
     * The ShipmentInformation model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ShipmentInformation}
     */
    ShipmentInformation,

    /**
     * The ShipmentMeasurements model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ShipmentMeasurements}
     */
    ShipmentMeasurements,

    /**
     * The ShipmentStatusDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/ShipmentStatusDetails}
     */
    ShipmentStatusDetails,

    /**
     * The Stop model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Stop}
     */
    Stop,

    /**
     * The SubmitShipmentConfirmationsRequest model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/SubmitShipmentConfirmationsRequest}
     */
    SubmitShipmentConfirmationsRequest,

    /**
     * The SubmitShipmentConfirmationsResponse model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/SubmitShipmentConfirmationsResponse}
     */
    SubmitShipmentConfirmationsResponse,

    /**
     * The SubmitShipments model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/SubmitShipments}
     */
    SubmitShipments,

    /**
     * The TaxRegistrationDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TaxRegistrationDetails}
     */
    TaxRegistrationDetails,

    /**
     * The TotalWeight model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TotalWeight}
     */
    TotalWeight,

    /**
     * The TransactionReference model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TransactionReference}
     */
    TransactionReference,

    /**
     * The TransportLabel model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TransportLabel}
     */
    TransportLabel,

    /**
     * The TransportShipmentMeasurements model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TransportShipmentMeasurements}
     */
    TransportShipmentMeasurements,

    /**
     * The TransportationDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TransportationDetails}
     */
    TransportationDetails,

    /**
     * The TransportationDetailsForShipmentConfirmation model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TransportationDetailsForShipmentConfirmation}
     */
    TransportationDetailsForShipmentConfirmation,

    /**
     * The TransportationLabels model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/TransportationLabels}
     */
    TransportationLabels,

    /**
     * The VendorDetails model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/VendorDetails}
     */
    VendorDetails,

    /**
     * The Volume model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Volume}
     */
    Volume,

    /**
     * The Weight model constructor.
     * @property {module:vendorShipments/js-client.vendorShipments.model/Weight}
     */
    Weight,

    /**
    * The VendorShippingApi service constructor.
    * @property {module:vendorShipments/js-client.vendorShipments.api/VendorShippingApi}
    */
    VendorShippingApi
};
