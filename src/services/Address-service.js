const { serviceResponse } = require("../helpers/helper");
const Address = require("../models/Address");

exports.createAddress = async (address) => {
  try {
    const addressResponse = new Address({
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
    });
    return await addressResponse.save();
  } catch (ex) {
    return serviceResponse(ex.message);
  }
};

exports.updateAddress = async (address) => {
  try {
    return await Address.updateOne(
      { _id: address.id },
      {
        $set: {
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
        },
      }
    );
  } catch (ex) {
    return serviceResponse(ex.message);
  }
};
