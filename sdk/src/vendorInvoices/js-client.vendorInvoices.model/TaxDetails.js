/*
 * Vendor Invoices v1
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import {Decimal} from './Decimal.js';
import {Money} from './Money.js';

/**
 * The TaxDetails model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/TaxDetails
 * @version v1
 */
export class TaxDetails {
  /**
   * Constructs a new <code>TaxDetails</code>.
   * Details of tax amount applied.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/TaxDetails
   * @class
   * @param taxType {module:vendorInvoices/js-client.vendorInvoices.model/TaxDetails.TaxTypeEnum} Type of the tax applied.
   * @param taxAmount {module:vendorInvoices/js-client.vendorInvoices.model/Money} Total tax amount applied on invoice total or an item total.
   */
  constructor(taxType, taxAmount) {
    this.taxType = taxType;
    this.taxAmount = taxAmount;
  }

  /**
   * Constructs a <code>TaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/TaxDetails} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/TaxDetails} The populated <code>TaxDetails</code> instance.
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
      obj = obj || new TaxDetails();
      if (data.hasOwnProperty('taxType'))
        obj.taxType = ApiClient.convertToType(data['taxType'], 'String');
      if (data.hasOwnProperty('taxRate'))
        obj.taxRate = Decimal.constructFromObject(data['taxRate']);
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = Money.constructFromObject(data['taxAmount']);
      if (data.hasOwnProperty('taxableAmount'))
        obj.taxableAmount = Money.constructFromObject(data['taxableAmount']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>taxType</code> property.
 * @enum {String}
 * @readonly
 */
TaxDetails.TaxTypeEnum = {
  /**
   * value: "CGST"
   * @const
   */
  CGST: "CGST",

  /**
   * value: "SGST"
   * @const
   */
  SGST: "SGST",

  /**
   * value: "CESS"
   * @const
   */
  CESS: "CESS",

  /**
   * value: "UTGST"
   * @const
   */
  UTGST: "UTGST",

  /**
   * value: "IGST"
   * @const
   */
  IGST: "IGST",

  /**
   * value: "MwSt."
   * @const
   */
  mwSt_: "MwSt.",

  /**
   * value: "PST"
   * @const
   */
  PST: "PST",

  /**
   * value: "TVA"
   * @const
   */
  TVA: "TVA",

  /**
   * value: "VAT"
   * @const
   */
  VAT: "VAT",

  /**
   * value: "GST"
   * @const
   */
  GST: "GST",

  /**
   * value: "ST"
   * @const
   */
  ST: "ST",

  /**
   * value: "Consumption"
   * @const
   */
  consumption: "Consumption",

  /**
   * value: "MutuallyDefined"
   * @const
   */
  mutuallyDefined: "MutuallyDefined",

  /**
   * value: "DomesticVAT"
   * @const
   */
  domesticVAT: "DomesticVAT"
};

/**
 * Type of the tax applied.
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/TaxDetails.TaxTypeEnum} taxType
 */
TaxDetails.prototype.taxType = undefined;

/**
 * Tax percentage applied. Percentage must be expressed in decimal.
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/Decimal} taxRate
 */
TaxDetails.prototype.taxRate = undefined;

/**
 * Total tax amount applied on invoice total or an item total.
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/Money} taxAmount
 */
TaxDetails.prototype.taxAmount = undefined;

/**
 * The invoice amount that is taxable at the rate specified in the tax rate field.
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/Money} taxableAmount
 */
TaxDetails.prototype.taxableAmount = undefined;


