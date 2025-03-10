/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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

/**
 * Enum class PredefinedPackageDimensions.
 * @enum {String}
 * @readonly
 */
const PredefinedPackageDimensions = {
  /**
   * value: "FedEx_Box_10kg"
   * @const
   */
  fedExBox10kg: "FedEx_Box_10kg",

  /**
   * value: "FedEx_Box_25kg"
   * @const
   */
  fedExBox25kg: "FedEx_Box_25kg",

  /**
   * value: "FedEx_Box_Extra_Large_1"
   * @const
   */
  fedExBoxExtraLarge1: "FedEx_Box_Extra_Large_1",

  /**
   * value: "FedEx_Box_Extra_Large_2"
   * @const
   */
  fedExBoxExtraLarge2: "FedEx_Box_Extra_Large_2",

  /**
   * value: "FedEx_Box_Large_1"
   * @const
   */
  fedExBoxLarge1: "FedEx_Box_Large_1",

  /**
   * value: "FedEx_Box_Large_2"
   * @const
   */
  fedExBoxLarge2: "FedEx_Box_Large_2",

  /**
   * value: "FedEx_Box_Medium_1"
   * @const
   */
  fedExBoxMedium1: "FedEx_Box_Medium_1",

  /**
   * value: "FedEx_Box_Medium_2"
   * @const
   */
  fedExBoxMedium2: "FedEx_Box_Medium_2",

  /**
   * value: "FedEx_Box_Small_1"
   * @const
   */
  fedExBoxSmall1: "FedEx_Box_Small_1",

  /**
   * value: "FedEx_Box_Small_2"
   * @const
   */
  fedExBoxSmall2: "FedEx_Box_Small_2",

  /**
   * value: "FedEx_Envelope"
   * @const
   */
  fedExEnvelope: "FedEx_Envelope",

  /**
   * value: "FedEx_Padded_Pak"
   * @const
   */
  fedExPaddedPak: "FedEx_Padded_Pak",

  /**
   * value: "FedEx_Pak_1"
   * @const
   */
  fedExPak1: "FedEx_Pak_1",

  /**
   * value: "FedEx_Pak_2"
   * @const
   */
  fedExPak2: "FedEx_Pak_2",

  /**
   * value: "FedEx_Tube"
   * @const
   */
  fedExTube: "FedEx_Tube",

  /**
   * value: "FedEx_XL_Pak"
   * @const
   */
  fedExXLPak: "FedEx_XL_Pak",

  /**
   * value: "UPS_Box_10kg"
   * @const
   */
  uPSBox10kg: "UPS_Box_10kg",

  /**
   * value: "UPS_Box_25kg"
   * @const
   */
  uPSBox25kg: "UPS_Box_25kg",

  /**
   * value: "UPS_Express_Box"
   * @const
   */
  uPSExpressBox: "UPS_Express_Box",

  /**
   * value: "UPS_Express_Box_Large"
   * @const
   */
  uPSExpressBoxLarge: "UPS_Express_Box_Large",

  /**
   * value: "UPS_Express_Box_Medium"
   * @const
   */
  uPSExpressBoxMedium: "UPS_Express_Box_Medium",

  /**
   * value: "UPS_Express_Box_Small"
   * @const
   */
  uPSExpressBoxSmall: "UPS_Express_Box_Small",

  /**
   * value: "UPS_Express_Envelope"
   * @const
   */
  uPSExpressEnvelope: "UPS_Express_Envelope",

  /**
   * value: "UPS_Express_Hard_Pak"
   * @const
   */
  uPSExpressHardPak: "UPS_Express_Hard_Pak",

  /**
   * value: "UPS_Express_Legal_Envelope"
   * @const
   */
  uPSExpressLegalEnvelope: "UPS_Express_Legal_Envelope",

  /**
   * value: "UPS_Express_Pak"
   * @const
   */
  uPSExpressPak: "UPS_Express_Pak",

  /**
   * value: "UPS_Express_Tube"
   * @const
   */
  uPSExpressTube: "UPS_Express_Tube",

  /**
   * value: "UPS_Laboratory_Pak"
   * @const
   */
  uPSLaboratoryPak: "UPS_Laboratory_Pak",

  /**
   * value: "UPS_Pad_Pak"
   * @const
   */
  uPSPadPak: "UPS_Pad_Pak",

  /**
   * value: "UPS_Pallet"
   * @const
   */
  uPSPallet: "UPS_Pallet",

  /**
   * value: "USPS_Card"
   * @const
   */
  uSPSCard: "USPS_Card",

  /**
   * value: "USPS_Flat"
   * @const
   */
  uSPSFlat: "USPS_Flat",

  /**
   * value: "USPS_FlatRateCardboardEnvelope"
   * @const
   */
  uSPSFlatRateCardboardEnvelope: "USPS_FlatRateCardboardEnvelope",

  /**
   * value: "USPS_FlatRateEnvelope"
   * @const
   */
  uSPSFlatRateEnvelope: "USPS_FlatRateEnvelope",

  /**
   * value: "USPS_FlatRateGiftCardEnvelope"
   * @const
   */
  uSPSFlatRateGiftCardEnvelope: "USPS_FlatRateGiftCardEnvelope",

  /**
   * value: "USPS_FlatRateLegalEnvelope"
   * @const
   */
  uSPSFlatRateLegalEnvelope: "USPS_FlatRateLegalEnvelope",

  /**
   * value: "USPS_FlatRatePaddedEnvelope"
   * @const
   */
  uSPSFlatRatePaddedEnvelope: "USPS_FlatRatePaddedEnvelope",

  /**
   * value: "USPS_FlatRateWindowEnvelope"
   * @const
   */
  uSPSFlatRateWindowEnvelope: "USPS_FlatRateWindowEnvelope",

  /**
   * value: "USPS_LargeFlatRateBoardGameBox"
   * @const
   */
  uSPSLargeFlatRateBoardGameBox: "USPS_LargeFlatRateBoardGameBox",

  /**
   * value: "USPS_LargeFlatRateBox"
   * @const
   */
  uSPSLargeFlatRateBox: "USPS_LargeFlatRateBox",

  /**
   * value: "USPS_Letter"
   * @const
   */
  uSPSLetter: "USPS_Letter",

  /**
   * value: "USPS_MediumFlatRateBox1"
   * @const
   */
  uSPSMediumFlatRateBox1: "USPS_MediumFlatRateBox1",

  /**
   * value: "USPS_MediumFlatRateBox2"
   * @const
   */
  uSPSMediumFlatRateBox2: "USPS_MediumFlatRateBox2",

  /**
   * value: "USPS_RegionalRateBoxA1"
   * @const
   */
  uSPSRegionalRateBoxA1: "USPS_RegionalRateBoxA1",

  /**
   * value: "USPS_RegionalRateBoxA2"
   * @const
   */
  uSPSRegionalRateBoxA2: "USPS_RegionalRateBoxA2",

  /**
   * value: "USPS_RegionalRateBoxB1"
   * @const
   */
  uSPSRegionalRateBoxB1: "USPS_RegionalRateBoxB1",

  /**
   * value: "USPS_RegionalRateBoxB2"
   * @const
   */
  uSPSRegionalRateBoxB2: "USPS_RegionalRateBoxB2",

  /**
   * value: "USPS_RegionalRateBoxC"
   * @const
   */
  uSPSRegionalRateBoxC: "USPS_RegionalRateBoxC",

  /**
   * value: "USPS_SmallFlatRateBox"
   * @const
   */
  uSPSSmallFlatRateBox: "USPS_SmallFlatRateBox",

  /**
   * value: "USPS_SmallFlatRateEnvelope"
   * @const
   */
  uSPSSmallFlatRateEnvelope: "USPS_SmallFlatRateEnvelope",

  /**
   * Returns a <code>PredefinedPackageDimensions</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PredefinedPackageDimensions} The enum <code>PredefinedPackageDimensions</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PredefinedPackageDimensions};
