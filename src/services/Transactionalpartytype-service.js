const Additionalpartyidentificationtype = require("../models/Additionalpartyidentificationtype");
const Address = require("../models/Address");
const Contacttype = require("../models/Contacttype");
const Dutyfeetaxregistrationtype = require("../models/Dutyfeetaxregistrationtype");
const Financialinstitutioninformationtype = require("../models/Financialinstitutioninformationtype");
const Organisationtype = require("../models/Organisationtype");
const Transactionalpartytype = require("../models/Transactionalpartytype");

var TransactionalpartytypeService = {};

TransactionalpartytypeService.create = async (body) => {
  const additionalpartyidentifications =
    await Additionalpartyidentificationtype.findById(
      body.additionalPartyIdentificationId
    );
  const dutyfeetaxregistrations = await Dutyfeetaxregistrationtype.findById(
    body.dutyFeeTaxRegistrationId
  );
  const financialinstitutioninformations =
    await Financialinstitutioninformationtype.findById(
      body.financialInstitutionInformationId
    );
  const organisationdetailss = await Organisationtype.findById(
    body.organisationDetailsId
  );
  const addresss = await Address.findById(body.addressId);
  const contacts = await Contacttype.findById(body.contactId);
  const transactionalpartytype = new Transactionalpartytype({
    gln: body.gln,
    contact: contacts._id, // code reverted ui changes required.
    address: addresss._id,
    additionalPartyIdentification: additionalpartyidentifications._id,
    dutyFeeTaxRegistration: dutyfeetaxregistrations._id,
    financialInstitutionInformation: financialinstitutioninformations._id,
    organisationDetails: organisationdetailss._id,
  });
  return await transactionalpartytype.save();
};

TransactionalpartytypeService.update = async (body) => {
  const additionalpartyidentification =
    await Additionalpartyidentificationtype.findById(
      body.additionalPartyIdentificationId
    );
  const dutyfeetaxregistration = await Dutyfeetaxregistrationtype.findById(
    body.dutyFeeTaxRegistrationId
  );
  const financialinstitutioninformation =
    await Financialinstitutioninformationtype.findById(
      body.financialInstitutionInformationId
    );
  const organisationdetails = await Organisationtype.findById(
    body.organisationDetailsId
  );
  const address = await Address.findById(body.addressId);
  const contact = await Contacttype.findById(body.contactId);

  return await Transactionalpartytype.updateOne(
    { _id: body.id },
    {
      $set: {
        gln: body.gln,
        additionalPartyIdentification: body.additionalPartyIdentification,
        address: body.address,
        contact: body.contact,
        dutyFeeTaxRegistration: body.dutyFeeTaxRegistration,
        organisationDetails: body.organisationDetails,
        financialInstitutionInformation: body.financialInstitutionInformation,
        contact: {
          Id: body.contact.id,
          Name: body.contact.id,
        },
        contact: {
          Id: body.contact.id,
          Name: body.contact.id,
        },
        contact: {
          Id: body.contact.id,
          Name: body.contact.id,
        },
        contact: {
          Id: body.contact.id,
          Name: body.contact.id,
        },
        contact: {
          Id: body.contact.id,
          Name: body.contact.id,
        },
        contact: {
          Id: body.contact.id,
          Name: body.contact.id,
        },
      },
    }
  );
};

module.exports = TransactionalpartytypeService;
