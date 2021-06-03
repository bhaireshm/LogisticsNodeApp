/* eslint-disable no-unused-vars */
const { APISuccessResponse } = require("../helpers/response");
const CustomResponse = require("../helpers/response");
const Additionalpartyidentificationtype = require("../models/Additionalpartyidentificationtype");
const Address = require("../models/Address");
const Contacttype = require("../models/Contacttype");
const Dutyfeetaxregistrationtype = require("../models/Dutyfeetaxregistrationtype");
const Financialinstitutioninformationtype = require("../models/Financialinstitutioninformationtype");
const Organisationtype = require("../models/Organisationtype");
const Transactionalpartytype = require("../models/Transactionalpartytype");
const TransactionalpartytypeService = require("../services/Transactionalpartytype-service");

var TransactionalpartytypeController = {};

TransactionalpartytypeController.getAllTransactionalpartytype = async (
  req,
  res
) => {
  try {
    const Transactionalpartytypes = await Transactionalpartytype.find();
    res.json(Transactionalpartytypes);
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

TransactionalpartytypeController.getTransactionalpartytypeById = async (
  req,
  res
) => {
  try {
    const transactionalpartytype = await Transactionalpartytype.findById(
      req.params.id
    );
    res.json({
      _id: transactionalpartytype._id,
      gln: transactionalpartytype.gln,
      additionalPartyIdentification:
        transactionalpartytype.additionalPartyIdentification,
      address: transactionalpartytype.address,
      contact: transactionalpartytype.contact,
      dutyFeeTaxRegistration: transactionalpartytype.dutyFeeTaxRegistration,
      organisationDetails: transactionalpartytype.organisationDetails,
      financialInstitutionInformation:
        transactionalpartytype.financialInstitutionInformation,
      additionalPartyIdentificationId:
        transactionalpartytype.additionalPartyIdentification.Id,
      dutyFeeTaxRegistrationId:
        transactionalpartytype.dutyFeeTaxRegistration.Id,
      financialInstitutionInformationId:
        transactionalpartytype.financialInstitutionInformation.Id,
      organisationDetailsId: transactionalpartytype.organisationDetails.Id,
      addressId: transactionalpartytype.address.Id,
      contactId: transactionalpartytype.contact.Id,
      createdAt: transactionalpartytype.createdAt,
    });
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

TransactionalpartytypeController.postTransactionalpartytype = async (
  req,
  res
) => {
  try {
    let savedTransactionalpartytype;

    await TransactionalpartytypeService.create(req.body)
      .then((result) => {
        savedTransactionalpartytype = result;

        res
          .status(200)
          .json(
            CustomResponse.APISuccessResponse(
              savedTransactionalpartytype,
              "Transactional party type saved successfully."
            )
          );
      })
      .catch((err) => {
        res.status(400).json(CustomResponse.APIErrorResponse(err, err.message));
      });
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

TransactionalpartytypeController.deleteTransactionalpartytypeById = async (
  req,
  res
) => {
  try {
    const removedTransactionalpartytype = await Transactionalpartytype.remove({
      _id: req.params.id,
    });
    const formattedResponse = CustomResponse.deleteResponseFormat(
      removedTransactionalpartytype
    );
    res.json(
      APISuccessResponse(
        null,
        formattedResponse.message,
        formattedResponse.status
      )
    );
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

TransactionalpartytypeController.putTransactionalpartytypeById = async (
  req,
  res
) => {
  try {
    let updatedTransactionalpartytype;
    await TransactionalpartytypeService.update(req.body)
      .then((result) => {
        updatedTransactionalpartytype = result;
        const formattedResponse = CustomResponse.updateResponseFormat(
          updatedTransactionalpartytype
        );

        res.json(
          CustomResponse.APISuccessResponse(
            null,
            formattedResponse.message,
            formattedResponse.status
          )
        );
      })
      .catch((err) => {
        res.status(400).json(CustomResponse.APIErrorResponse(err, err.message));
      });
  } catch (ex) {
    res.status(400).json(CustomResponse.APIErrorResponse(ex, ex.message));
  }
};

module.exports = TransactionalpartytypeController;
