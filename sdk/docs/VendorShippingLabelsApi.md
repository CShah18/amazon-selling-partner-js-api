# SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getShippingLabel**](VendorShippingLabelsApi.md#getShippingLabel) | **GET** /vendor/directFulfillment/shipping/v1/shippingLabels/{purchaseOrderNumber} | 
[**getShippingLabels**](VendorShippingLabelsApi.md#getShippingLabels) | **GET** /vendor/directFulfillment/shipping/v1/shippingLabels | 
[**submitShippingLabelRequest**](VendorShippingLabelsApi.md#submitShippingLabelRequest) | **POST** /vendor/directFulfillment/shipping/v1/shippingLabels | 


<a name="getShippingLabel"></a>
# **getShippingLabel**
> GetShippingLabelResponse getShippingLabel(purchaseOrderNumber)



Returns a shipping label for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping label. It should be the same purchaseOrderNumber as received in the order.

apiInstance.getShippingLabel(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping label. It should be the same purchaseOrderNumber as received in the order. | 

### Return type

[**GetShippingLabelResponse**](GetShippingLabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingLabels"></a>
# **getShippingLabels**
> GetShippingLabelListResponse getShippingLabels(createdAfter, createdBefore, opts)



Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let createdAfter = new Date("2013-10-20T19:20:30+01:00"); // Date | Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.

let createdBefore = new Date("2013-10-20T19:20:30+01:00"); // Date | Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.

let opts = { 
  'shipFromPartyId': "shipFromPartyId_example", // String | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
  'limit': 56, // Number | The limit to the number of records returned.
  'sortOrder': "ASC", // String | Sort ASC or DESC by order creation date.
  'nextToken': "nextToken_example" // String | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
};
apiInstance.getShippingLabels(createdAfter, createdBefore, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **Date**| Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. | 
 **createdBefore** | **Date**| Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. | 
 **shipFromPartyId** | **String**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional] 
 **limit** | **Number**| The limit to the number of records returned. | [optional] 
 **sortOrder** | **String**| Sort ASC or DESC by order creation date. | [optional] [default to ASC]
 **nextToken** | **String**| Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. | [optional] 

### Return type

[**GetShippingLabelListResponse**](GetShippingLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitShippingLabelRequest"></a>
# **submitShippingLabelRequest**
> SubmitShippingLabelsResponse submitShippingLabelRequest(body)



Creates a shipping label for a purchase order and returns a transactionId for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let body = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShippingLabelsRequest(); // SubmitShippingLabelsRequest | Request body containing one or more shipping labels data.

apiInstance.submitShippingLabelRequest(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShippingLabelsRequest**](SubmitShippingLabelsRequest.md)| Request body containing one or more shipping labels data. | 

### Return type

[**SubmitShippingLabelsResponse**](SubmitShippingLabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

