const { APISuccessResponse, APIErrorResponse, deleteResponseFormat } = require("../helpers/helper");
const Ecom_attributevaluepairlisttype = require("../models/Ecom_attributevaluepairlisttype");
const {
  createEcom_attributevaluepairlisttype,
  updateEcom_attributevaluepairlisttype,
} = require("../services/Ecom_attributevaluepairlisttype-service");

exports.getAllEcom_attributevaluepairlisttype = async (req, res) => {
  try {
    const Ecom_attributevaluepairlisttypes =
      await Ecom_attributevaluepairlisttype.find();
    res.json(Ecom_attributevaluepairlisttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

exports.getEcom_attributevaluepairlisttypeById = async (req, res) => {
  try {
    const ecom_attributevaluepairlisttype =
      await Ecom_attributevaluepairlisttype.findById(req.params.id);
    res.json({
      _id: ecom_attributevaluepairlisttype._id,
      id: ecom_attributevaluepairlisttype.id,
      eComStringAttributeValuePairList:
        ecom_attributevaluepairlisttype.eComStringAttributeValuePairList,
      eComStringAttributeValuePairListId:
        ecom_attributevaluepairlisttype.eComStringAttributeValuePairList.Id,
      createdAt: ecom_attributevaluepairlisttype.createdAt,
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
};

exports.postEcom_attributevaluepairlisttype = async (req, res) => {
  try {
    let savedEcom_attributevaluepairlisttype;
    createEcom_attributevaluepairlisttype(req.body)
      .then((result) => {
        savedEcom_attributevaluepairlisttype = result;

        if (!savedEcom_attributevaluepairlisttype.status) {
          res
            .status(400)
            .json(
              APIErrorResponse(savedEcom_attributevaluepairlisttype.message)
            );
        }

        res.json(
          APISuccessResponse(
            savedEcom_attributevaluepairlisttype,
            "Ecom Attribute Value PairList created successfully."
          )
        );
      })
      .catch((err) => {
        res.status(400).json(APIErrorResponse(err));
      });
  } catch (ex) {
    res.status(400).json(APIErrorResponse(ex.message));
  }
};

exports.deleteEcom_attributevaluepairlisttype = async (req, res) => {
  try {
    const removedEcom_attributevaluepairlisttype =
      await Ecom_attributevaluepairlisttype.remove({ _id: req.params.id });
    res.json(deleteResponseFormat(removedEcom_attributevaluepairlisttype));
  } catch (ex) {
    res.status(400).json(APIErrorResponse(ex.message));
  }
};

exports.putEcom_attributevaluepairlisttype = async (req, res) => {
  try {
    // const updatedEcom_attributevaluepairlisttype =
    await updateEcom_attributevaluepairlisttype({
      ...req.body,
      id: req.params.id,
    })
      .then((updatedEcom_attributevaluepairlisttype) => {
        if (!updatedEcom_attributevaluepairlisttype.status) {
          res
            .status(400)
            .json(APIErrorResponse("Ecom Attribute Value PairList failed."));
        } else {
          res.json(
            APISuccessResponse(
              updatedEcom_attributevaluepairlisttype,
              "Ecom Attribute Value PairList updated successfully."
            )
          );
        }
      })
      .catch((err) => {
        res.status(400).json(APIErrorResponse(err));
      });
  } catch (ex) {
    res.status(400).json(APIErrorResponse(ex.message));
  }
};
