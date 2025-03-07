# SellingPartnerApiForRetailProcurementShipments.ShipmentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorDetails** | [**VendorDetails**](VendorDetails.md) | Vendor Details requesting for Shipment Label | [optional] 
**buyerReferenceNumber** | **String** | The buyer reference number is a unique identifier generated by the buyer for all Collect and WePay shipments. | [optional] 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) | The name and address of the destination warehouse where the shipment is being shipped. | [optional] 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address of the destination warehouse where the shipment is being shipped to. | [optional] 
**warehouseId** | **String** | Vendor Warehouse ID from where the shipment is scheduled to be picked up by buyer / Carrier. | [optional] 
**masterTrackingId** | **String** | Unique Id with  which  the shipment can be tracked for Small Parcels. | [optional] 
**totalLabelCount** | **Number** | Number of Labels that are created as part of this shipment. | [optional] 
**shipMode** | **String** | Type of shipment whether it is Small Parcel | [optional] 


<a name="ShipModeEnum"></a>
## Enum: ShipModeEnum


* `smallParcel` (value: `"SmallParcel"`)

* `LTL` (value: `"LTL"`)




