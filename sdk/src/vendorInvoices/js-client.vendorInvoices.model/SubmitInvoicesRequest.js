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
import {Invoice} from './Invoice.js';

/**
 * The SubmitInvoicesRequest model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest
 * @version v1
 */
export class SubmitInvoicesRequest {
  /**
   * Constructs a new <code>SubmitInvoicesRequest</code>.
   * The request schema for the submitInvoices operation.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitInvoicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest} The populated <code>SubmitInvoicesRequest</code> instance.
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
      obj = obj || new SubmitInvoicesRequest();
      if (data.hasOwnProperty('invoices'))
        obj.invoices = ApiClient.convertToType(data['invoices'], [Invoice]);
    }
    return obj;
  }
}

/**
 * An array of Invoice objects representing the invoices or credit notes to be submitted.
 * @member {Array.<module:vendorInvoices/js-client.vendorInvoices.model/Invoice>} invoices
 */
SubmitInvoicesRequest.prototype.invoices = undefined;


