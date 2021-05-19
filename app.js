const express = require("express");
const mongoose = require("mongoose");
const createService = require("./src/services/sampleRecord");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.js");
const path = require("path");

const authRoute = require("./src/routes/auth");
const AdditionalconsignmentidentificationtypesRoute = require("./src/routes/Additionalconsignmentidentificationtypes");
const AdditionalindividualassetidentificationsRoute = require("./src/routes/Additionalindividualassetidentifications");
const AdditionallocationidentificationsRoute = require("./src/routes/Additionallocationidentifications");
const AdditionallogisticunitidentificationtypesRoute = require("./src/routes/Additionallogisticunitidentificationtypes");
const AdditionalpartyidentificationsRoute = require("./src/routes/Additionalpartyidentifications");
const AdditionalpartyidentificationtypesRoute = require("./src/routes/Additionalpartyidentificationtypes");
const AdditionalreturnableassetidentificationsRoute = require("./src/routes/Additionalreturnableassetidentifications");
const AdditionalshipmentidentificationtypesRoute = require("./src/routes/Additionalshipmentidentificationtypes");
const AddresssRoute = require("./src/routes/Addresss");
const AfterhourscommunicationchannelsRoute = require("./src/routes/Afterhourscommunicationchannels");
const AlternatedeliverytermscodesRoute = require("./src/routes/Alternatedeliverytermscodes");
const AmounttypesRoute = require("./src/routes/Amounttypes");
const AssociatedinvoiceamountsRoute = require("./src/routes/Associatedinvoiceamounts");
const BusinessservicesRoute = require("./src/routes/Businessservices");
const CargotypecodesRoute = require("./src/routes/Cargotypecodes");
const CargotypedescriptionsRoute = require("./src/routes/Cargotypedescriptions");
const CarriersRoute = require("./src/routes/Carriers");
const CodetypesRoute = require("./src/routes/Codetypes");
const CommunicationchannelsRoute = require("./src/routes/Communicationchannels");
const CommunicationchannelcodesRoute = require("./src/routes/Communicationchannelcodes");
const CommunicationchanneltypesRoute = require("./src/routes/Communicationchanneltypes");
const ConsignmentidentificationtypesRoute = require("./src/routes/Consignmentidentificationtypes");
const ContactinformationsRoute = require("./src/routes/Contactinformations");
const ContacttypesRoute = require("./src/routes/Contacttypes");
const ContacttypecodesRoute = require("./src/routes/Contacttypecodes");
const ContentownersRoute = require("./src/routes/Contentowners");
const CorrelationinformationsRoute = require("./src/routes/Correlationinformations");
const CountrycodesRoute = require("./src/routes/Countrycodes");
const CountryoforigincodesRoute = require("./src/routes/Countryoforigincodes");
const CurrencyofpartycodesRoute = require("./src/routes/Currencyofpartycodes");
const CurrentholderregistrationsRoute = require("./src/routes/Currentholderregistrations");
const DangerousgoodsattributetypesRoute = require("./src/routes/Dangerousgoodsattributetypes");
const DangerousgoodsinformationtypesRoute = require("./src/routes/Dangerousgoodsinformationtypes");
const DangerousgoodsregulationinformationtypesRoute = require("./src/routes/Dangerousgoodsregulationinformationtypes");
const DateoptionaltimetypesRoute = require("./src/routes/Dateoptionaltimetypes");
const DatetimerangetypesRoute = require("./src/routes/Datetimerangetypes");
const DeclaredvalueforcustomssRoute = require("./src/routes/Declaredvalueforcustomss");
const DeclaredweightforcustomssRoute = require("./src/routes/Declaredweightforcustomss");
const DeliveryinstructionssRoute = require("./src/routes/Deliveryinstructionss");
const DeliverytermslocationsRoute = require("./src/routes/Deliverytermslocations");
const DeliverytermstypesRoute = require("./src/routes/Deliverytermstypes");
const DepthsRoute = require("./src/routes/Depths");
const DescriptionsRoute = require("./src/routes/Descriptions");
const Description1000typesRoute = require("./src/routes/Description1000types");
const Description200typesRoute = require("./src/routes/Description200types");
const Description500typesRoute = require("./src/routes/Description500types");
const Description70typesRoute = require("./src/routes/Description70types");
const Description80typesRoute = require("./src/routes/Description80types");
const DimensiontypesRoute = require("./src/routes/Dimensiontypes");
const DocumenteffectivedatesRoute = require("./src/routes/Documenteffectivedates");
const DocumentidentificationsRoute = require("./src/routes/Documentidentifications");
const DocumentreferencetypesRoute = require("./src/routes/Documentreferencetypes");
const DropoffpartysRoute = require("./src/routes/Dropoffpartys");
const DutyfeetaxdescriptionsRoute = require("./src/routes/Dutyfeetaxdescriptions");
const DutyfeetaxregistrationsRoute = require("./src/routes/Dutyfeetaxregistrations");
const DutyfeetaxregistrationidsRoute = require("./src/routes/Dutyfeetaxregistrationids");
const DutyfeetaxregistrationtypesRoute = require("./src/routes/Dutyfeetaxregistrationtypes");
const DutyfeetaxtypecodesRoute = require("./src/routes/Dutyfeetaxtypecodes");
const Ecom_attributevaluepairlisttypesRoute = require("./src/routes/Ecom_attributevaluepairlisttypes");
const EcomstringattributevaluepairlistsRoute = require("./src/routes/Ecomstringattributevaluepairlists");
const EntityidentificationtypesRoute = require("./src/routes/Entityidentificationtypes");
const EnumerationlibrarysRoute = require("./src/routes/Enumerationlibrarys");
const FinaldestinationcountrysRoute = require("./src/routes/Finaldestinationcountrys");
const FinancialaccountsRoute = require("./src/routes/Financialaccounts");
const FinancialaccountnumbertypecodesRoute = require("./src/routes/Financialaccountnumbertypecodes");
const FinancialaccounttypesRoute = require("./src/routes/Financialaccounttypes");
const FinancialinstitutioninformationtypesRoute = require("./src/routes/Financialinstitutioninformationtypes");
const FinancialroutingnumbersRoute = require("./src/routes/Financialroutingnumbers");
const FinancialroutingnumbertypesRoute = require("./src/routes/Financialroutingnumbertypes");
const FinancialroutingnumbertypecodesRoute = require("./src/routes/Financialroutingnumbertypecodes");
const GeographicalcoordinatessRoute = require("./src/routes/Geographicalcoordinatess");
const HandlinginstructioncodesRoute = require("./src/routes/Handlinginstructioncodes");
const HandlinginstructiontextsRoute = require("./src/routes/Handlinginstructiontexts");
const HandlinginstructiontypesRoute = require("./src/routes/Handlinginstructiontypes");
const HarmonizedsystemcodesRoute = require("./src/routes/Harmonizedsystemcodes");
const HeightsRoute = require("./src/routes/Heights");
const IdentifiersRoute = require("./src/routes/Identifiers");
const IdentifiertypesRoute = require("./src/routes/Identifiertypes");
const IdentitydocumentsRoute = require("./src/routes/Identitydocuments");
const IdentitydocumenttypesRoute = require("./src/routes/Identitydocumenttypes");
const IncludedtransportequipmentsRoute = require("./src/routes/Includedtransportequipments");
const IncludedtransportmeanssRoute = require("./src/routes/Includedtransportmeanss");
const IncotermscodesRoute = require("./src/routes/Incotermscodes");
const IndividualassetidentificationsRoute = require("./src/routes/Individualassetidentifications");
const IndividualreturnableassetidentificationsRoute = require("./src/routes/Individualreturnableassetidentifications");
const IssuedcapitalsRoute = require("./src/routes/Issuedcapitals");
const LanguageofthepartycodesRoute = require("./src/routes/Languageofthepartycodes");
const LegalregistrationsRoute = require("./src/routes/Legalregistrations");
const LegalregistrationtypesRoute = require("./src/routes/Legalregistrationtypes");
const LegalstructuresRoute = require("./src/routes/Legalstructures");
const LocationspecificinstructionssRoute = require("./src/routes/Locationspecificinstructionss");
const LogisticeventdatetimesRoute = require("./src/routes/Logisticeventdatetimes");
const LogisticeventdurationsRoute = require("./src/routes/Logisticeventdurations");
const LogisticeventperiodsRoute = require("./src/routes/Logisticeventperiods");
const LogisticeventtypesRoute = require("./src/routes/Logisticeventtypes");
const LogisticeventtypecodesRoute = require("./src/routes/Logisticeventtypecodes");
const LogisticlocationsRoute = require("./src/routes/Logisticlocations");
const LogisticlocationtypesRoute = require("./src/routes/Logisticlocationtypes");
const LogisticservicesbuyersRoute = require("./src/routes/Logisticservicesbuyers");
const LogisticservicessellersRoute = require("./src/routes/Logisticservicessellers");
const LogisticservicetypesRoute = require("./src/routes/Logisticservicetypes");
const LogisticunitidentificationtypesRoute = require("./src/routes/Logisticunitidentificationtypes");
const LogisticunittypesRoute = require("./src/routes/Logisticunittypes");
const ManifestsRoute = require("./src/routes/Manifests");
const ManifestitemsRoute = require("./src/routes/Manifestitems");
const MaximumtemperaturesRoute = require("./src/routes/Maximumtemperatures");
const MeasurementtypesRoute = require("./src/routes/Measurementtypes");
const MinimumtemperaturesRoute = require("./src/routes/Minimumtemperatures");
const Multidescription70typesRoute = require("./src/routes/Multidescription70types");
const NationalitysRoute = require("./src/routes/Nationalitys");
const NewholderregistrationsRoute = require("./src/routes/Newholderregistrations");
const OfficialaddresssRoute = require("./src/routes/Officialaddresss");
const OperatinghourstypesRoute = require("./src/routes/Operatinghourstypes");
const OrganisationdetailssRoute = require("./src/routes/Organisationdetailss");
const OrganisationtypesRoute = require("./src/routes/Organisationtypes");
const PackagetotalsRoute = require("./src/routes/Packagetotals");
const PackagetotaltypesRoute = require("./src/routes/Packagetotaltypes");
const PackagetypecodesRoute = require("./src/routes/Packagetypecodes");
const PackagingconditioncodesRoute = require("./src/routes/Packagingconditioncodes");
const PackagingmarkingtypesRoute = require("./src/routes/Packagingmarkingtypes");
const PartyidentificationtypesRoute = require("./src/routes/Partyidentificationtypes");
const PassengercategorycodesRoute = require("./src/routes/Passengercategorycodes");
const PassengerinformationtypesRoute = require("./src/routes/Passengerinformationtypes");
const PassengertariffgroupsRoute = require("./src/routes/Passengertariffgroups");
const PersonsRoute = require("./src/routes/Persons");
const PickuppartysRoute = require("./src/routes/Pickuppartys");
const PrintinginstructioncodesRoute = require("./src/routes/Printinginstructioncodes");
const QuantitytypesRoute = require("./src/routes/Quantitytypes");
const RegularoperatinghourssRoute = require("./src/routes/Regularoperatinghourss");
const ResponsibilitysRoute = require("./src/routes/Responsibilitys");
const ReturnableassetidentificationsRoute = require("./src/routes/Returnableassetidentifications");
const ReturnableassettypeidentificationsRoute = require("./src/routes/Returnableassettypeidentifications");
const ReturnablepackagingsRoute = require("./src/routes/Returnablepackagings");
const ReturnablepackagingtypesRoute = require("./src/routes/Returnablepackagingtypes");
const RouteidsRoute = require("./src/routes/Routeids");
const ScopesRoute = require("./src/routes/Scopes");
const ServicetransactionsRoute = require("./src/routes/Servicetransactions");
const ShipmentidentificationtypesRoute = require("./src/routes/Shipmentidentificationtypes");
const SpecialdatenamesRoute = require("./src/routes/Specialdatenames");
const SpecialoperatinghourssRoute = require("./src/routes/Specialoperatinghourss");
const SpecialoperatinghourstypesRoute = require("./src/routes/Specialoperatinghourstypes");
const StandardbusinessdocumentheadersRoute = require("./src/routes/Standardbusinessdocumentheaders");
const TemperaturerangetypesRoute = require("./src/routes/Temperaturerangetypes");
const TimemeasurementtypesRoute = require("./src/routes/Timemeasurementtypes");
const TotalchargeableweightsRoute = require("./src/routes/Totalchargeableweights");
const TotalgrossvolumesRoute = require("./src/routes/Totalgrossvolumes");
const TotalgrossweightsRoute = require("./src/routes/Totalgrossweights");
const TotalitemquantitysRoute = require("./src/routes/Totalitemquantitys");
const TotalloadinglengthsRoute = require("./src/routes/Totalloadinglengths");
const TotalpackagequantitysRoute = require("./src/routes/Totalpackagequantitys");
const TotaltransportnetweightsRoute = require("./src/routes/Totaltransportnetweights");
const TransactionalpartytypesRoute = require("./src/routes/Transactionalpartytypes");
const TransportcapacitybookingsRoute = require("./src/routes/Transportcapacitybookings");
const TransportcapacitybookingidentificationsRoute = require("./src/routes/Transportcapacitybookingidentifications");
const TransportcapacitybookingresponsesRoute = require("./src/routes/Transportcapacitybookingresponses");
const TransportcapacitybookingresponseidentificationsRoute = require("./src/routes/Transportcapacitybookingresponseidentifications");
const TransportcapacitybookingspacerequirementsRoute = require("./src/routes/Transportcapacitybookingspacerequirements");
const TransportcapacitybookingtransportmovementtypesRoute = require("./src/routes/Transportcapacitybookingtransportmovementtypes");
const TransportcargocharacteristicstypesRoute = require("./src/routes/Transportcargocharacteristicstypes");
const TransportequipmenttypesRoute = require("./src/routes/Transportequipmenttypes");
const TransportequipmenttypecodesRoute = require("./src/routes/Transportequipmenttypecodes");
const TransportequipmentweightsRoute = require("./src/routes/Transportequipmentweights");
const TransportinstructionconsignmentitemtypesRoute = require("./src/routes/Transportinstructionconsignmentitemtypes");
const TransportinstructiontermstypesRoute = require("./src/routes/Transportinstructiontermstypes");
const TransportinstructiontransportequipmenttypesRoute = require("./src/routes/Transportinstructiontransportequipmenttypes");
const TransportinstructiontransportmovementtypesRoute = require("./src/routes/Transportinstructiontransportmovementtypes");
const TransportmeansidsRoute = require("./src/routes/Transportmeansids");
const TransportmeanstypesRoute = require("./src/routes/Transportmeanstypes");
const TransportmodecodesRoute = require("./src/routes/Transportmodecodes");
const TransportreferencesRoute = require("./src/routes/Transportreferences");
const TransportreferencetypesRoute = require("./src/routes/Transportreferencetypes");
const TransportreferencetypecodesRoute = require("./src/routes/Transportreferencetypecodes");
const TransportsealtypesRoute = require("./src/routes/Transportsealtypes");
const TransportservicecategorycodesRoute = require("./src/routes/Transportservicecategorycodes");
const TransportserviceconditiontypecodesRoute = require("./src/routes/Transportserviceconditiontypecodes");
const TransportservicelevelcodesRoute = require("./src/routes/Transportservicelevelcodes");
const UnitmeasurementtypesRoute = require("./src/routes/Unitmeasurementtypes");
const UnlocationcodesRoute = require("./src/routes/Unlocationcodes");
const WidthsRoute = require("./src/routes/Widths");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

//Your API ENDPOINTS
app.use("/api/user", authRoute);
app.use(
  "/api/additionalconsignmentidentificationtypes",
  AdditionalconsignmentidentificationtypesRoute
);
app.use(
  "/api/additionalindividualassetidentifications",
  AdditionalindividualassetidentificationsRoute
);
app.use(
  "/api/additionallocationidentifications",
  AdditionallocationidentificationsRoute
);
app.use(
  "/api/additionallogisticunitidentificationtypes",
  AdditionallogisticunitidentificationtypesRoute
);
app.use(
  "/api/additionalpartyidentifications",
  AdditionalpartyidentificationsRoute
);
app.use(
  "/api/additionalpartyidentificationtypes",
  AdditionalpartyidentificationtypesRoute
);
app.use(
  "/api/additionalreturnableassetidentifications",
  AdditionalreturnableassetidentificationsRoute
);
app.use(
  "/api/additionalshipmentidentificationtypes",
  AdditionalshipmentidentificationtypesRoute
);
app.use("/api/addresss", AddresssRoute);
app.use(
  "/api/afterhourscommunicationchannels",
  AfterhourscommunicationchannelsRoute
);
app.use("/api/alternatedeliverytermscodes", AlternatedeliverytermscodesRoute);
app.use("/api/amounttypes", AmounttypesRoute);
app.use("/api/associatedinvoiceamounts", AssociatedinvoiceamountsRoute);
app.use("/api/businessservices", BusinessservicesRoute);
app.use("/api/cargotypecodes", CargotypecodesRoute);
app.use("/api/cargotypedescriptions", CargotypedescriptionsRoute);
app.use("/api/carriers", CarriersRoute);
app.use("/api/codetypes", CodetypesRoute);
app.use("/api/communicationchannels", CommunicationchannelsRoute);
app.use("/api/communicationchannelcodes", CommunicationchannelcodesRoute);
app.use("/api/communicationchanneltypes", CommunicationchanneltypesRoute);
app.use(
  "/api/consignmentidentificationtypes",
  ConsignmentidentificationtypesRoute
);
app.use("/api/contactinformations", ContactinformationsRoute);
app.use("/api/contacttypes", ContacttypesRoute);
app.use("/api/contacttypecodes", ContacttypecodesRoute);
app.use("/api/contentowners", ContentownersRoute);
app.use("/api/correlationinformations", CorrelationinformationsRoute);
app.use("/api/countrycodes", CountrycodesRoute);
app.use("/api/countryoforigincodes", CountryoforigincodesRoute);
app.use("/api/currencyofpartycodes", CurrencyofpartycodesRoute);
app.use("/api/currentholderregistrations", CurrentholderregistrationsRoute);
app.use("/api/dangerousgoodsattributetypes", DangerousgoodsattributetypesRoute);
app.use(
  "/api/dangerousgoodsinformationtypes",
  DangerousgoodsinformationtypesRoute
);
app.use(
  "/api/dangerousgoodsregulationinformationtypes",
  DangerousgoodsregulationinformationtypesRoute
);
app.use("/api/dateoptionaltimetypes", DateoptionaltimetypesRoute);
app.use("/api/datetimerangetypes", DatetimerangetypesRoute);
app.use("/api/declaredvalueforcustomss", DeclaredvalueforcustomssRoute);
app.use("/api/declaredweightforcustomss", DeclaredweightforcustomssRoute);
app.use("/api/deliveryinstructionss", DeliveryinstructionssRoute);
app.use("/api/deliverytermslocations", DeliverytermslocationsRoute);
app.use("/api/deliverytermstypes", DeliverytermstypesRoute);
app.use("/api/depths", DepthsRoute);
app.use("/api/descriptions", DescriptionsRoute);
app.use("/api/description1000types", Description1000typesRoute);
app.use("/api/description200types", Description200typesRoute);
app.use("/api/description500types", Description500typesRoute);
app.use("/api/description70types", Description70typesRoute);
app.use("/api/description80types", Description80typesRoute);
app.use("/api/dimensiontypes", DimensiontypesRoute);
app.use("/api/documenteffectivedates", DocumenteffectivedatesRoute);
app.use("/api/documentidentifications", DocumentidentificationsRoute);
app.use("/api/documentreferencetypes", DocumentreferencetypesRoute);
app.use("/api/dropoffpartys", DropoffpartysRoute);
app.use("/api/dutyfeetaxdescriptions", DutyfeetaxdescriptionsRoute);
app.use("/api/dutyfeetaxregistrations", DutyfeetaxregistrationsRoute);
app.use("/api/dutyfeetaxregistrationids", DutyfeetaxregistrationidsRoute);
app.use("/api/dutyfeetaxregistrationtypes", DutyfeetaxregistrationtypesRoute);
app.use("/api/dutyfeetaxtypecodes", DutyfeetaxtypecodesRoute);
app.use(
  "/api/ecom_attributevaluepairlisttypes",
  Ecom_attributevaluepairlisttypesRoute
);
app.use(
  "/api/ecomstringattributevaluepairlists",
  EcomstringattributevaluepairlistsRoute
);
app.use("/api/entityidentificationtypes", EntityidentificationtypesRoute);
app.use("/api/enumerationlibrarys", EnumerationlibrarysRoute);
app.use("/api/finaldestinationcountrys", FinaldestinationcountrysRoute);
app.use("/api/financialaccounts", FinancialaccountsRoute);
app.use(
  "/api/financialaccountnumbertypecodes",
  FinancialaccountnumbertypecodesRoute
);
app.use("/api/financialaccounttypes", FinancialaccounttypesRoute);
app.use(
  "/api/financialinstitutioninformationtypes",
  FinancialinstitutioninformationtypesRoute
);
app.use("/api/financialroutingnumbers", FinancialroutingnumbersRoute);
app.use("/api/financialroutingnumbertypes", FinancialroutingnumbertypesRoute);
app.use(
  "/api/financialroutingnumbertypecodes",
  FinancialroutingnumbertypecodesRoute
);
app.use("/api/geographicalcoordinatess", GeographicalcoordinatessRoute);
app.use("/api/handlinginstructioncodes", HandlinginstructioncodesRoute);
app.use("/api/handlinginstructiontexts", HandlinginstructiontextsRoute);
app.use("/api/handlinginstructiontypes", HandlinginstructiontypesRoute);
app.use("/api/harmonizedsystemcodes", HarmonizedsystemcodesRoute);
app.use("/api/heights", HeightsRoute);
app.use("/api/identifiers", IdentifiersRoute);
app.use("/api/identifiertypes", IdentifiertypesRoute);
app.use("/api/identitydocuments", IdentitydocumentsRoute);
app.use("/api/identitydocumenttypes", IdentitydocumenttypesRoute);
app.use("/api/includedtransportequipments", IncludedtransportequipmentsRoute);
app.use("/api/includedtransportmeanss", IncludedtransportmeanssRoute);
app.use("/api/incotermscodes", IncotermscodesRoute);
app.use(
  "/api/individualassetidentifications",
  IndividualassetidentificationsRoute
);
app.use(
  "/api/individualreturnableassetidentifications",
  IndividualreturnableassetidentificationsRoute
);
app.use("/api/issuedcapitals", IssuedcapitalsRoute);
app.use("/api/languageofthepartycodes", LanguageofthepartycodesRoute);
app.use("/api/legalregistrations", LegalregistrationsRoute);
app.use("/api/legalregistrationtypes", LegalregistrationtypesRoute);
app.use("/api/legalstructures", LegalstructuresRoute);
app.use(
  "/api/locationspecificinstructionss",
  LocationspecificinstructionssRoute
);
app.use("/api/logisticeventdatetimes", LogisticeventdatetimesRoute);
app.use("/api/logisticeventdurations", LogisticeventdurationsRoute);
app.use("/api/logisticeventperiods", LogisticeventperiodsRoute);
app.use("/api/logisticeventtypes", LogisticeventtypesRoute);
app.use("/api/logisticeventtypecodes", LogisticeventtypecodesRoute);
app.use("/api/logisticlocations", LogisticlocationsRoute);
app.use("/api/logisticlocationtypes", LogisticlocationtypesRoute);
app.use("/api/logisticservicesbuyers", LogisticservicesbuyersRoute);
app.use("/api/logisticservicessellers", LogisticservicessellersRoute);
app.use("/api/logisticservicetypes", LogisticservicetypesRoute);
app.use(
  "/api/logisticunitidentificationtypes",
  LogisticunitidentificationtypesRoute
);
app.use("/api/logisticunittypes", LogisticunittypesRoute);
app.use("/api/manifests", ManifestsRoute);
app.use("/api/manifestitems", ManifestitemsRoute);
app.use("/api/maximumtemperatures", MaximumtemperaturesRoute);
app.use("/api/measurementtypes", MeasurementtypesRoute);
app.use("/api/minimumtemperatures", MinimumtemperaturesRoute);
app.use("/api/multidescription70types", Multidescription70typesRoute);
app.use("/api/nationalitys", NationalitysRoute);
app.use("/api/newholderregistrations", NewholderregistrationsRoute);
app.use("/api/officialaddresss", OfficialaddresssRoute);
app.use("/api/operatinghourstypes", OperatinghourstypesRoute);
app.use("/api/organisationdetailss", OrganisationdetailssRoute);
app.use("/api/organisationtypes", OrganisationtypesRoute);
app.use("/api/packagetotals", PackagetotalsRoute);
app.use("/api/packagetotaltypes", PackagetotaltypesRoute);
app.use("/api/packagetypecodes", PackagetypecodesRoute);
app.use("/api/packagingconditioncodes", PackagingconditioncodesRoute);
app.use("/api/packagingmarkingtypes", PackagingmarkingtypesRoute);
app.use("/api/partyidentificationtypes", PartyidentificationtypesRoute);
app.use("/api/passengercategorycodes", PassengercategorycodesRoute);
app.use("/api/passengerinformationtypes", PassengerinformationtypesRoute);
app.use("/api/passengertariffgroups", PassengertariffgroupsRoute);
app.use("/api/persons", PersonsRoute);
app.use("/api/pickuppartys", PickuppartysRoute);
app.use("/api/printinginstructioncodes", PrintinginstructioncodesRoute);
app.use("/api/quantitytypes", QuantitytypesRoute);
app.use("/api/regularoperatinghourss", RegularoperatinghourssRoute);
app.use("/api/responsibilitys", ResponsibilitysRoute);
app.use(
  "/api/returnableassetidentifications",
  ReturnableassetidentificationsRoute
);
app.use(
  "/api/returnableassettypeidentifications",
  ReturnableassettypeidentificationsRoute
);
app.use("/api/returnablepackagings", ReturnablepackagingsRoute);
app.use("/api/returnablepackagingtypes", ReturnablepackagingtypesRoute);
app.use("/api/routeids", RouteidsRoute);
app.use("/api/scopes", ScopesRoute);
app.use("/api/servicetransactions", ServicetransactionsRoute);
app.use("/api/shipmentidentificationtypes", ShipmentidentificationtypesRoute);
app.use("/api/specialdatenames", SpecialdatenamesRoute);
app.use("/api/specialoperatinghourss", SpecialoperatinghourssRoute);
app.use("/api/specialoperatinghourstypes", SpecialoperatinghourstypesRoute);
app.use(
  "/api/standardbusinessdocumentheaders",
  StandardbusinessdocumentheadersRoute
);
app.use("/api/temperaturerangetypes", TemperaturerangetypesRoute);
app.use("/api/timemeasurementtypes", TimemeasurementtypesRoute);
app.use("/api/totalchargeableweights", TotalchargeableweightsRoute);
app.use("/api/totalgrossvolumes", TotalgrossvolumesRoute);
app.use("/api/totalgrossweights", TotalgrossweightsRoute);
app.use("/api/totalitemquantitys", TotalitemquantitysRoute);
app.use("/api/totalloadinglengths", TotalloadinglengthsRoute);
app.use("/api/totalpackagequantitys", TotalpackagequantitysRoute);
app.use("/api/totaltransportnetweights", TotaltransportnetweightsRoute);
app.use("/api/transactionalpartytypes", TransactionalpartytypesRoute);
app.use("/api/transportcapacitybookings", TransportcapacitybookingsRoute);
app.use(
  "/api/transportcapacitybookingidentifications",
  TransportcapacitybookingidentificationsRoute
);
app.use(
  "/api/transportcapacitybookingresponses",
  TransportcapacitybookingresponsesRoute
);
app.use(
  "/api/transportcapacitybookingresponseidentifications",
  TransportcapacitybookingresponseidentificationsRoute
);
app.use(
  "/api/transportcapacitybookingspacerequirements",
  TransportcapacitybookingspacerequirementsRoute
);
app.use(
  "/api/transportcapacitybookingtransportmovementtypes",
  TransportcapacitybookingtransportmovementtypesRoute
);
app.use(
  "/api/transportcargocharacteristicstypes",
  TransportcargocharacteristicstypesRoute
);
app.use("/api/transportequipmenttypes", TransportequipmenttypesRoute);
app.use("/api/transportequipmenttypecodes", TransportequipmenttypecodesRoute);
app.use("/api/transportequipmentweights", TransportequipmentweightsRoute);
app.use(
  "/api/transportinstructionconsignmentitemtypes",
  TransportinstructionconsignmentitemtypesRoute
);
app.use(
  "/api/transportinstructiontermstypes",
  TransportinstructiontermstypesRoute
);
app.use(
  "/api/transportinstructiontransportequipmenttypes",
  TransportinstructiontransportequipmenttypesRoute
);
app.use(
  "/api/transportinstructiontransportmovementtypes",
  TransportinstructiontransportmovementtypesRoute
);
app.use("/api/transportmeansids", TransportmeansidsRoute);
app.use("/api/transportmeanstypes", TransportmeanstypesRoute);
app.use("/api/transportmodecodes", TransportmodecodesRoute);
app.use("/api/transportreferences", TransportreferencesRoute);
app.use("/api/transportreferencetypes", TransportreferencetypesRoute);
app.use("/api/transportreferencetypecodes", TransportreferencetypecodesRoute);
app.use("/api/transportsealtypes", TransportsealtypesRoute);
app.use(
  "/api/transportservicecategorycodes",
  TransportservicecategorycodesRoute
);
app.use(
  "/api/transportserviceconditiontypecodes",
  TransportserviceconditiontypecodesRoute
);
app.use("/api/transportservicelevelcodes", TransportservicelevelcodesRoute);
app.use("/api/unitmeasurementtypes", UnitmeasurementtypesRoute);
app.use("/api/unlocationcodes", UnlocationcodesRoute);
app.use("/api/widths", WidthsRoute);

//YOUR DATABASE WITH A SAMPLE RECORD
mongoose
  .connect(config.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    mongoose.set("useFindAndModify", false);
    console.log("Connected to your MongoDB.");
  })
  .catch((err) => {
    console.log("Failed to connected to DB Error: " + err.message);
  });

let createServiceObj = null;
createServiceObj = createService.getInstance();
createServiceObj.createSampleUser();
app.listen(5000, () => console.log("listening on port 5000"));
