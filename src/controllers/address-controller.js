const CustomResponse = require("../helpers/response");
const Address = require("../models/Address");
const AddressService = require("../services/Address-service");

var AddressController = {};

AddressController.getAllAddress = async (req, res) => {
  try {
    const Addresss = await Address.find();
    return res.json(CustomResponse.APISuccessResponse(Addresss));
  } catch (ex) {
    return res
      .status(400)
      .json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

AddressController.getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res
        .status(400)
        .json(
          CustomResponse.APIErrorResponse(null, "Invalid ID / ID not found.")
        );
    }

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
    return res
      .status(400)
      .json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

AddressController.postAddress = async (req, res) => {
  try {
    const savedAddress = await AddressService.createAddress(req.body);
    return res
      .status(200)
      .json(
        CustomResponse.APISuccessResponse(
          savedAddress,
          "Address Saved successfully."
        )
      );
  } catch (ex) {
    return res
      .status(400)
      .json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

AddressController.deleteAddressById = async (req, res) => {
  try {
    const removedAddress = await Address.remove({ _id: req.params.id });
    const formattedResponse =
      CustomResponse.deleteResponseFormat(removedAddress);
    return res.json(
      CustomResponse.APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    return res
      .status(400)
      .json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

AddressController.putAddressById = async (req, res) => {
  try {
    const updatedAddress = await AddressService.updateAddress({
      ...req.body,
      id: req.params.id,
    });
    const formattedResponse =
      CustomResponse.updateResponseFormat(updatedAddress);
    return res.json(
      CustomResponse.APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    return res
      .status(400)
      .json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

module.exports = AddressController;
