/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listing Items API Use Case Guide](doc:listings-items-api-v2020-09-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-09-01
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
import {Error} from './js-client.listingsItems_2020-09-01.model/Error.js';
import {ErrorList} from './js-client.listingsItems_2020-09-01.model/ErrorList.js';
import {Issue} from './js-client.listingsItems_2020-09-01.model/Issue.js';
import {ListingsItemPatchRequest} from './js-client.listingsItems_2020-09-01.model/ListingsItemPatchRequest.js';
import {ListingsItemPutRequest} from './js-client.listingsItems_2020-09-01.model/ListingsItemPutRequest.js';
import {ListingsItemSubmissionResponse} from './js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse.js';
import {PatchOperation} from './js-client.listingsItems_2020-09-01.model/PatchOperation.js';
import {ListingsApi} from './js-client.listingsItems_2020-09-01.api/ListingsApi.js';


/**
* The_Selling_Partner_API_for_Listings_Items__Listings_Items_API_provides_programmatic_access_to_selling_partner_listings_on_Amazon__Use_this_API_in_collaboration_with_the_Selling_Partner_API_for_Product_Type_Definitions_which_you_use_to_retrieve_the_information_about_Amazon_product_types_needed_to_use_the_Listings_Items_API_For_more_information_see_the__Listing_Items_API_Use_Case_Guide_doclistings_items_api_v2020_09_01_use_case_guide_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForListingsItems = require('listingsItems_2020-09-01/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForListingsItems.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForListingsItems.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['listingsItems_2020-09-01/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForListingsItems.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForListingsItems.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module listingsItems_2020-09-01/index
* @version 2020-09-01
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:listingsItems_2020-09-01/ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ErrorList}
     */
    ErrorList,

    /**
     * The Issue model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue}
     */
    Issue,

    /**
     * The ListingsItemPatchRequest model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemPatchRequest}
     */
    ListingsItemPatchRequest,

    /**
     * The ListingsItemPutRequest model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemPutRequest}
     */
    ListingsItemPutRequest,

    /**
     * The ListingsItemSubmissionResponse model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse}
     */
    ListingsItemSubmissionResponse,

    /**
     * The PatchOperation model constructor.
     * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/PatchOperation}
     */
    PatchOperation,

    /**
    * The ListingsApi service constructor.
    * @property {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.api/ListingsApi}
    */
    ListingsApi
};
