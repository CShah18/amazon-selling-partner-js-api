/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The ImportDetails model module.
 * @module vendorOrders/js-client.vendorOrders.model/ImportDetails
 * @version v1
 */
export class ImportDetails {
  /**
   * Constructs a new <code>ImportDetails</code>.
   * Import details for an import order.
   * @alias module:vendorOrders/js-client.vendorOrders.model/ImportDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ImportDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorOrders/js-client.vendorOrders.model/ImportDetails} obj Optional instance to populate.
   * @return {module:vendorOrders/js-client.vendorOrders.model/ImportDetails} The populated <code>ImportDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new ImportDetails();
      if (data.hasOwnProperty('methodOfPayment'))
        obj.methodOfPayment = ApiClient.convertToType(data['methodOfPayment'], 'String');
      if (data.hasOwnProperty('internationalCommercialTerms'))
        obj.internationalCommercialTerms = ApiClient.convertToType(data['internationalCommercialTerms'], 'String');
      if (data.hasOwnProperty('portOfDelivery'))
        obj.portOfDelivery = ApiClient.convertToType(data['portOfDelivery'], 'String');
      if (data.hasOwnProperty('importContainers'))
        obj.importContainers = ApiClient.convertToType(data['importContainers'], 'String');
      if (data.hasOwnProperty('shippingInstructions'))
        obj.shippingInstructions = ApiClient.convertToType(data['shippingInstructions'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>methodOfPayment</code> property.
 * @enum {String}
 * @readonly
 */
ImportDetails.MethodOfPaymentEnum = {
  /**
   * value: "PaidByBuyer"
   * @const
   */
  paidByBuyer: "PaidByBuyer",

  /**
   * value: "CollectOnDelivery"
   * @const
   */
  collectOnDelivery: "CollectOnDelivery",

  /**
   * value: "DefinedByBuyerAndSeller"
   * @const
   */
  definedByBuyerAndSeller: "DefinedByBuyerAndSeller",

  /**
   * value: "FOBPortOfCall"
   * @const
   */
  fOBPortOfCall: "FOBPortOfCall",

  /**
   * value: "PrepaidBySeller"
   * @const
   */
  prepaidBySeller: "PrepaidBySeller",

  /**
   * value: "PaidBySeller"
   * @const
   */
  paidBySeller: "PaidBySeller"
};

/**
 * If the recipient requests, contains the shipment method of payment. This is for import PO's only.
 * @member {module:vendorOrders/js-client.vendorOrders.model/ImportDetails.MethodOfPaymentEnum} methodOfPayment
 */
ImportDetails.prototype.methodOfPayment = undefined;

/**
 * Allowed values for the <code>internationalCommercialTerms</code> property.
 * @enum {String}
 * @readonly
 */
ImportDetails.InternationalCommercialTermsEnum = {
  /**
   * value: "ExWorks"
   * @const
   */
  exWorks: "ExWorks",

  /**
   * value: "FreeCarrier"
   * @const
   */
  freeCarrier: "FreeCarrier",

  /**
   * value: "FreeOnBoard"
   * @const
   */
  freeOnBoard: "FreeOnBoard",

  /**
   * value: "FreeAlongSideShip"
   * @const
   */
  freeAlongSideShip: "FreeAlongSideShip",

  /**
   * value: "CarriagePaidTo"
   * @const
   */
  carriagePaidTo: "CarriagePaidTo",

  /**
   * value: "CostAndFreight"
   * @const
   */
  costAndFreight: "CostAndFreight",

  /**
   * value: "CarriageAndInsurancePaidTo"
   * @const
   */
  carriageAndInsurancePaidTo: "CarriageAndInsurancePaidTo",

  /**
   * value: "CostInsuranceAndFreight"
   * @const
   */
  costInsuranceAndFreight: "CostInsuranceAndFreight",

  /**
   * value: "DeliveredAtTerminal"
   * @const
   */
  deliveredAtTerminal: "DeliveredAtTerminal",

  /**
   * value: "DeliveredAtPlace"
   * @const
   */
  deliveredAtPlace: "DeliveredAtPlace",

  /**
   * value: "DeliverDutyPaid"
   * @const
   */
  deliverDutyPaid: "DeliverDutyPaid"
};

/**
 * Incoterms (International Commercial Terms) are used to divide transaction costs and responsibilities between buyer and seller and reflect state-of-the-art transportation practices. This is for import purchase orders only. 
 * @member {module:vendorOrders/js-client.vendorOrders.model/ImportDetails.InternationalCommercialTermsEnum} internationalCommercialTerms
 */
ImportDetails.prototype.internationalCommercialTerms = undefined;

/**
 * The port where goods on an import purchase order must be delivered by the vendor. This should only be specified when the internationalCommercialTerms is FOB.
 * @member {String} portOfDelivery
 */
ImportDetails.prototype.portOfDelivery = undefined;

/**
 * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if the shipment has multiple containers. HC signifies a high-capacity container. Free-text field, limited to 64 characters. The format will be a comma-delimited list containing values of the type: $NUMBER_OF_CONTAINERS_OF_THIS_TYPE-$CONTAINER_TYPE. The list of values for the container type is: 40'(40-foot container), 40'HC (40-foot high-capacity container), 45', 45'HC, 30', 30'HC, 20', 20'HC.
 * @member {String} importContainers
 */
ImportDetails.prototype.importContainers = undefined;

/**
 * Special instructions regarding the shipment. This field is for import purchase orders.
 * @member {String} shippingInstructions
 */
ImportDetails.prototype.shippingInstructions = undefined;


