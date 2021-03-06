const User = require("../models/User");
const bcrypt = require("bcrypt"); //is used for hashing/encrypting password.

let instance = null;

class createServices {
  constructor() {}

  static getInstance() {
    if (!instance) {
      instance = new createServices();
    }
    return instance;
  }

  async createSampleUser() {
    //Hash Password
    const salt = await bcrypt.genSalt(10); //generate hash of level 10 complexity or its no of hashing rounds
    const hashedPassword = await bcrypt.hash("password@1", salt);

    const sampleRecord = new User({
      name: "sample user",
      email: "user@SampleApp.com",
      password: hashedPassword,
      isPublished: true,
    });

    //check if email is already in DB i.e should be unique
    const emailExist = await User.findOne({ email: sampleRecord.email });
    if (!emailExist) {
      try {
        const result = await sampleRecord.save();
        console.log("Your Database is created with a Sample User.");
        console.log(result);
      } catch (ex) {
        for (const property in ex.errors) {
          console.log(ex.errors[property]);
        }
      }
    }
  }
}

module.exports = createServices;
