# SellingPartnerApiForPricing.CompetitiveSummaryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | [**Asin**](Asin.md) | The Amazon Standard Identification Number for the item. | 
**marketplaceId** | [**MarketplaceId**](MarketplaceId.md) | A marketplace identifier. | 
**includedData** | [**[CompetitiveSummaryIncludedData]**](CompetitiveSummaryIncludedData.md) | The list of requested competitive pricing data for the product. | 
**lowestPricedOffersInputs** | [**[LowestPricedOffersInput]**](LowestPricedOffersInput.md) | The list of `lowestPricedOffersInput` parameters that are used to build `lowestPricedOffers` in the response. This attribute is only valid if `lowestPricedOffers` is requested in `includedData` | [optional] 
**method** | [**HttpMethod**](HttpMethod.md) | HTTP method type | 
**uri** | [**HttpUri**](HttpUri.md) | The URI associated with the individual APIs that are called as part of the batch request. For `getCompetitiveSummary`, this is `/products/pricing/2022-05-01/items/competitiveSummary`. | 


