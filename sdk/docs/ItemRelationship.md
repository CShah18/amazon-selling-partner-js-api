# SellingPartnerApiForListingsItems.ItemRelationship

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**childSkus** | **[String]** | Identifiers (SKUs) of the related items that are children of this listing item. | [optional] 
**parentSkus** | **[String]** | Identifiers (SKUs) of the related items that are parents of this listing item. | [optional] 
**variationTheme** | [**ItemVariationTheme**](ItemVariationTheme.md) | For `VARIATION` relationships, the variation theme is the combination of listing item attributes that define the variation family. | [optional] 
**type** | **String** | The type of relationship. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `VARIATION` (value: `"VARIATION"`)

* `PACKAGE_HIERARCHY` (value: `"PACKAGE_HIERARCHY"`)




