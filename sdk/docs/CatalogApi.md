# SellingPartnerApiForCatalogItems.CatalogApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogItem**](CatalogApi.md#getCatalogItem) | **GET** /catalog/v0/items/{asin} | 
[**listCatalogCategories**](CatalogApi.md#listCatalogCategories) | **GET** /catalog/v0/categories | 
[**listCatalogItems**](CatalogApi.md#listCatalogItems) | **GET** /catalog/v0/items | 


<a name="getCatalogItem"></a>
# **getCatalogItem**
> GetCatalogItemResponse getCatalogItem(marketplaceId, asin)



Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.

### Example
```javascript
import {SellingPartnerApiForCatalogItems} from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();

let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for the item.

let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) of the item.

apiInstance.getCatalogItem(marketplaceId, asin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for the item. | 
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) of the item. | 

### Return type

[**GetCatalogItemResponse**](GetCatalogItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCatalogCategories"></a>
# **listCatalogCategories**
> ListCatalogCategoriesResponse listCatalogCategories(marketplaceId, opts)



Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForCatalogItems} from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();

let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for the item.

let opts = { 
  'ASIN': "ASIN_example", // String | The Amazon Standard Identification Number (ASIN) of the item.
  'sellerSKU': "sellerSKU_example" // String | Used to identify items in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
};
apiInstance.listCatalogCategories(marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for the item. | 
 **ASIN** | **String**| The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
 **sellerSKU** | **String**| Used to identify items in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. | [optional] 

### Return type

[**ListCatalogCategoriesResponse**](ListCatalogCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCatalogItems"></a>
# **listCatalogItems**
> ListCatalogItemsResponse listCatalogItems(marketplaceId, opts)



Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.

### Example
```javascript
import {SellingPartnerApiForCatalogItems} from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();

let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which items are returned.

let opts = { 
  'query': "query_example", // String | Keyword(s) to use to search for items in the catalog. Example: 'harry potter books'.
  'queryContextId': "queryContextId_example", // String | An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items.
  'sellerSKU': "sellerSKU_example", // String | Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
  'UPC': "UPC_example", // String | A 12-digit bar code used for retail packaging.
  'EAN': "EAN_example", // String | A European article number that uniquely identifies the catalog item, manufacturer, and its attributes.
  'ISBN': "ISBN_example", // String | The unique commercial book identifier used to identify books internationally.
  'JAN': "JAN_example" // String | A Japanese article number that uniquely identifies the product, manufacturer, and its attributes.
};
apiInstance.listCatalogItems(marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which items are returned. | 
 **query** | **String**| Keyword(s) to use to search for items in the catalog. Example: 'harry potter books'. | [optional] 
 **queryContextId** | **String**| An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items. | [optional] 
 **sellerSKU** | **String**| Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. | [optional] 
 **UPC** | **String**| A 12-digit bar code used for retail packaging. | [optional] 
 **EAN** | **String**| A European article number that uniquely identifies the catalog item, manufacturer, and its attributes. | [optional] 
 **ISBN** | **String**| The unique commercial book identifier used to identify books internationally. | [optional] 
 **JAN** | **String**| A Japanese article number that uniquely identifies the product, manufacturer, and its attributes. | [optional] 

### Return type

[**ListCatalogItemsResponse**](ListCatalogItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

