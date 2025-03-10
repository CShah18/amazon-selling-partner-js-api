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

import {ApiClient} from './ApiClient.js';
import {AttributeOption} from './js-client.InvoicesApiModel_2024-06-19.model/AttributeOption.js';
import {Error} from './js-client.InvoicesApiModel_2024-06-19.model/Error.js';
import {ErrorList} from './js-client.InvoicesApiModel_2024-06-19.model/ErrorList.js';
import {ExportInvoicesRequest} from './js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesRequest.js';
import {ExportInvoicesResponse} from './js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesResponse.js';
import {ExportStatus} from './js-client.InvoicesApiModel_2024-06-19.model/ExportStatus.js';
import {FileFormat} from './js-client.InvoicesApiModel_2024-06-19.model/FileFormat.js';
import {GetInvoiceResponse} from './js-client.InvoicesApiModel_2024-06-19.model/GetInvoiceResponse.js';
import {GetInvoicesAttributesResponse} from './js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesAttributesResponse.js';
import {GetInvoicesDocumentResponse} from './js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse.js';
import {GetInvoicesExportResponse} from './js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportResponse.js';
import {GetInvoicesExportsResponse} from './js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportsResponse.js';
import {GetInvoicesResponse} from './js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesResponse.js';
import {Invoice} from './js-client.InvoicesApiModel_2024-06-19.model/Invoice.js';
import {InvoicesAttributes} from './js-client.InvoicesApiModel_2024-06-19.model/InvoicesAttributes.js';
import {InvoicesDocument} from './js-client.InvoicesApiModel_2024-06-19.model/InvoicesDocument.js';
import {ModelExport} from './js-client.InvoicesApiModel_2024-06-19.model/ModelExport.js';
import {TransactionIdentifier} from './js-client.InvoicesApiModel_2024-06-19.model/TransactionIdentifier.js';
import {InvoicesApi} from './js-client.InvoicesApiModel_2024-06-19.api/InvoicesApi.js';


/**
* Use_the_Selling_Partner_API_for_Invoices_to_retrieve_and_manage_invoice_related_operations_which_can_help_selling_partners_manage_their_bookkeeping_processes_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TheSellingPartnerApiForInvoices = require('InvoicesApiModel_2024-06-19/index'); // See note below*.
* var xxxSvc = new TheSellingPartnerApiForInvoices.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TheSellingPartnerApiForInvoices.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['InvoicesApiModel_2024-06-19/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TheSellingPartnerApiForInvoices.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TheSellingPartnerApiForInvoices.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module InvoicesApiModel_2024-06-19/index
* @version 2024-06-19
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:InvoicesApiModel_2024-06-19/ApiClient}
     */
    ApiClient,

    /**
     * The AttributeOption model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/AttributeOption}
     */
    AttributeOption,

    /**
     * The Error model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ErrorList}
     */
    ErrorList,

    /**
     * The ExportInvoicesRequest model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesRequest}
     */
    ExportInvoicesRequest,

    /**
     * The ExportInvoicesResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesResponse}
     */
    ExportInvoicesResponse,

    /**
     * The ExportStatus model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportStatus}
     */
    ExportStatus,

    /**
     * The FileFormat model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/FileFormat}
     */
    FileFormat,

    /**
     * The GetInvoiceResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoiceResponse}
     */
    GetInvoiceResponse,

    /**
     * The GetInvoicesAttributesResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesAttributesResponse}
     */
    GetInvoicesAttributesResponse,

    /**
     * The GetInvoicesDocumentResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse}
     */
    GetInvoicesDocumentResponse,

    /**
     * The GetInvoicesExportResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportResponse}
     */
    GetInvoicesExportResponse,

    /**
     * The GetInvoicesExportsResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportsResponse}
     */
    GetInvoicesExportsResponse,

    /**
     * The GetInvoicesResponse model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesResponse}
     */
    GetInvoicesResponse,

    /**
     * The Invoice model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/Invoice}
     */
    Invoice,

    /**
     * The InvoicesAttributes model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/InvoicesAttributes}
     */
    InvoicesAttributes,

    /**
     * The InvoicesDocument model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/InvoicesDocument}
     */
    InvoicesDocument,

    /**
     * The ModelExport model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ModelExport}
     */
    ModelExport,

    /**
     * The TransactionIdentifier model constructor.
     * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/TransactionIdentifier}
     */
    TransactionIdentifier,

    /**
    * The InvoicesApi service constructor.
    * @property {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.api/InvoicesApi}
    */
    InvoicesApi
};
