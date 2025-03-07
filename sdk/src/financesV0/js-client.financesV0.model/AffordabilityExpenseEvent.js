/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import {Currency} from './Currency.js';
import {ModelDate} from './ModelDate.js';

/**
 * The AffordabilityExpenseEvent model module.
 * @module financesV0/js-client.financesV0.model/AffordabilityExpenseEvent
 * @version v0
 */
export class AffordabilityExpenseEvent {
  /**
   * Constructs a new <code>AffordabilityExpenseEvent</code>.
   * An expense related to an affordability promotion.
   * @alias module:financesV0/js-client.financesV0.model/AffordabilityExpenseEvent
   * @class
   * @param taxTypeCGST {module:financesV0/js-client.financesV0.model/Currency} Central Goods and Service Tax, charged and collected by the central government.
   * @param taxTypeSGST {module:financesV0/js-client.financesV0.model/Currency} State Goods and Service Tax, charged and collected by the state government.
   * @param taxTypeIGST {module:financesV0/js-client.financesV0.model/Currency} Integrated Goods and Service Tax, charged and collected by the central government.
   */
  constructor(taxTypeCGST, taxTypeSGST, taxTypeIGST) {
    this.taxTypeCGST = taxTypeCGST;
    this.taxTypeSGST = taxTypeSGST;
    this.taxTypeIGST = taxTypeIGST;
  }

  /**
   * Constructs a <code>AffordabilityExpenseEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/AffordabilityExpenseEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/AffordabilityExpenseEvent} The populated <code>AffordabilityExpenseEvent</code> instance.
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
      obj = obj || new AffordabilityExpenseEvent();
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['AmazonOrderId'], 'String');
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
      if (data.hasOwnProperty('TransactionType'))
        obj.transactionType = ApiClient.convertToType(data['TransactionType'], 'String');
      if (data.hasOwnProperty('BaseExpense'))
        obj.baseExpense = Currency.constructFromObject(data['BaseExpense']);
      if (data.hasOwnProperty('TaxTypeCGST'))
        obj.taxTypeCGST = Currency.constructFromObject(data['TaxTypeCGST']);
      if (data.hasOwnProperty('TaxTypeSGST'))
        obj.taxTypeSGST = Currency.constructFromObject(data['TaxTypeSGST']);
      if (data.hasOwnProperty('TaxTypeIGST'))
        obj.taxTypeIGST = Currency.constructFromObject(data['TaxTypeIGST']);
      if (data.hasOwnProperty('TotalExpense'))
        obj.totalExpense = Currency.constructFromObject(data['TotalExpense']);
    }
    return obj;
  }
}

/**
 * An Amazon-defined identifier for an order.
 * @member {String} amazonOrderId
 */
AffordabilityExpenseEvent.prototype.amazonOrderId = undefined;

/**
 * The date and time when the financial event was created.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
AffordabilityExpenseEvent.prototype.postedDate = undefined;

/**
 * An encrypted, Amazon-defined marketplace identifier.
 * @member {String} marketplaceId
 */
AffordabilityExpenseEvent.prototype.marketplaceId = undefined;

/**
 * Indicates the type of transaction.   Possible values:  * Charge - For an affordability promotion expense.  * Refund - For an affordability promotion expense reversal.
 * @member {String} transactionType
 */
AffordabilityExpenseEvent.prototype.transactionType = undefined;

/**
 * The amount charged for clicks incurred under the Sponsored Products program.
 * @member {module:financesV0/js-client.financesV0.model/Currency} baseExpense
 */
AffordabilityExpenseEvent.prototype.baseExpense = undefined;

/**
 * Central Goods and Service Tax, charged and collected by the central government.
 * @member {module:financesV0/js-client.financesV0.model/Currency} taxTypeCGST
 */
AffordabilityExpenseEvent.prototype.taxTypeCGST = undefined;

/**
 * State Goods and Service Tax, charged and collected by the state government.
 * @member {module:financesV0/js-client.financesV0.model/Currency} taxTypeSGST
 */
AffordabilityExpenseEvent.prototype.taxTypeSGST = undefined;

/**
 * Integrated Goods and Service Tax, charged and collected by the central government.
 * @member {module:financesV0/js-client.financesV0.model/Currency} taxTypeIGST
 */
AffordabilityExpenseEvent.prototype.taxTypeIGST = undefined;

/**
 * The total amount charged to the seller. TotalExpense = BaseExpense + TaxTypeIGST + TaxTypeCGST + TaxTypeSGST.
 * @member {module:financesV0/js-client.financesV0.model/Currency} totalExpense
 */
AffordabilityExpenseEvent.prototype.totalExpense = undefined;


