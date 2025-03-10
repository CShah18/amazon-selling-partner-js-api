/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
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
import {InvoicesDocument} from './InvoicesDocument.js';

/**
 * The GetInvoicesDocumentResponse model module.
 * @module InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse
 * @version 2024-06-19
 */
export class GetInvoicesDocumentResponse {
  /**
   * Constructs a new <code>GetInvoicesDocumentResponse</code>.
   * Success.
   * @alias module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetInvoicesDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse} obj Optional instance to populate.
   * @return {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse} The populated <code>GetInvoicesDocumentResponse</code> instance.
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
      obj = obj || new GetInvoicesDocumentResponse();
      if (data.hasOwnProperty('invoicesDocument'))
        obj.invoicesDocument = InvoicesDocument.constructFromObject(data['invoicesDocument']);
    }
    return obj;
  }
}

/**
 * @member {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/InvoicesDocument} invoicesDocument
 */
GetInvoicesDocumentResponse.prototype.invoicesDocument = undefined;


