/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import {Appointment} from './Appointment.js';
import {AppointmentTime} from './AppointmentTime.js';
import {AssociatedItem} from './AssociatedItem.js';
import {Buyer} from './Buyer.js';
import {OrderId} from './OrderId.js';
import {ScopeOfWork} from './ScopeOfWork.js';
import {Seller} from './Seller.js';
import {ServiceJobId} from './ServiceJobId.js';
import {ServiceJobProvider} from './ServiceJobProvider.js';
import {ServiceLocation} from './ServiceLocation.js';

/**
 * The ServiceJob model module.
 * @module services/js-client.services.model/ServiceJob
 * @version v1
 */
export class ServiceJob {
  /**
   * Constructs a new <code>ServiceJob</code>.
   * The job details of a service.
   * @alias module:services/js-client.services.model/ServiceJob
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ServiceJob</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/ServiceJob} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/ServiceJob} The populated <code>ServiceJob</code> instance.
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
      obj = obj || new ServiceJob();
      if (data.hasOwnProperty('createTime'))
        obj.createTime = ApiClient.convertToType(data['createTime'], 'Date');
      if (data.hasOwnProperty('serviceJobId'))
        obj.serviceJobId = ServiceJobId.constructFromObject(data['serviceJobId']);
      if (data.hasOwnProperty('serviceJobStatus'))
        obj.serviceJobStatus = ApiClient.convertToType(data['serviceJobStatus'], 'String');
      if (data.hasOwnProperty('scopeOfWork'))
        obj.scopeOfWork = ScopeOfWork.constructFromObject(data['scopeOfWork']);
      if (data.hasOwnProperty('seller'))
        obj.seller = Seller.constructFromObject(data['seller']);
      if (data.hasOwnProperty('serviceJobProvider'))
        obj.serviceJobProvider = ServiceJobProvider.constructFromObject(data['serviceJobProvider']);
      if (data.hasOwnProperty('preferredAppointmentTimes'))
        obj.preferredAppointmentTimes = ApiClient.convertToType(data['preferredAppointmentTimes'], [AppointmentTime]);
      if (data.hasOwnProperty('appointments'))
        obj.appointments = ApiClient.convertToType(data['appointments'], [Appointment]);
      if (data.hasOwnProperty('serviceOrderId'))
        obj.serviceOrderId = OrderId.constructFromObject(data['serviceOrderId']);
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('storeId'))
        obj.storeId = ApiClient.convertToType(data['storeId'], 'String');
      if (data.hasOwnProperty('buyer'))
        obj.buyer = Buyer.constructFromObject(data['buyer']);
      if (data.hasOwnProperty('associatedItems'))
        obj.associatedItems = ApiClient.convertToType(data['associatedItems'], [AssociatedItem]);
      if (data.hasOwnProperty('serviceLocation'))
        obj.serviceLocation = ServiceLocation.constructFromObject(data['serviceLocation']);
    }
    return obj;
  }
}

/**
 * The date and time of the creation of the job in ISO 8601 format.
 * @member {Date} createTime
 */
ServiceJob.prototype.createTime = undefined;

/**
 * The service job identifier.
 * @member {module:services/js-client.services.model/ServiceJobId} serviceJobId
 */
ServiceJob.prototype.serviceJobId = undefined;

/**
 * Allowed values for the <code>serviceJobStatus</code> property.
 * @enum {String}
 * @readonly
 */
ServiceJob.ServiceJobStatusEnum = {
  /**
   * value: "NOT_SERVICED"
   * @const
   */
  NOT_SERVICED: "NOT_SERVICED",

  /**
   * value: "CANCELLED"
   * @const
   */
  CANCELLED: "CANCELLED",

  /**
   * value: "COMPLETED"
   * @const
   */
  COMPLETED: "COMPLETED",

  /**
   * value: "PENDING_SCHEDULE"
   * @const
   */
  PENDING_SCHEDULE: "PENDING_SCHEDULE",

  /**
   * value: "NOT_FULFILLABLE"
   * @const
   */
  NOT_FULFILLABLE: "NOT_FULFILLABLE",

  /**
   * value: "HOLD"
   * @const
   */
  HOLD: "HOLD",

  /**
   * value: "PAYMENT_DECLINED"
   * @const
   */
  PAYMENT_DECLINED: "PAYMENT_DECLINED"
};

/**
 * The status of the service job.
 * @member {module:services/js-client.services.model/ServiceJob.ServiceJobStatusEnum} serviceJobStatus
 */
ServiceJob.prototype.serviceJobStatus = undefined;

/**
 * The scope of work for the order.
 * @member {module:services/js-client.services.model/ScopeOfWork} scopeOfWork
 */
ServiceJob.prototype.scopeOfWork = undefined;

/**
 * Information about the seller of the service job.
 * @member {module:services/js-client.services.model/Seller} seller
 */
ServiceJob.prototype.seller = undefined;

/**
 * Information about the service job provider.
 * @member {module:services/js-client.services.model/ServiceJobProvider} serviceJobProvider
 */
ServiceJob.prototype.serviceJobProvider = undefined;

/**
 * A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order.
 * @member {Array.<module:services/js-client.services.model/AppointmentTime>} preferredAppointmentTimes
 */
ServiceJob.prototype.preferredAppointmentTimes = undefined;

/**
 * A list of appointments.
 * @member {Array.<module:services/js-client.services.model/Appointment>} appointments
 */
ServiceJob.prototype.appointments = undefined;

/**
 * The Amazon-defined identifier for an order placed by the buyer in 3-7-7 format.
 * @member {module:services/js-client.services.model/OrderId} serviceOrderId
 */
ServiceJob.prototype.serviceOrderId = undefined;

/**
 * The marketplace identifier.
 * @member {String} marketplaceId
 */
ServiceJob.prototype.marketplaceId = undefined;

/**
 * The Amazon-defined identifier for the region scope.
 * @member {String} storeId
 */
ServiceJob.prototype.storeId = undefined;

/**
 * Information about the buyer.
 * @member {module:services/js-client.services.model/Buyer} buyer
 */
ServiceJob.prototype.buyer = undefined;

/**
 * A list of items associated with the service job.
 * @member {Array.<module:services/js-client.services.model/AssociatedItem>} associatedItems
 */
ServiceJob.prototype.associatedItems = undefined;

/**
 * Information about the location of the service job.
 * @member {module:services/js-client.services.model/ServiceLocation} serviceLocation
 */
ServiceJob.prototype.serviceLocation = undefined;


