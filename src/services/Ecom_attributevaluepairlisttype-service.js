const { serviceResponse } = require("../helpers/response");
const Ecomstringattributevaluepairlist = require("../models/Ecomstringattributevaluepairlist");
const Ecom_attributevaluepairlisttype = require("../models/Ecom_attributevaluepairlisttype");

exports.createEcom_attributevaluepairlisttype = async (data) => {
  try {
    // eslint-disable-next-line no-prototype-builtins
    if (!data.hasOwnProperty("eComStringAttributeValuePairListId")) {
      return serviceResponse(
        "Ecom Attribute Value PairList ID cannot be empty.",
        false
      );
    }

    const ecomstringattributevaluepairlists =
      await Ecomstringattributevaluepairlist.findOne({
        _id: data.eComStringAttributeValuePairListId,
      });

    if (!ecomstringattributevaluepairlists) {
      return serviceResponse(
        "Invalid ID or Ecom Attribute Value PairList data not found.",
        false
      );
    }

    const ecom_attributevaluepairlisttype = new Ecom_attributevaluepairlisttype(
      {
        eComStringAttributeValuePairList: [
          {
            Id: ecomstringattributevaluepairlists._id,
            Name: ecomstringattributevaluepairlists.qualifierCodeName,
          },
        ],
      }
    );

    return await ecom_attributevaluepairlisttype.save();
  } catch (ex) {
    return serviceResponse(ex.message);
  }
};

exports.updateEcom_attributevaluepairlisttype = async (data) => {
  try {
    const ecomstringattributevaluepairlist =
      await Ecomstringattributevaluepairlist.findById(
        data.eComStringAttributeValuePairListId
      );
    return await Ecom_attributevaluepairlisttype.updateOne(
      { _id: data.id },
      {
        $set: {
          eComStringAttributeValuePairList:
            data.eComStringAttributeValuePairList,
          eComStringAttributeValuePairList: {
            Id: ecomstringattributevaluepairlist._id,
            Name: ecomstringattributevaluepairlist.qualifierCodeName,
          },
        },
      }
    );
  } catch (ex) {
    return serviceResponse(ex.message);
  }
};
