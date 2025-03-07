/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * OpenAPI spec version: v0
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
import {TaxClassificationList} from './TaxClassificationList.js';

/**
 * The MarketplaceTaxInfo model module.
 * @module shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/MarketplaceTaxInfo
 * @version v0
 */
export class MarketplaceTaxInfo {
  /**
   * Constructs a new <code>MarketplaceTaxInfo</code>.
   * Tax information about the marketplace.
   * @alias module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/MarketplaceTaxInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarketplaceTaxInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/MarketplaceTaxInfo} obj Optional instance to populate.
   * @return {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/MarketplaceTaxInfo} The populated <code>MarketplaceTaxInfo</code> instance.
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
      obj = obj || new MarketplaceTaxInfo();
      if (data.hasOwnProperty('CompanyLegalName'))
        obj.companyLegalName = ApiClient.convertToType(data['CompanyLegalName'], 'String');
      if (data.hasOwnProperty('TaxingRegion'))
        obj.taxingRegion = ApiClient.convertToType(data['TaxingRegion'], 'String');
      if (data.hasOwnProperty('TaxClassifications'))
        obj.taxClassifications = TaxClassificationList.constructFromObject(data['TaxClassifications']);
    }
    return obj;
  }
}

/**
 * The legal name of the company.
 * @member {String} companyLegalName
 */
MarketplaceTaxInfo.prototype.companyLegalName = undefined;

/**
 * The country or region imposing the tax.
 * @member {String} taxingRegion
 */
MarketplaceTaxInfo.prototype.taxingRegion = undefined;

/**
 * @member {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/TaxClassificationList} taxClassifications
 */
MarketplaceTaxInfo.prototype.taxClassifications = undefined;


