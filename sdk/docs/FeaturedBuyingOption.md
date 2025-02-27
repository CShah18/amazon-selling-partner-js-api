# SellingPartnerApiForPricing.FeaturedBuyingOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyingOptionType** | **String** | The buying option type for the featured offer. `buyingOptionType` represents the buying options that a customer receives on the detail page, such as `B2B`, `Fresh`, and `Subscribe n Save`. `buyingOptionType` currently supports `NEW` as a value. | 
**segmentedFeaturedOffers** | [**[SegmentedFeaturedOffer]**](SegmentedFeaturedOffer.md) | A list of segmented featured offers for the current buying option type. A segment can be considered as a group of regional contexts that all have the same featured offer. A regional context is a combination of factors such as customer type, region, or postal code and buying option. | 


<a name="BuyingOptionTypeEnum"></a>
## Enum: BuyingOptionTypeEnum


* `_new` (value: `"New"`)




