# SellingPartnerApiForDirectFulfillmentInventoryUpdates.InventoryUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) | ID of the selling party or vendor. | 
**isFullUpdate** | **Boolean** | When true, this request contains a full feed. Otherwise, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an update to inventory. The status of other items will remain unchanged. | 
**items** | [**[ItemDetails]**](ItemDetails.md) | A list of inventory items with updated details, including quantity available. | 


