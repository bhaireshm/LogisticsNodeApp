const express = require("express");
const mainRoute = express.Router();

const authRoute = require("./auth");
const AdditionalconsignmentidentificationtypesRoute = require("./Additionalconsignmentidentificationtypes");
const AdditionalindividualassetidentificationsRoute = require("./Additionalindividualassetidentifications");
const AdditionallocationidentificationsRoute = require("./Additionallocationidentifications");
const AdditionallogisticunitidentificationtypesRoute = require("./Additionallogisticunitidentificationtypes");
const AdditionalpartyidentificationsRoute = require("./Additionalpartyidentifications");
const AdditionalpartyidentificationtypesRoute = require("./Additionalpartyidentificationtypes");
const AdditionalreturnableassetidentificationsRoute = require("./Additionalreturnableassetidentifications");
const AdditionalshipmentidentificationtypesRoute = require("./Additionalshipmentidentificationtypes");
const AddresssRoute = require("./Addresss");
const AfterhourscommunicationchannelsRoute = require("./Afterhourscommunicationchannels");
const AlternatedeliverytermscodesRoute = require("./Alternatedeliverytermscodes");
const AmounttypesRoute = require("./Amounttypes");
const AssociatedinvoiceamountsRoute = require("./Associatedinvoiceamounts");
const BusinessservicesRoute = require("./Businessservices");
const CargotypecodesRoute = require("./Cargotypecodes");
const CargotypedescriptionsRoute = require("./Cargotypedescriptions");
const CarriersRoute = require("./Carriers");
const CodetypesRoute = require("./Codetypes");
const CommunicationchannelsRoute = require("./Communicationchannels");
const CommunicationchannelcodesRoute = require("./Communicationchannelcodes");
const CommunicationchanneltypesRoute = require("./Communicationchanneltypes");
const ConsignmentidentificationtypesRoute = require("./Consignmentidentificationtypes");
const ContactinformationsRoute = require("./Contactinformations");
const ContacttypesRoute = require("./Contacttypes");
const ContacttypecodesRoute = require("./Contacttypecodes");
const ContentownersRoute = require("./Contentowners");
const CorrelationinformationsRoute = require("./Correlationinformations");
const CountrycodesRoute = require("./Countrycodes");
const CountryoforigincodesRoute = require("./Countryoforigincodes");
const CurrencyofpartycodesRoute = require("./Currencyofpartycodes");
const CurrentholderregistrationsRoute = require("./Currentholderregistrations");
const DangerousgoodsattributetypesRoute = require("./Dangerousgoodsattributetypes");
const DangerousgoodsinformationtypesRoute = require("./Dangerousgoodsinformationtypes");
const DangerousgoodsregulationinformationtypesRoute = require("./Dangerousgoodsregulationinformationtypes");
const DateoptionaltimetypesRoute = require("./Dateoptionaltimetypes");
const DatetimerangetypesRoute = require("./Datetimerangetypes");
const DeclaredvalueforcustomssRoute = require("./Declaredvalueforcustomss");
const DeclaredweightforcustomssRoute = require("./Declaredweightforcustomss");
const DeliveryinstructionssRoute = require("./Deliveryinstructionss");
const DeliverytermslocationsRoute = require("./Deliverytermslocations");
const DeliverytermstypesRoute = require("./Deliverytermstypes");
const DepthsRoute = require("./Depths");
const DescriptionsRoute = require("./Descriptions");
const Description1000typesRoute = require("./Description1000types");
const Description200typesRoute = require("./Description200types");
const Description500typesRoute = require("./Description500types");
const Description70typesRoute = require("./Description70types");
const Description80typesRoute = require("./Description80types");
const DimensiontypesRoute = require("./Dimensiontypes");
const DocumenteffectivedatesRoute = require("./Documenteffectivedates");
const DocumentidentificationsRoute = require("./Documentidentifications");
const DocumentreferencetypesRoute = require("./Documentreferencetypes");
const DropoffpartysRoute = require("./Dropoffpartys");
const DutyfeetaxdescriptionsRoute = require("./Dutyfeetaxdescriptions");
const DutyfeetaxregistrationsRoute = require("./Dutyfeetaxregistrations");
const DutyfeetaxregistrationidsRoute = require("./Dutyfeetaxregistrationids");
const DutyfeetaxregistrationtypesRoute = require("./Dutyfeetaxregistrationtypes");
const DutyfeetaxtypecodesRoute = require("./Dutyfeetaxtypecodes");
const Ecom_attributevaluepairlisttypesRoute = require("./Ecom_attributevaluepairlisttypes");
const EcomstringattributevaluepairlistsRoute = require("./Ecomstringattributevaluepairlists");
const EntityidentificationtypesRoute = require("./Entityidentificationtypes");
const EnumerationlibrarysRoute = require("./Enumerationlibrarys");
const FinaldestinationcountrysRoute = require("./Finaldestinationcountrys");
const FinancialaccountsRoute = require("./Financialaccounts");
const FinancialaccountnumbertypecodesRoute = require("./Financialaccountnumbertypecodes");
const FinancialaccounttypesRoute = require("./Financialaccounttypes");
const FinancialinstitutioninformationtypesRoute = require("./Financialinstitutioninformationtypes");
const FinancialroutingnumbersRoute = require("./Financialroutingnumbers");
const FinancialroutingnumbertypesRoute = require("./Financialroutingnumbertypes");
const FinancialroutingnumbertypecodesRoute = require("./Financialroutingnumbertypecodes");
const GeographicalcoordinatessRoute = require("./Geographicalcoordinatess");
const HandlinginstructioncodesRoute = require("./Handlinginstructioncodes");
const HandlinginstructiontextsRoute = require("./Handlinginstructiontexts");
const HandlinginstructiontypesRoute = require("./Handlinginstructiontypes");
const HarmonizedsystemcodesRoute = require("./Harmonizedsystemcodes");
const HeightsRoute = require("./Heights");
const IdentifiersRoute = require("./Identifiers");
const IdentifiertypesRoute = require("./Identifiertypes");
const IdentitydocumentsRoute = require("./Identitydocuments");
const IdentitydocumenttypesRoute = require("./Identitydocumenttypes");
const IncludedtransportequipmentsRoute = require("./Includedtransportequipments");
const IncludedtransportmeanssRoute = require("./Includedtransportmeanss");
const IncotermscodesRoute = require("./Incotermscodes");
const IndividualassetidentificationsRoute = require("./Individualassetidentifications");
const IndividualreturnableassetidentificationsRoute = require("./Individualreturnableassetidentifications");
const IssuedcapitalsRoute = require("./Issuedcapitals");
const LanguageofthepartycodesRoute = require("./Languageofthepartycodes");
const LegalregistrationsRoute = require("./Legalregistrations");
const LegalregistrationtypesRoute = require("./Legalregistrationtypes");
const LegalstructuresRoute = require("./Legalstructures");
const LocationspecificinstructionssRoute = require("./Locationspecificinstructionss");
const LogisticeventdatetimesRoute = require("./Logisticeventdatetimes");
const LogisticeventdurationsRoute = require("./Logisticeventdurations");
const LogisticeventperiodsRoute = require("./Logisticeventperiods");
const LogisticeventtypesRoute = require("./Logisticeventtypes");
const LogisticeventtypecodesRoute = require("./Logisticeventtypecodes");
const LogisticlocationsRoute = require("./Logisticlocations");
const LogisticlocationtypesRoute = require("./Logisticlocationtypes");
const LogisticservicesbuyersRoute = require("./Logisticservicesbuyers");
const LogisticservicessellersRoute = require("./Logisticservicessellers");
const LogisticservicetypesRoute = require("./Logisticservicetypes");
const LogisticunitidentificationtypesRoute = require("./Logisticunitidentificationtypes");
const LogisticunittypesRoute = require("./Logisticunittypes");
const ManifestsRoute = require("./Manifests");
const ManifestitemsRoute = require("./Manifestitems");
const MaximumtemperaturesRoute = require("./Maximumtemperatures");
const MeasurementtypesRoute = require("./Measurementtypes");
const MinimumtemperaturesRoute = require("./Minimumtemperatures");
const Multidescription70typesRoute = require("./Multidescription70types");
const NationalitysRoute = require("./Nationalitys");
const NewholderregistrationsRoute = require("./Newholderregistrations");
const OfficialaddresssRoute = require("./Officialaddresss");
const OperatinghourstypesRoute = require("./Operatinghourstypes");
const OrganisationdetailssRoute = require("./Organisationdetailss");
const OrganisationtypesRoute = require("./Organisationtypes");
const PackagetotalsRoute = require("./Packagetotals");
const PackagetotaltypesRoute = require("./Packagetotaltypes");
const PackagetypecodesRoute = require("./Packagetypecodes");
const PackagingconditioncodesRoute = require("./Packagingconditioncodes");
const PackagingmarkingtypesRoute = require("./Packagingmarkingtypes");
const PartyidentificationtypesRoute = require("./Partyidentificationtypes");
const PassengercategorycodesRoute = require("./Passengercategorycodes");
const PassengerinformationtypesRoute = require("./Passengerinformationtypes");
const PassengertariffgroupsRoute = require("./Passengertariffgroups");
const PersonsRoute = require("./Persons");
const PickuppartysRoute = require("./Pickuppartys");
const PrintinginstructioncodesRoute = require("./Printinginstructioncodes");
const QuantitytypesRoute = require("./Quantitytypes");
const RegularoperatinghourssRoute = require("./Regularoperatinghourss");
const ResponsibilitysRoute = require("./Responsibilitys");
const ReturnableassetidentificationsRoute = require("./Returnableassetidentifications");
const ReturnableassettypeidentificationsRoute = require("./Returnableassettypeidentifications");
const ReturnablepackagingsRoute = require("./Returnablepackagings");
const ReturnablepackagingtypesRoute = require("./Returnablepackagingtypes");
const RouteidsRoute = require("./Routeids");
const ScopesRoute = require("./Scopes");
const ServicetransactionsRoute = require("./Servicetransactions");
const ShipmentidentificationtypesRoute = require("./Shipmentidentificationtypes");
const SpecialdatenamesRoute = require("./Specialdatenames");
const SpecialoperatinghourssRoute = require("./Specialoperatinghourss");
const SpecialoperatinghourstypesRoute = require("./Specialoperatinghourstypes");
const StandardbusinessdocumentheadersRoute = require("./Standardbusinessdocumentheaders");
const TemperaturerangetypesRoute = require("./Temperaturerangetypes");
const TimemeasurementtypesRoute = require("./Timemeasurementtypes");
const TotalchargeableweightsRoute = require("./Totalchargeableweights");
const TotalgrossvolumesRoute = require("./Totalgrossvolumes");
const TotalgrossweightsRoute = require("./Totalgrossweights");
const TotalitemquantitysRoute = require("./Totalitemquantitys");
const TotalloadinglengthsRoute = require("./Totalloadinglengths");
const TotalpackagequantitysRoute = require("./Totalpackagequantitys");
const TotaltransportnetweightsRoute = require("./Totaltransportnetweights");
const TransactionalpartytypesRoute = require("./Transactionalpartytypes");
const TransportcapacitybookingsRoute = require("./Transportcapacitybookings");
const TransportcapacitybookingidentificationsRoute = require("./Transportcapacitybookingidentifications");
const TransportcapacitybookingresponsesRoute = require("./Transportcapacitybookingresponses");
const TransportcapacitybookingresponseidentificationsRoute = require("./Transportcapacitybookingresponseidentifications");
const TransportcapacitybookingspacerequirementsRoute = require("./Transportcapacitybookingspacerequirements");
const TransportcapacitybookingtransportmovementtypesRoute = require("./Transportcapacitybookingtransportmovementtypes");
const TransportcargocharacteristicstypesRoute = require("./Transportcargocharacteristicstypes");
const TransportequipmenttypesRoute = require("./Transportequipmenttypes");
const TransportequipmenttypecodesRoute = require("./Transportequipmenttypecodes");
const TransportequipmentweightsRoute = require("./Transportequipmentweights");
const TransportinstructionconsignmentitemtypesRoute = require("./Transportinstructionconsignmentitemtypes");
const TransportinstructiontermstypesRoute = require("./Transportinstructiontermstypes");
const TransportinstructiontransportequipmenttypesRoute = require("./Transportinstructiontransportequipmenttypes");
const TransportinstructiontransportmovementtypesRoute = require("./Transportinstructiontransportmovementtypes");
const TransportmeansidsRoute = require("./Transportmeansids");
const TransportmeanstypesRoute = require("./Transportmeanstypes");
const TransportmodecodesRoute = require("./Transportmodecodes");
const TransportreferencesRoute = require("./Transportreferences");
const TransportreferencetypesRoute = require("./Transportreferencetypes");
const TransportreferencetypecodesRoute = require("./Transportreferencetypecodes");
const TransportsealtypesRoute = require("./Transportsealtypes");
const TransportservicecategorycodesRoute = require("./Transportservicecategorycodes");
const TransportserviceconditiontypecodesRoute = require("./Transportserviceconditiontypecodes");
const TransportservicelevelcodesRoute = require("./Transportservicelevelcodes");
const UnitmeasurementtypesRoute = require("./Unitmeasurementtypes");
const UnlocationcodesRoute = require("./Unlocationcodes");
const WidthsRoute = require("./Widths");

mainRoute.use("/api/user", authRoute);
mainRoute.use(
  "/api/additionalconsignmentidentificationtypes",
  AdditionalconsignmentidentificationtypesRoute
);
mainRoute.use(
  "/api/additionalindividualassetidentifications",
  AdditionalindividualassetidentificationsRoute
);
mainRoute.use(
  "/api/additionallocationidentifications",
  AdditionallocationidentificationsRoute
);
mainRoute.use(
  "/api/additionallogisticunitidentificationtypes",
  AdditionallogisticunitidentificationtypesRoute
);
mainRoute.use(
  "/api/additionalpartyidentifications",
  AdditionalpartyidentificationsRoute
);
mainRoute.use(
  "/api/additionalpartyidentificationtypes",
  AdditionalpartyidentificationtypesRoute
);
mainRoute.use(
  "/api/additionalreturnableassetidentifications",
  AdditionalreturnableassetidentificationsRoute
);
mainRoute.use(
  "/api/additionalshipmentidentificationtypes",
  AdditionalshipmentidentificationtypesRoute
);
mainRoute.use("/api/addresss", AddresssRoute);
mainRoute.use(
  "/api/afterhourscommunicationchannels",
  AfterhourscommunicationchannelsRoute
);
mainRoute.use(
  "/api/alternatedeliverytermscodes",
  AlternatedeliverytermscodesRoute
);
mainRoute.use("/api/amounttypes", AmounttypesRoute);
mainRoute.use("/api/associatedinvoiceamounts", AssociatedinvoiceamountsRoute);
mainRoute.use("/api/businessservices", BusinessservicesRoute);
mainRoute.use("/api/cargotypecodes", CargotypecodesRoute);
mainRoute.use("/api/cargotypedescriptions", CargotypedescriptionsRoute);
mainRoute.use("/api/carriers", CarriersRoute);
mainRoute.use("/api/codetypes", CodetypesRoute);
mainRoute.use("/api/communicationchannels", CommunicationchannelsRoute);
mainRoute.use("/api/communicationchannelcodes", CommunicationchannelcodesRoute);
mainRoute.use("/api/communicationchanneltypes", CommunicationchanneltypesRoute);
mainRoute.use(
  "/api/consignmentidentificationtypes",
  ConsignmentidentificationtypesRoute
);
mainRoute.use("/api/contactinformations", ContactinformationsRoute);
mainRoute.use("/api/contacttypes", ContacttypesRoute);
mainRoute.use("/api/contacttypecodes", ContacttypecodesRoute);
mainRoute.use("/api/contentowners", ContentownersRoute);
mainRoute.use("/api/correlationinformations", CorrelationinformationsRoute);
mainRoute.use("/api/countrycodes", CountrycodesRoute);
mainRoute.use("/api/countryoforigincodes", CountryoforigincodesRoute);
mainRoute.use("/api/currencyofpartycodes", CurrencyofpartycodesRoute);
mainRoute.use(
  "/api/currentholderregistrations",
  CurrentholderregistrationsRoute
);
mainRoute.use(
  "/api/dangerousgoodsattributetypes",
  DangerousgoodsattributetypesRoute
);
mainRoute.use(
  "/api/dangerousgoodsinformationtypes",
  DangerousgoodsinformationtypesRoute
);
mainRoute.use(
  "/api/dangerousgoodsregulationinformationtypes",
  DangerousgoodsregulationinformationtypesRoute
);
mainRoute.use("/api/dateoptionaltimetypes", DateoptionaltimetypesRoute);
mainRoute.use("/api/datetimerangetypes", DatetimerangetypesRoute);
mainRoute.use("/api/declaredvalueforcustomss", DeclaredvalueforcustomssRoute);
mainRoute.use("/api/declaredweightforcustomss", DeclaredweightforcustomssRoute);
mainRoute.use("/api/deliveryinstructionss", DeliveryinstructionssRoute);
mainRoute.use("/api/deliverytermslocations", DeliverytermslocationsRoute);
mainRoute.use("/api/deliverytermstypes", DeliverytermstypesRoute);
mainRoute.use("/api/depths", DepthsRoute);
mainRoute.use("/api/descriptions", DescriptionsRoute);
mainRoute.use("/api/description1000types", Description1000typesRoute);
mainRoute.use("/api/description200types", Description200typesRoute);
mainRoute.use("/api/description500types", Description500typesRoute);
mainRoute.use("/api/description70types", Description70typesRoute);
mainRoute.use("/api/description80types", Description80typesRoute);
mainRoute.use("/api/dimensiontypes", DimensiontypesRoute);
mainRoute.use("/api/documenteffectivedates", DocumenteffectivedatesRoute);
mainRoute.use("/api/documentidentifications", DocumentidentificationsRoute);
mainRoute.use("/api/documentreferencetypes", DocumentreferencetypesRoute);
mainRoute.use("/api/dropoffpartys", DropoffpartysRoute);
mainRoute.use("/api/dutyfeetaxdescriptions", DutyfeetaxdescriptionsRoute);
mainRoute.use("/api/dutyfeetaxregistrations", DutyfeetaxregistrationsRoute);
mainRoute.use("/api/dutyfeetaxregistrationids", DutyfeetaxregistrationidsRoute);
mainRoute.use(
  "/api/dutyfeetaxregistrationtypes",
  DutyfeetaxregistrationtypesRoute
);
mainRoute.use("/api/dutyfeetaxtypecodes", DutyfeetaxtypecodesRoute);
mainRoute.use(
  "/api/ecom_attributevaluepairlisttypes",
  Ecom_attributevaluepairlisttypesRoute
);
mainRoute.use(
  "/api/ecomstringattributevaluepairlists",
  EcomstringattributevaluepairlistsRoute
);
mainRoute.use("/api/entityidentificationtypes", EntityidentificationtypesRoute);
mainRoute.use("/api/enumerationlibrarys", EnumerationlibrarysRoute);
mainRoute.use("/api/finaldestinationcountrys", FinaldestinationcountrysRoute);
mainRoute.use("/api/financialaccounts", FinancialaccountsRoute);
mainRoute.use(
  "/api/financialaccountnumbertypecodes",
  FinancialaccountnumbertypecodesRoute
);
mainRoute.use("/api/financialaccounttypes", FinancialaccounttypesRoute);
mainRoute.use(
  "/api/financialinstitutioninformationtypes",
  FinancialinstitutioninformationtypesRoute
);
mainRoute.use("/api/financialroutingnumbers", FinancialroutingnumbersRoute);
mainRoute.use(
  "/api/financialroutingnumbertypes",
  FinancialroutingnumbertypesRoute
);
mainRoute.use(
  "/api/financialroutingnumbertypecodes",
  FinancialroutingnumbertypecodesRoute
);
mainRoute.use("/api/geographicalcoordinatess", GeographicalcoordinatessRoute);
mainRoute.use("/api/handlinginstructioncodes", HandlinginstructioncodesRoute);
mainRoute.use("/api/handlinginstructiontexts", HandlinginstructiontextsRoute);
mainRoute.use("/api/handlinginstructiontypes", HandlinginstructiontypesRoute);
mainRoute.use("/api/harmonizedsystemcodes", HarmonizedsystemcodesRoute);
mainRoute.use("/api/heights", HeightsRoute);
mainRoute.use("/api/identifiers", IdentifiersRoute);
mainRoute.use("/api/identifiertypes", IdentifiertypesRoute);
mainRoute.use("/api/identitydocuments", IdentitydocumentsRoute);
mainRoute.use("/api/identitydocumenttypes", IdentitydocumenttypesRoute);
mainRoute.use(
  "/api/includedtransportequipments",
  IncludedtransportequipmentsRoute
);
mainRoute.use("/api/includedtransportmeanss", IncludedtransportmeanssRoute);
mainRoute.use("/api/incotermscodes", IncotermscodesRoute);
mainRoute.use(
  "/api/individualassetidentifications",
  IndividualassetidentificationsRoute
);
mainRoute.use(
  "/api/individualreturnableassetidentifications",
  IndividualreturnableassetidentificationsRoute
);
mainRoute.use("/api/issuedcapitals", IssuedcapitalsRoute);
mainRoute.use("/api/languageofthepartycodes", LanguageofthepartycodesRoute);
mainRoute.use("/api/legalregistrations", LegalregistrationsRoute);
mainRoute.use("/api/legalregistrationtypes", LegalregistrationtypesRoute);
mainRoute.use("/api/legalstructures", LegalstructuresRoute);
mainRoute.use(
  "/api/locationspecificinstructionss",
  LocationspecificinstructionssRoute
);
mainRoute.use("/api/logisticeventdatetimes", LogisticeventdatetimesRoute);
mainRoute.use("/api/logisticeventdurations", LogisticeventdurationsRoute);
mainRoute.use("/api/logisticeventperiods", LogisticeventperiodsRoute);
mainRoute.use("/api/logisticeventtypes", LogisticeventtypesRoute);
mainRoute.use("/api/logisticeventtypecodes", LogisticeventtypecodesRoute);
mainRoute.use("/api/logisticlocations", LogisticlocationsRoute);
mainRoute.use("/api/logisticlocationtypes", LogisticlocationtypesRoute);
mainRoute.use("/api/logisticservicesbuyers", LogisticservicesbuyersRoute);
mainRoute.use("/api/logisticservicessellers", LogisticservicessellersRoute);
mainRoute.use("/api/logisticservicetypes", LogisticservicetypesRoute);
mainRoute.use(
  "/api/logisticunitidentificationtypes",
  LogisticunitidentificationtypesRoute
);
mainRoute.use("/api/logisticunittypes", LogisticunittypesRoute);
mainRoute.use("/api/manifests", ManifestsRoute);
mainRoute.use("/api/manifestitems", ManifestitemsRoute);
mainRoute.use("/api/maximumtemperatures", MaximumtemperaturesRoute);
mainRoute.use("/api/measurementtypes", MeasurementtypesRoute);
mainRoute.use("/api/minimumtemperatures", MinimumtemperaturesRoute);
mainRoute.use("/api/multidescription70types", Multidescription70typesRoute);
mainRoute.use("/api/nationalitys", NationalitysRoute);
mainRoute.use("/api/newholderregistrations", NewholderregistrationsRoute);
mainRoute.use("/api/officialaddresss", OfficialaddresssRoute);
mainRoute.use("/api/operatinghourstypes", OperatinghourstypesRoute);
mainRoute.use("/api/organisationdetailss", OrganisationdetailssRoute);
mainRoute.use("/api/organisationtypes", OrganisationtypesRoute);
mainRoute.use("/api/packagetotals", PackagetotalsRoute);
mainRoute.use("/api/packagetotaltypes", PackagetotaltypesRoute);
mainRoute.use("/api/packagetypecodes", PackagetypecodesRoute);
mainRoute.use("/api/packagingconditioncodes", PackagingconditioncodesRoute);
mainRoute.use("/api/packagingmarkingtypes", PackagingmarkingtypesRoute);
mainRoute.use("/api/partyidentificationtypes", PartyidentificationtypesRoute);
mainRoute.use("/api/passengercategorycodes", PassengercategorycodesRoute);
mainRoute.use("/api/passengerinformationtypes", PassengerinformationtypesRoute);
mainRoute.use("/api/passengertariffgroups", PassengertariffgroupsRoute);
mainRoute.use("/api/persons", PersonsRoute);
mainRoute.use("/api/pickuppartys", PickuppartysRoute);
mainRoute.use("/api/printinginstructioncodes", PrintinginstructioncodesRoute);
mainRoute.use("/api/quantitytypes", QuantitytypesRoute);
mainRoute.use("/api/regularoperatinghourss", RegularoperatinghourssRoute);
mainRoute.use("/api/responsibilitys", ResponsibilitysRoute);
mainRoute.use(
  "/api/returnableassetidentifications",
  ReturnableassetidentificationsRoute
);
mainRoute.use(
  "/api/returnableassettypeidentifications",
  ReturnableassettypeidentificationsRoute
);
mainRoute.use("/api/returnablepackagings", ReturnablepackagingsRoute);
mainRoute.use("/api/returnablepackagingtypes", ReturnablepackagingtypesRoute);
mainRoute.use("/api/routeids", RouteidsRoute);
mainRoute.use("/api/scopes", ScopesRoute);
mainRoute.use("/api/servicetransactions", ServicetransactionsRoute);
mainRoute.use(
  "/api/shipmentidentificationtypes",
  ShipmentidentificationtypesRoute
);
mainRoute.use("/api/specialdatenames", SpecialdatenamesRoute);
mainRoute.use("/api/specialoperatinghourss", SpecialoperatinghourssRoute);
mainRoute.use(
  "/api/specialoperatinghourstypes",
  SpecialoperatinghourstypesRoute
);
mainRoute.use(
  "/api/standardbusinessdocumentheaders",
  StandardbusinessdocumentheadersRoute
);
mainRoute.use("/api/temperaturerangetypes", TemperaturerangetypesRoute);
mainRoute.use("/api/timemeasurementtypes", TimemeasurementtypesRoute);
mainRoute.use("/api/totalchargeableweights", TotalchargeableweightsRoute);
mainRoute.use("/api/totalgrossvolumes", TotalgrossvolumesRoute);
mainRoute.use("/api/totalgrossweights", TotalgrossweightsRoute);
mainRoute.use("/api/totalitemquantitys", TotalitemquantitysRoute);
mainRoute.use("/api/totalloadinglengths", TotalloadinglengthsRoute);
mainRoute.use("/api/totalpackagequantitys", TotalpackagequantitysRoute);
mainRoute.use("/api/totaltransportnetweights", TotaltransportnetweightsRoute);
mainRoute.use("/api/transactionalpartytypes", TransactionalpartytypesRoute);
mainRoute.use("/api/transportcapacitybookings", TransportcapacitybookingsRoute);
mainRoute.use(
  "/api/transportcapacitybookingidentifications",
  TransportcapacitybookingidentificationsRoute
);
mainRoute.use(
  "/api/transportcapacitybookingresponses",
  TransportcapacitybookingresponsesRoute
);
mainRoute.use(
  "/api/transportcapacitybookingresponseidentifications",
  TransportcapacitybookingresponseidentificationsRoute
);
mainRoute.use(
  "/api/transportcapacitybookingspacerequirements",
  TransportcapacitybookingspacerequirementsRoute
);
mainRoute.use(
  "/api/transportcapacitybookingtransportmovementtypes",
  TransportcapacitybookingtransportmovementtypesRoute
);
mainRoute.use(
  "/api/transportcargocharacteristicstypes",
  TransportcargocharacteristicstypesRoute
);
mainRoute.use("/api/transportequipmenttypes", TransportequipmenttypesRoute);
mainRoute.use(
  "/api/transportequipmenttypecodes",
  TransportequipmenttypecodesRoute
);
mainRoute.use("/api/transportequipmentweights", TransportequipmentweightsRoute);
mainRoute.use(
  "/api/transportinstructionconsignmentitemtypes",
  TransportinstructionconsignmentitemtypesRoute
);
mainRoute.use(
  "/api/transportinstructiontermstypes",
  TransportinstructiontermstypesRoute
);
mainRoute.use(
  "/api/transportinstructiontransportequipmenttypes",
  TransportinstructiontransportequipmenttypesRoute
);
mainRoute.use(
  "/api/transportinstructiontransportmovementtypes",
  TransportinstructiontransportmovementtypesRoute
);
mainRoute.use("/api/transportmeansids", TransportmeansidsRoute);
mainRoute.use("/api/transportmeanstypes", TransportmeanstypesRoute);
mainRoute.use("/api/transportmodecodes", TransportmodecodesRoute);
mainRoute.use("/api/transportreferences", TransportreferencesRoute);
mainRoute.use("/api/transportreferencetypes", TransportreferencetypesRoute);
mainRoute.use(
  "/api/transportreferencetypecodes",
  TransportreferencetypecodesRoute
);
mainRoute.use("/api/transportsealtypes", TransportsealtypesRoute);
mainRoute.use(
  "/api/transportservicecategorycodes",
  TransportservicecategorycodesRoute
);
mainRoute.use(
  "/api/transportserviceconditiontypecodes",
  TransportserviceconditiontypecodesRoute
);
mainRoute.use(
  "/api/transportservicelevelcodes",
  TransportservicelevelcodesRoute
);
mainRoute.use("/api/unitmeasurementtypes", UnitmeasurementtypesRoute);
mainRoute.use("/api/unlocationcodes", UnlocationcodesRoute);
mainRoute.use("/api/widths", WidthsRoute);

module.exports = mainRoute;
