# SellingPartnerApiForFinances.FBALiquidationEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postedDate** | [**ModelDate**](ModelDate.md) | The date and time when the financial event was posted. | [optional] 
**originalRemovalOrderId** | **String** | The identifier for the original removal order. | [optional] 
**liquidationProceedsAmount** | [**Currency**](Currency.md) | The amount paid by the liquidator for the seller's inventory. The seller receives this amount minus LiquidationFeeAmount. | [optional] 
**liquidationFeeAmount** | [**Currency**](Currency.md) | The fee charged to the seller by Amazon for liquidating the seller's FBA inventory. | [optional] 


