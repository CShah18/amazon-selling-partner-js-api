/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import {AdditionalInputs} from './js-client.merchantFulfillmentV0.model/AdditionalInputs.js';
import {AdditionalInputsList} from './js-client.merchantFulfillmentV0.model/AdditionalInputsList.js';
import {AdditionalSellerInput} from './js-client.merchantFulfillmentV0.model/AdditionalSellerInput.js';
import {AdditionalSellerInputs} from './js-client.merchantFulfillmentV0.model/AdditionalSellerInputs.js';
import {AdditionalSellerInputsList} from './js-client.merchantFulfillmentV0.model/AdditionalSellerInputsList.js';
import {Address} from './js-client.merchantFulfillmentV0.model/Address.js';
import {AddressLine1} from './js-client.merchantFulfillmentV0.model/AddressLine1.js';
import {AddressLine2} from './js-client.merchantFulfillmentV0.model/AddressLine2.js';
import {AddressLine3} from './js-client.merchantFulfillmentV0.model/AddressLine3.js';
import {AddressName} from './js-client.merchantFulfillmentV0.model/AddressName.js';
import {AmazonOrderId} from './js-client.merchantFulfillmentV0.model/AmazonOrderId.js';
import {AvailableCarrierWillPickUpOption} from './js-client.merchantFulfillmentV0.model/AvailableCarrierWillPickUpOption.js';
import {AvailableCarrierWillPickUpOptionsList} from './js-client.merchantFulfillmentV0.model/AvailableCarrierWillPickUpOptionsList.js';
import {AvailableDeliveryExperienceOption} from './js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOption.js';
import {AvailableDeliveryExperienceOptionsList} from './js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOptionsList.js';
import {AvailableFormatOptionsForLabel} from './js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabel.js';
import {AvailableFormatOptionsForLabelList} from './js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabelList.js';
import {AvailableShippingServiceOptions} from './js-client.merchantFulfillmentV0.model/AvailableShippingServiceOptions.js';
import {Benefits} from './js-client.merchantFulfillmentV0.model/Benefits.js';
import {CancelShipmentResponse} from './js-client.merchantFulfillmentV0.model/CancelShipmentResponse.js';
import {CarrierWillPickUpOption} from './js-client.merchantFulfillmentV0.model/CarrierWillPickUpOption.js';
import {City} from './js-client.merchantFulfillmentV0.model/City.js';
import {Constraint} from './js-client.merchantFulfillmentV0.model/Constraint.js';
import {Constraints} from './js-client.merchantFulfillmentV0.model/Constraints.js';
import {CountryCode} from './js-client.merchantFulfillmentV0.model/CountryCode.js';
import {CreateShipmentRequest} from './js-client.merchantFulfillmentV0.model/CreateShipmentRequest.js';
import {CreateShipmentResponse} from './js-client.merchantFulfillmentV0.model/CreateShipmentResponse.js';
import {CurrencyAmount} from './js-client.merchantFulfillmentV0.model/CurrencyAmount.js';
import {CustomTextForLabel} from './js-client.merchantFulfillmentV0.model/CustomTextForLabel.js';
import {DangerousGoodsDetails} from './js-client.merchantFulfillmentV0.model/DangerousGoodsDetails.js';
import {DeliveryExperienceOption} from './js-client.merchantFulfillmentV0.model/DeliveryExperienceOption.js';
import {DeliveryExperienceType} from './js-client.merchantFulfillmentV0.model/DeliveryExperienceType.js';
import {DistrictOrCounty} from './js-client.merchantFulfillmentV0.model/DistrictOrCounty.js';
import {EmailAddress} from './js-client.merchantFulfillmentV0.model/EmailAddress.js';
import {Error} from './js-client.merchantFulfillmentV0.model/Error.js';
import {ErrorList} from './js-client.merchantFulfillmentV0.model/ErrorList.js';
import {ExcludedBenefit} from './js-client.merchantFulfillmentV0.model/ExcludedBenefit.js';
import {ExcludedBenefitReasonCodes} from './js-client.merchantFulfillmentV0.model/ExcludedBenefitReasonCodes.js';
import {ExcludedBenefits} from './js-client.merchantFulfillmentV0.model/ExcludedBenefits.js';
import {FileContents} from './js-client.merchantFulfillmentV0.model/FileContents.js';
import {FileType} from './js-client.merchantFulfillmentV0.model/FileType.js';
import {GetAdditionalSellerInputsRequest} from './js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsRequest.js';
import {GetAdditionalSellerInputsResponse} from './js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsResponse.js';
import {GetAdditionalSellerInputsResult} from './js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsResult.js';
import {GetEligibleShipmentServicesRequest} from './js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesRequest.js';
import {GetEligibleShipmentServicesResponse} from './js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResponse.js';
import {GetEligibleShipmentServicesResult} from './js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResult.js';
import {GetShipmentResponse} from './js-client.merchantFulfillmentV0.model/GetShipmentResponse.js';
import {HazmatType} from './js-client.merchantFulfillmentV0.model/HazmatType.js';
import {IncludedBenefits} from './js-client.merchantFulfillmentV0.model/IncludedBenefits.js';
import {InputTargetType} from './js-client.merchantFulfillmentV0.model/InputTargetType.js';
import {Item} from './js-client.merchantFulfillmentV0.model/Item.js';
import {ItemDescription} from './js-client.merchantFulfillmentV0.model/ItemDescription.js';
import {ItemLevelFields} from './js-client.merchantFulfillmentV0.model/ItemLevelFields.js';
import {ItemLevelFieldsList} from './js-client.merchantFulfillmentV0.model/ItemLevelFieldsList.js';
import {ItemList} from './js-client.merchantFulfillmentV0.model/ItemList.js';
import {ItemQuantity} from './js-client.merchantFulfillmentV0.model/ItemQuantity.js';
import {Label} from './js-client.merchantFulfillmentV0.model/Label.js';
import {LabelCustomization} from './js-client.merchantFulfillmentV0.model/LabelCustomization.js';
import {LabelDimension} from './js-client.merchantFulfillmentV0.model/LabelDimension.js';
import {LabelDimensions} from './js-client.merchantFulfillmentV0.model/LabelDimensions.js';
import {LabelFormat} from './js-client.merchantFulfillmentV0.model/LabelFormat.js';
import {LabelFormatList} from './js-client.merchantFulfillmentV0.model/LabelFormatList.js';
import {LabelFormatOption} from './js-client.merchantFulfillmentV0.model/LabelFormatOption.js';
import {LabelFormatOptionRequest} from './js-client.merchantFulfillmentV0.model/LabelFormatOptionRequest.js';
import {Length} from './js-client.merchantFulfillmentV0.model/Length.js';
import {LiquidVolume} from './js-client.merchantFulfillmentV0.model/LiquidVolume.js';
import {OrderItemId} from './js-client.merchantFulfillmentV0.model/OrderItemId.js';
import {PackageDimension} from './js-client.merchantFulfillmentV0.model/PackageDimension.js';
import {PackageDimensions} from './js-client.merchantFulfillmentV0.model/PackageDimensions.js';
import {PhoneNumber} from './js-client.merchantFulfillmentV0.model/PhoneNumber.js';
import {PostalCode} from './js-client.merchantFulfillmentV0.model/PostalCode.js';
import {PredefinedPackageDimensions} from './js-client.merchantFulfillmentV0.model/PredefinedPackageDimensions.js';
import {RejectedShippingService} from './js-client.merchantFulfillmentV0.model/RejectedShippingService.js';
import {RejectedShippingServiceList} from './js-client.merchantFulfillmentV0.model/RejectedShippingServiceList.js';
import {RestrictedSetValues} from './js-client.merchantFulfillmentV0.model/RestrictedSetValues.js';
import {SellerInputDefinition} from './js-client.merchantFulfillmentV0.model/SellerInputDefinition.js';
import {SellerOrderId} from './js-client.merchantFulfillmentV0.model/SellerOrderId.js';
import {Shipment} from './js-client.merchantFulfillmentV0.model/Shipment.js';
import {ShipmentId} from './js-client.merchantFulfillmentV0.model/ShipmentId.js';
import {ShipmentRequestDetails} from './js-client.merchantFulfillmentV0.model/ShipmentRequestDetails.js';
import {ShipmentStatus} from './js-client.merchantFulfillmentV0.model/ShipmentStatus.js';
import {ShippingOfferingFilter} from './js-client.merchantFulfillmentV0.model/ShippingOfferingFilter.js';
import {ShippingService} from './js-client.merchantFulfillmentV0.model/ShippingService.js';
import {ShippingServiceIdentifier} from './js-client.merchantFulfillmentV0.model/ShippingServiceIdentifier.js';
import {ShippingServiceList} from './js-client.merchantFulfillmentV0.model/ShippingServiceList.js';
import {ShippingServiceOptions} from './js-client.merchantFulfillmentV0.model/ShippingServiceOptions.js';
import {StandardIdForLabel} from './js-client.merchantFulfillmentV0.model/StandardIdForLabel.js';
import {StateOrProvinceCode} from './js-client.merchantFulfillmentV0.model/StateOrProvinceCode.js';
import {TemporarilyUnavailableCarrier} from './js-client.merchantFulfillmentV0.model/TemporarilyUnavailableCarrier.js';
import {TemporarilyUnavailableCarrierList} from './js-client.merchantFulfillmentV0.model/TemporarilyUnavailableCarrierList.js';
import {TermsAndConditionsNotAcceptedCarrier} from './js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrier.js';
import {TermsAndConditionsNotAcceptedCarrierList} from './js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrierList.js';
import {Timestamp} from './js-client.merchantFulfillmentV0.model/Timestamp.js';
import {TrackingId} from './js-client.merchantFulfillmentV0.model/TrackingId.js';
import {TransparencyCode} from './js-client.merchantFulfillmentV0.model/TransparencyCode.js';
import {TransparencyCodeList} from './js-client.merchantFulfillmentV0.model/TransparencyCodeList.js';
import {UnitOfLength} from './js-client.merchantFulfillmentV0.model/UnitOfLength.js';
import {UnitOfWeight} from './js-client.merchantFulfillmentV0.model/UnitOfWeight.js';
import {Weight} from './js-client.merchantFulfillmentV0.model/Weight.js';
import {WeightValue} from './js-client.merchantFulfillmentV0.model/WeightValue.js';
import {MerchantFulfillmentApi} from './js-client.merchantFulfillmentV0.api/MerchantFulfillmentApi.js';


/**
* With_the_Selling_Partner_API_for_Merchant_Fulfillment_you_can_build_applications_that_sellers_can_use_to_purchase_shipping_for_non_Prime_and_Prime_orders_using_Amazons_Buy_Shipping_Services_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForMerchantFulfillment = require('merchantFulfillmentV0/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForMerchantFulfillment.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForMerchantFulfillment.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['merchantFulfillmentV0/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForMerchantFulfillment.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForMerchantFulfillment.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module merchantFulfillmentV0/index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:merchantFulfillmentV0/ApiClient}
     */
    ApiClient,

    /**
     * The AdditionalInputs model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalInputs}
     */
    AdditionalInputs,

    /**
     * The AdditionalInputsList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalInputsList}
     */
    AdditionalInputsList,

    /**
     * The AdditionalSellerInput model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInput}
     */
    AdditionalSellerInput,

    /**
     * The AdditionalSellerInputs model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInputs}
     */
    AdditionalSellerInputs,

    /**
     * The AdditionalSellerInputsList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInputsList}
     */
    AdditionalSellerInputsList,

    /**
     * The Address model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address}
     */
    Address,

    /**
     * The AddressLine1 model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AddressLine1}
     */
    AddressLine1,

    /**
     * The AddressLine2 model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AddressLine2}
     */
    AddressLine2,

    /**
     * The AddressLine3 model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AddressLine3}
     */
    AddressLine3,

    /**
     * The AddressName model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AddressName}
     */
    AddressName,

    /**
     * The AmazonOrderId model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId}
     */
    AmazonOrderId,

    /**
     * The AvailableCarrierWillPickUpOption model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableCarrierWillPickUpOption}
     */
    AvailableCarrierWillPickUpOption,

    /**
     * The AvailableCarrierWillPickUpOptionsList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableCarrierWillPickUpOptionsList}
     */
    AvailableCarrierWillPickUpOptionsList,

    /**
     * The AvailableDeliveryExperienceOption model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOption}
     */
    AvailableDeliveryExperienceOption,

    /**
     * The AvailableDeliveryExperienceOptionsList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOptionsList}
     */
    AvailableDeliveryExperienceOptionsList,

    /**
     * The AvailableFormatOptionsForLabel model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabel}
     */
    AvailableFormatOptionsForLabel,

    /**
     * The AvailableFormatOptionsForLabelList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabelList}
     */
    AvailableFormatOptionsForLabelList,

    /**
     * The AvailableShippingServiceOptions model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableShippingServiceOptions}
     */
    AvailableShippingServiceOptions,

    /**
     * The Benefits model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Benefits}
     */
    Benefits,

    /**
     * The CancelShipmentResponse model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CancelShipmentResponse}
     */
    CancelShipmentResponse,

    /**
     * The CarrierWillPickUpOption model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CarrierWillPickUpOption}
     */
    CarrierWillPickUpOption,

    /**
     * The City model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/City}
     */
    City,

    /**
     * The Constraint model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Constraint}
     */
    Constraint,

    /**
     * The Constraints model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Constraints}
     */
    Constraints,

    /**
     * The CountryCode model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CountryCode}
     */
    CountryCode,

    /**
     * The CreateShipmentRequest model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CreateShipmentRequest}
     */
    CreateShipmentRequest,

    /**
     * The CreateShipmentResponse model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CreateShipmentResponse}
     */
    CreateShipmentResponse,

    /**
     * The CurrencyAmount model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount}
     */
    CurrencyAmount,

    /**
     * The CustomTextForLabel model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CustomTextForLabel}
     */
    CustomTextForLabel,

    /**
     * The DangerousGoodsDetails model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DangerousGoodsDetails}
     */
    DangerousGoodsDetails,

    /**
     * The DeliveryExperienceOption model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DeliveryExperienceOption}
     */
    DeliveryExperienceOption,

    /**
     * The DeliveryExperienceType model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DeliveryExperienceType}
     */
    DeliveryExperienceType,

    /**
     * The DistrictOrCounty model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DistrictOrCounty}
     */
    DistrictOrCounty,

    /**
     * The EmailAddress model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/EmailAddress}
     */
    EmailAddress,

    /**
     * The Error model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ErrorList}
     */
    ErrorList,

    /**
     * The ExcludedBenefit model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ExcludedBenefit}
     */
    ExcludedBenefit,

    /**
     * The ExcludedBenefitReasonCodes model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ExcludedBenefitReasonCodes}
     */
    ExcludedBenefitReasonCodes,

    /**
     * The ExcludedBenefits model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ExcludedBenefits}
     */
    ExcludedBenefits,

    /**
     * The FileContents model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/FileContents}
     */
    FileContents,

    /**
     * The FileType model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/FileType}
     */
    FileType,

    /**
     * The GetAdditionalSellerInputsRequest model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsRequest}
     */
    GetAdditionalSellerInputsRequest,

    /**
     * The GetAdditionalSellerInputsResponse model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsResponse}
     */
    GetAdditionalSellerInputsResponse,

    /**
     * The GetAdditionalSellerInputsResult model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsResult}
     */
    GetAdditionalSellerInputsResult,

    /**
     * The GetEligibleShipmentServicesRequest model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesRequest}
     */
    GetEligibleShipmentServicesRequest,

    /**
     * The GetEligibleShipmentServicesResponse model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResponse}
     */
    GetEligibleShipmentServicesResponse,

    /**
     * The GetEligibleShipmentServicesResult model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResult}
     */
    GetEligibleShipmentServicesResult,

    /**
     * The GetShipmentResponse model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetShipmentResponse}
     */
    GetShipmentResponse,

    /**
     * The HazmatType model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/HazmatType}
     */
    HazmatType,

    /**
     * The IncludedBenefits model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/IncludedBenefits}
     */
    IncludedBenefits,

    /**
     * The InputTargetType model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/InputTargetType}
     */
    InputTargetType,

    /**
     * The Item model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Item}
     */
    Item,

    /**
     * The ItemDescription model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemDescription}
     */
    ItemDescription,

    /**
     * The ItemLevelFields model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemLevelFields}
     */
    ItemLevelFields,

    /**
     * The ItemLevelFieldsList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemLevelFieldsList}
     */
    ItemLevelFieldsList,

    /**
     * The ItemList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemList}
     */
    ItemList,

    /**
     * The ItemQuantity model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The Label model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Label}
     */
    Label,

    /**
     * The LabelCustomization model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelCustomization}
     */
    LabelCustomization,

    /**
     * The LabelDimension model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelDimension}
     */
    LabelDimension,

    /**
     * The LabelDimensions model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelDimensions}
     */
    LabelDimensions,

    /**
     * The LabelFormat model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelFormat}
     */
    LabelFormat,

    /**
     * The LabelFormatList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelFormatList}
     */
    LabelFormatList,

    /**
     * The LabelFormatOption model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelFormatOption}
     */
    LabelFormatOption,

    /**
     * The LabelFormatOptionRequest model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelFormatOptionRequest}
     */
    LabelFormatOptionRequest,

    /**
     * The Length model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Length}
     */
    Length,

    /**
     * The LiquidVolume model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LiquidVolume}
     */
    LiquidVolume,

    /**
     * The OrderItemId model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/OrderItemId}
     */
    OrderItemId,

    /**
     * The PackageDimension model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PackageDimension}
     */
    PackageDimension,

    /**
     * The PackageDimensions model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PackageDimensions}
     */
    PackageDimensions,

    /**
     * The PhoneNumber model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PhoneNumber}
     */
    PhoneNumber,

    /**
     * The PostalCode model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PostalCode}
     */
    PostalCode,

    /**
     * The PredefinedPackageDimensions model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PredefinedPackageDimensions}
     */
    PredefinedPackageDimensions,

    /**
     * The RejectedShippingService model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/RejectedShippingService}
     */
    RejectedShippingService,

    /**
     * The RejectedShippingServiceList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/RejectedShippingServiceList}
     */
    RejectedShippingServiceList,

    /**
     * The RestrictedSetValues model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/RestrictedSetValues}
     */
    RestrictedSetValues,

    /**
     * The SellerInputDefinition model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerInputDefinition}
     */
    SellerInputDefinition,

    /**
     * The SellerOrderId model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerOrderId}
     */
    SellerOrderId,

    /**
     * The Shipment model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Shipment}
     */
    Shipment,

    /**
     * The ShipmentId model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentId}
     */
    ShipmentId,

    /**
     * The ShipmentRequestDetails model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails}
     */
    ShipmentRequestDetails,

    /**
     * The ShipmentStatus model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentStatus}
     */
    ShipmentStatus,

    /**
     * The ShippingOfferingFilter model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingOfferingFilter}
     */
    ShippingOfferingFilter,

    /**
     * The ShippingService model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService}
     */
    ShippingService,

    /**
     * The ShippingServiceIdentifier model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceIdentifier}
     */
    ShippingServiceIdentifier,

    /**
     * The ShippingServiceList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceList}
     */
    ShippingServiceList,

    /**
     * The ShippingServiceOptions model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceOptions}
     */
    ShippingServiceOptions,

    /**
     * The StandardIdForLabel model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/StandardIdForLabel}
     */
    StandardIdForLabel,

    /**
     * The StateOrProvinceCode model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/StateOrProvinceCode}
     */
    StateOrProvinceCode,

    /**
     * The TemporarilyUnavailableCarrier model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TemporarilyUnavailableCarrier}
     */
    TemporarilyUnavailableCarrier,

    /**
     * The TemporarilyUnavailableCarrierList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TemporarilyUnavailableCarrierList}
     */
    TemporarilyUnavailableCarrierList,

    /**
     * The TermsAndConditionsNotAcceptedCarrier model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrier}
     */
    TermsAndConditionsNotAcceptedCarrier,

    /**
     * The TermsAndConditionsNotAcceptedCarrierList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrierList}
     */
    TermsAndConditionsNotAcceptedCarrierList,

    /**
     * The Timestamp model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp}
     */
    Timestamp,

    /**
     * The TrackingId model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TrackingId}
     */
    TrackingId,

    /**
     * The TransparencyCode model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TransparencyCode}
     */
    TransparencyCode,

    /**
     * The TransparencyCodeList model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TransparencyCodeList}
     */
    TransparencyCodeList,

    /**
     * The UnitOfLength model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/UnitOfLength}
     */
    UnitOfLength,

    /**
     * The UnitOfWeight model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/UnitOfWeight}
     */
    UnitOfWeight,

    /**
     * The Weight model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Weight}
     */
    Weight,

    /**
     * The WeightValue model constructor.
     * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/WeightValue}
     */
    WeightValue,

    /**
    * The MerchantFulfillmentApi service constructor.
    * @property {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.api/MerchantFulfillmentApi}
    */
    MerchantFulfillmentApi
};
