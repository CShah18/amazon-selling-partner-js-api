# SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.VendorDFSandboxtransactionstatusApi

All URIs are relative to *https://sandbox.sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderScenarios**](VendorDFSandboxtransactionstatusApi.md#getOrderScenarios) | **GET** /vendor/directFulfillment/sandbox/2021-10-28/transactions/{transactionId} | 


<a name="getOrderScenarios"></a>
# **getOrderScenarios**
> TransactionStatus getOrderScenarios(transactionId)



Returns the status of the transaction indicated by the specified transactionId. If the transaction was successful, also returns the requested test order data.

### Example
```javascript
import {SellingPartnerApiForVendorDirectFulfillmentSandboxTestData} from 'selling_partner_api_for_vendor_direct_fulfillment_sandbox_test_data';

let apiInstance = new SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.VendorDFSandboxtransactionstatusApi();

let transactionId = "transactionId_example"; // String | The transaction identifier returned in the response to the generateOrderScenarios operation.

apiInstance.getOrderScenarios(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The transaction identifier returned in the response to the generateOrderScenarios operation. | 

### Return type

[**TransactionStatus**](TransactionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

