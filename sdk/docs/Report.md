# ReportV20210630.Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceIds** | **[String]** | A list of marketplace identifiers for the report. | [optional] 
**reportId** | **String** | The identifier for the report. This identifier is unique only in combination with a seller ID. | 
**reportType** | **String** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**dataStartTime** | **Date** | The start of a date and time range used for selecting the data to report. | [optional] 
**dataEndTime** | **Date** | The end of a date and time range used for selecting the data to report. | [optional] 
**reportScheduleId** | **String** | The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID. | [optional] 
**createdTime** | **Date** | The date and time when the report was created. | 
**processingStatus** | **String** | The processing status of the report. | 
**processingStartTime** | **Date** | The date and time when the report processing started, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. | [optional] 
**processingEndTime** | **Date** | The date and time when the report processing completed, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. | [optional] 
**reportDocumentId** | **String** | The identifier for the report document. Pass this into the `getReportDocument` operation to get the information you will need to retrieve the report document's contents. | [optional] 


<a name="ProcessingStatusEnum"></a>
## Enum: ProcessingStatusEnum


* `CANCELLED` (value: `"CANCELLED"`)

* `DONE` (value: `"DONE"`)

* `FATAL` (value: `"FATAL"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `IN_QUEUE` (value: `"IN_QUEUE"`)




