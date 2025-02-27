# SellingPartnerApiForFinances.FailedAdhocDisbursementEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundsTransfersType** | **String** | The type of fund transfer.   Example \"Refund\" | [optional] 
**transferId** | **String** | The transfer identifier. | [optional] 
**disbursementId** | **String** | The disbursement identifier. | [optional] 
**paymentDisbursementType** | **String** | The type of payment for disbursement.   Example `CREDIT_CARD` | [optional] 
**status** | **String** | The status of the failed `AdhocDisbursement`.   Example `HARD_DECLINED` | [optional] 
**transferAmount** | [**Currency**](Currency.md) | The amount of the Adhoc Disbursement. | [optional] 
**postedDate** | [**ModelDate**](ModelDate.md) | The date and time when the financial event was posted. | [optional] 


