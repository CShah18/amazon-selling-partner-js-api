# SellingPartnerApiForMerchantFulfillment.RejectedShippingService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierName** | **String** | The rejected shipping carrier name. For example, USPS. | 
**shippingServiceName** | **String** | The rejected shipping service localized name. For example, FedEx Standard Overnight. | 
**shippingServiceId** | [**ShippingServiceIdentifier**](ShippingServiceIdentifier.md) | The rejected shipping service identifier. For example, `FEDEX_PTP_STANDARD_OVERNIGHT`. | 
**rejectionReasonCode** | **String** | A reason code meant to be consumed programatically. For example, `CARRIER_CANNOT_SHIP_TO_POBOX`. | 
**rejectionReasonMessage** | **String** | A localized human readable description of the rejected reason. | [optional] 


