const CustomResponse = require("../helpers/response");
const Ecomstringattributevaluepairlist = require("../models/Ecomstringattributevaluepairlist");
var EcomstringattributevaluepairlistController = {};

EcomstringattributevaluepairlistController.getAllEcomstringattributevaluepairlist =
  async (req, res) => {
    try {
      const ecomstringattributevaluepairlists =
        await Ecomstringattributevaluepairlist.find();
      res.json(ecomstringattributevaluepairlists);
    } catch (ex) {
      res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
    }
  };

EcomstringattributevaluepairlistController.getEcomstringattributevaluepairlistById =
  async (req, res) => {
    try {
      const ecomstringattributevaluepairlist =
        await Ecomstringattributevaluepairlist.findById(req.params.id);
      res.json({
        _id: ecomstringattributevaluepairlist._id,
        attributeName: ecomstringattributevaluepairlist.attributeName,
        qualifierCodeName: ecomstringattributevaluepairlist.qualifierCodeName,
        qualifierCodeList: ecomstringattributevaluepairlist.qualifierCodeList,
        qualifierCodeListVersion:
          ecomstringattributevaluepairlist.qualifierCodeListVersion,
        createdAt: ecomstringattributevaluepairlist.createdAt,
      });
    } catch (ex) {
      res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
    }
  };

EcomstringattributevaluepairlistController.postEcomstringattributevaluepairlist =
  async (req, res) => {
    try {
      const ecomstringattributevaluepairlist =
        new Ecomstringattributevaluepairlist({
          attributeName: req.body.attributeName,
          qualifierCodeName: req.body.qualifierCodeName,
          qualifierCodeList: req.body.qualifierCodeList,
          qualifierCodeListVersion: req.body.qualifierCodeListVersion,
        });
      const savedEcomstringattributevaluepairlist =
        await ecomstringattributevaluepairlist.save();
      res.status(200).json(savedEcomstringattributevaluepairlist);
    } catch (ex) {
      res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
    }
  };

EcomstringattributevaluepairlistController.deleteEcomstringattributevaluepairlistById =
  async (req, res) => {
    try {
      const removedEcomstringattributevaluepairlist =
        await Ecomstringattributevaluepairlist.remove({ _id: req.params.id });
      res.json(removedEcomstringattributevaluepairlist);
    } catch (ex) {
      res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
    }
  };

EcomstringattributevaluepairlistController.putEcomstringattributevaluepairlistById =
  async (req, res) => {
    try {
      const updatedEcomstringattributevaluepairlist =
        await Ecomstringattributevaluepairlist.updateOne(
          { _id: req.params.id },
          {
            $set: {
              attributeName: req.body.attributeName,
              qualifierCodeName: req.body.qualifierCodeName,
              qualifierCodeList: req.body.qualifierCodeList,
              qualifierCodeListVersion: req.body.qualifierCodeListVersion,
            },
          }
        );
      res.json(updatedEcomstringattributevaluepairlist);
    } catch (ex) {
      res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
    }
  };

module.exports = EcomstringattributevaluepairlistController;
