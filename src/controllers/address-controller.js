const { APIErrorResponse, APISuccessResponse } = require("../helpers/helper");
const Address = require("../models/Address");
const { createAddress, updateAddress } = require("../services/Address-service");

exports.getAllAddress = async (req, res) => {
  try {
    const Addresss = await Address.find();
    return res.json(APISuccessResponse(Addresss));
  } catch (ex) {
    return res.status(400).json(APIErrorResponse(ex, ex.message));
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    return res.json({
      _id: address._id,
      city: address.city,
      cityCode: address.cityCode,
      countyCode: address.countyCode,
      crossStreet: address.crossStreet,
      name: address.name,
      pOBoxNumber: address.pOBoxNumber,
      postalCode: address.postalCode,
      provinceCode: address.provinceCode,
      state: address.state,
      streetAddressOne: address.streetAddressOne,
      streetAddressTwo: address.streetAddressTwo,
      streetAddressThree: address.streetAddressThree,
      createdAt: address.createdAt,
    });
  } catch (ex) {
    return res.status(400).json(APIErrorResponse(ex, ex.message));
  }
};

exports.postAddress = async (req, res) => {
  try {
    const savedAddress = await createAddress(req.body);
    return res
      .status(200)
      .json(APISuccessResponse(savedAddress), "Address Saved successfully.");
  } catch (ex) {
    return res.status(400).json(APIErrorResponse(ex, ex.message));
  }
};

exports.deleteAddressById = async (req, res) => {
  try {
    const removedAddress = await Address.remove({ _id: req.params.id });
    return res.json(
      APISuccessResponse(removedAddress, "Address Deleted successfully.")
    );
  } catch (ex) {
    return res.status(400).json(APIErrorResponse(ex, ex.message));
  }
};

exports.putAddressById = async (req, res) => {
  try {
    const updatedAddress = await updateAddress({
      ...req.body,
      id: req.params.id,
    });
    return res.json(
      APISuccessResponse(updatedAddress, "Address Updated Succesfully.")
    );
  } catch (ex) {
    return res.status(400).json(APIErrorResponse(ex, ex.message));
  }
};
