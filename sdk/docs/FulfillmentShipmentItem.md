# SellingPartnerApisForFulfillmentOutbound.FulfillmentShipmentItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | 
**sellerFulfillmentOrderItemId** | **String** | The fulfillment order item identifier that the seller created and submitted with a call to the `createFulfillmentOrder` operation. | 
**quantity** | [**Quantity**](Quantity.md) |  | 
**packageNumber** | **Number** | An identifier for the package that contains the item quantity. | [optional] 
**serialNumber** | **String** | The serial number of the shipped item. | [optional] 
**manufacturerLotCodes** | [**StringList**](StringList.md) | The manufacturer lot codes of the shipped items. | [optional] 


