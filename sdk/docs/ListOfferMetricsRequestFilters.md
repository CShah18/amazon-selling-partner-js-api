# SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregationFrequency** | [**AggregationFrequency**](AggregationFrequency.md) |  | [optional] 
**timeInterval** | [**TimeInterval**](TimeInterval.md) | A time interval used to compute metrics. | 
**timePeriodType** | [**TimePeriodType**](TimePeriodType.md) |  | 
**marketplaceId** | [**MarketplaceId**](MarketplaceId.md) | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | 
**programTypes** | [**ProgramTypes**](ProgramTypes.md) |  | 
**asins** | **[String]** | A list of Amazon Standard Identification Numbers (ASINs). | [optional] 


