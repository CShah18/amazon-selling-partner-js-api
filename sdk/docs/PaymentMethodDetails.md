# TheSellingPartnerApiForTransfers.PaymentMethodDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountHolderName** | **String** | The name of the account holder who is registered for the payment method. | [optional] 
**paymentMethodId** | **String** | The payment method identifier. | [optional] 
**tail** | **String** | The last three or four digits of the payment method. | [optional] 
**expiryDate** | [**ExpiryDate**](ExpiryDate.md) | The expiration date of the card used for payment. | [optional] 
**countryCode** | **String** | The two-letter country code in ISO 3166-1 alpha-2 format. For payment methods in the `card` category, the code is for the country where the card was issued. For payment methods in the `bank account` category, the code is for the country where the account is located. | [optional] 
**paymentMethodType** | [**PaymentMethodType**](PaymentMethodType.md) | The payment method type. | [optional] 
**assignmentType** | [**AssignmentType**](AssignmentType.md) | The payment method assignment type, whether it is assigned as default to the given marketplace or not. | [optional] 


