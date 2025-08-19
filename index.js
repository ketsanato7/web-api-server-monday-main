const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const nodemailer = require('nodemailer');
const conn = require('./connect/mongodb');
const xss = require('xss');
const serverless = require("serverless-http");
const helmet = require('helmet');
const multer = require('multer')
const storage1 = multer.memoryStorage()
const upload1 = multer({
  storage: storage1
}).single("EducationalInstitutionLogo");

const {
  v4: uuidv4
} = require('uuid');
const port = process.env.PORT;
const session = require('express-session');
const RedisStore = require('connect-redis');
app.use(express.urlencoded({
  extended: true
}));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  genid: () => uuidv4(),
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  },
  store: RedisStore.session
}))
const cookieParseer = require('cookie-parser')
app.use((helmet.frameguard({
  action: 'deny'
})));


app.use(cookieParseer());

app.use(express.json());
app.use(cors());
const auth = require('./middleware/authMiddleware');

// const cookiesRouters = require('./routers/Cookies');
// const userTypeRouters = require('./routers/UserType');
// const Section = require('./routers/Section');
// const usersRouters1 = require('./routers/Users1');
// const departmentRouter = require('./routers/Department');
// const employee_types = require('./routers/EmployeeTypes');
// const group = require('./routers/Group');
// const holiday_types = require('./routers/Holiday_types');
// const position = require('./routers/Position');
// const Country = require('./routers/Country');
// const Provice = require('./routers/Provice');
// const District = require('./routers/District');
// const Village = require('./routers/Village');
// const TitleLao = require('./routers/TitleLao');
// const TitleEng = require('./routers/TitleEng');
// const Gender = require('./routers/Gender');
// const Religion = require('./routers/Religion');
// const Nationality = require('./routers/Nationality');
// const login = require('./routers/Login');
// const EducationalInstitutionType = require('./routers/EducationalInstitutionType');
// const EducationalInstitutionDetail = require('./routers/EducationalInstitutionDetail');
// const SystemEduction = require('./routers/SystemEduction');
// const Eduction = require('./routers/Eduction');
// const CourseOfStudy = require('./routers/CourseOfStudy');
// const CourseOfSector = require('./routers/CourseOfSector');
// const EducationalDetail = require('./routers/EducationalDetail');
// const EducationalInstitution = require('./routers/EducationalInstitution');
// const FamilyStatus = require('./routers/FamilyStatus');
// const Person = require('./routers/Person');
// const Job = require('./routers/Job');
// const Family = require('./routers/Person');
// const Learner = require('./routers/Learner');
// const LearnerType = require('./routers/LearnerType');
// const Teacher = require('./routers/Teacher');
// const TeacherTitle = require('./routers/TeacherTitle');
// const TeacherPosition = require('./routers/TeacherPosition');
// const Firebase = require('./routers/Firebase');
// const SendOTPEmail = require('./routers/SendOTPEmail');
// const SendOTPPhoneNumber = require('./routers/SendOTPPhoneNumber');
// const Notification = require('./routers/Notification');
// const Register = require('./routers/Register');
// const DocumentType = require('./routers/DocumentType');

// const SendOTPPhoneNumberByFirebase = require('./routers/SendOTPPhoneNumberByFirebase.routers');
// const AccountingType = require('./routers/AccountingType');
// const AccountingGroup = require('./routers/AccountingGroup');
// const LevelAccounting = require('./routers/LevelAccounting');
// const Accounting = require('./routers/Accounting');

// const Activity = require('./routers/Activity');


const careers = require('./routers/mfi/D/D1.careers');
const collateral_categories = require('./routers/mfi/D/D2.collateral_categories');

const customer_types = require('./routers/mfi/D/D3.customer_types');

const deposit_types = require('./routers/mfi/D/D4.deposit_types');

const economic_branches = require('./routers/mfi/D/D5.economic_branches');

const economic_sectors = require('./routers/mfi/D/D6.economic_sectors');

const educations = require('./routers/mfi/D/D7.educations');

const enterprise_sizes = require('./routers/mfi/D/D8.enterprise_sizes');

const genders = require('./routers/mfi/D/D9.genders');

const loan_categories = require('./routers/mfi/D/D10.loan_categories');

const loan_classifications = require('./routers/mfi/D/D11.loan_classifications');

const loan_funding_sources = require('./routers/mfi/D/D12.loan_funding_sources');

const borrower_connections = require('./routers/mfi/D/D13.borrower_connections');

const marital_statuses = require('./routers/mfi/D/D14.marital_statuses');

const key_personnels = require('./routers/mfi/D/D15.key_personnels');

const country = require('./routers/mfi/D/D16.country');

const districts = require('./routers/mfi/D/D17.districts');
const provinces = require('./routers/mfi/D/D17.provinces');
const villages = require('./routers/mfi/D/D17.villages');

const personal_info = require('./routers/mfi/1.personal_info');
const lao_id_cards = require('./routers/mfi/2.lao_id_cards');

const lao_family_books = require('./routers/mfi/3.lao_family_books');

const passports = require('./routers/mfi/4.passports');
const enterprise_info = require('./routers/mfi/5.enterprise_info');
const collaterals = require('./routers/mfi/6.collaterals');
const collateral_individuals = require('./routers/mfi/7.collateral_individuals');
const collateral_enterprises = require('./routers/mfi/8.collateral_enterprises');
const loans = require('./routers/mfi/9.loans');
const loan_collaterals = require('./routers/mfi/10.loan_collaterals');
const borrowers_individual = require('./routers/mfi/11.borrowers_individual');
const borrowers_enterprise = require('./routers/mfi/12.borrowers_enterprise');
const deposits = require('./routers/mfi/13.deposits');
const depositors_individual = require('./routers/mfi/14.depositors_individual');
const depositors_enterprise = require('./routers/mfi/15.depositors_enterprise');
const member_shares = require('./routers/mfi/16.member_shares');
const member_shares_individuals = require('./routers/mfi/17.member_shares_individuals');
const member_shares_enterprises = require('./routers/mfi/18.member_shares_enterprises');
const trial_balance = require('./routers/mfi/19.trial_balance');
const employees = require('./routers/mfi/20.employees');
const employee_positions = require('./routers/mfi/21.employee_positions');
const mfi_info = require('./routers/mfi/22.mfi_info');
const mfi_branches_info = require('./routers/mfi/23.mfi_branches_info');
const mfi_service_units_info = require('./routers/mfi/24.mfi_service_units_info');
const mfi_HQ_service_units = require('./routers/mfi/25.mfi_HQ_service_units');
const mfi_branch_service_units = require('./routers/mfi/26.mfi_branch_service_units');
const report_info = require('./routers/mfi/27.report_info');
const accounting_type = require('./routers/mfi/A/A1.accounting_type');
const accounting_group = require('./routers/mfi/A/A2.accounting_group');
const accounting_level = require('./routers/mfi/A/A3.accounting_level');
const accounting = require('./routers/mfi/28.accounting');
const nationality = require('./routers/mfi/D/D18.nationality');
const loan_purposes = require('./routers/mfi/D/D19.loan_purposes');
const document_types = require('./routers/mfi/D/D20.document_types');


// app.use("/api", SendOTPPhoneNumberByFirebase);
// app.use("/api", Register);
// app.use("/api", DocumentType);
// app.use("/api", Notification);
// app.use("/api", SendOTPPhoneNumber);
// app.use("/api", SendOTPEmail);
// app.use("/api", Firebase);
// app.use("/api", FamilyStatus);
// app.use("/api", TeacherPosition);
// app.use("/api", TeacherTitle);
// app.use("/api", Teacher);
// app.use("/api", LearnerType);
// app.use("/api", Learner);
// app.use("/api", Family);
// app.use("/api", Job);
// app.use("/api", Person);
// app.use("/api", EducationalDetail);
// app.use("/api", upload1, EducationalInstitution);

// app.use("/api", CourseOfSector);
// app.use("/api", CourseOfStudy);
// app.use("/api", EducationalInstitutionType);
// app.use("/api", Eduction);
// app.use("/api", SystemEduction);
// app.use("/api", cookiesRouters);
// app.use("/api", userTypeRouters);
// app.use("/api", EducationalInstitutionDetail);
// app.use("/api", cookiesRouters);
// app.use("/api", usersRouters1);
// app.use("/api", departmentRouter);
// app.use("/api", employee_types);
// app.use("/api", group);
// app.use("/api", holiday_types);
// app.use("/api", position);
// app.use("/api", Country);
// app.use("/api", Provice);
// app.use("/api", District);
// app.use("/api", Village);
// app.use("/api", TitleLao);
// app.use("/api", TitleEng);
// app.use("/api", Gender);
// app.use("/api", Religion);
// app.use("/api", Nationality);
// app.use("/api", Section);
// app.use("/api", login);
// app.use("/api", AccountingType);
// app.use("/api", AccountingGroup);
// app.use("/api", LevelAccounting);
// app.use("/api", Accounting);
// app.use("/api", Activity);


app.use("/api", careers);
app.use("/api", collateral_categories);
app.use("/api", customer_types);
app.use("/api", deposit_types);
app.use("/api", economic_branches);
app.use("/api", economic_sectors);
app.use("/api", educations);
app.use("/api", enterprise_sizes);
app.use("/api", genders);
app.use("/api", loan_categories);
app.use("/api", loan_classifications);
app.use("/api", loan_funding_sources);
app.use("/api", borrower_connections);
app.use("/api", marital_statuses);
app.use("/api", key_personnels);
app.use("/api", country);
app.use("/api", districts);
app.use("/api", villages);
app.use("/api", provinces);
app.use("/api", personal_info);
app.use("/api", lao_family_books);
app.use("/api", passports);
app.use("/api", enterprise_info);
app.use("/api", collaterals);
app.use("/api", collateral_individuals);
app.use("/api", collateral_enterprises);
app.use("/api", loans);
app.use("/api", loan_collaterals);
app.use("/api", borrowers_individual);
app.use("/api", borrowers_enterprise);
app.use("/api", deposits);
app.use("/api", depositors_individual);
app.use("/api", depositors_enterprise);
app.use("/api", trial_balance);
app.use("/api", employees);
app.use("/api", employee_positions);
app.use("/api", mfi_info);
app.use("/api", mfi_branch_service_units);
app.use("/api", mfi_branch_service_units);
app.use("/api", mfi_HQ_service_units);
app.use("/api", mfi_branch_service_units);
app.use("/api", report_info);
app.use("/api", mfi_service_units_info);
app.use("/api", mfi_branches_info);
app.use("/api", member_shares_enterprises);
app.use("/api", member_shares_individuals);
app.use("/api", member_shares);

app.use("/api", lao_id_cards);
app.use("/api", accounting_group);
app.use("/api", accounting_level);
app.use("/api", accounting_type);
app.use("/api", accounting);

app.use("/api", nationality);
app.use("/api", loan_purposes);
app.use("/api", document_types);


app.listen(port, () => {
  console.log('Server listenting on port' + port);
})

app.get('/', auth, function (req, res) {
  res.send("Run Server Monday");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
app.post('/api/profile1', upload1, function (req, res, next) {
  console.log("Upload");
  upload1(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("// A Multer error occurred when uploading.");
      // A Multer error occurred when uploading.
    } else if (err) {
      console.log("// An unknown error occurred when uploading.");
      // An unknown error occurred when uploading.
    }
    console.log("Exit Function upload");
    // Everything went fine.
  })
  console.log("End");
  const file = req.file;
  console.log(file);
  console.log(file.fieldname);
})
const upload = multer({
  storage: storage
})

app.post('/api/profile', upload.single("avatar"), function (req, res, next) {
  const file = req.file;
  const file1 = req.body;
  console.log(file);
  console.log(file1);
  res.send("upload file success");
})

app.post('/api/photos/upload', upload.array('photos', 12), function (req, res, next) {
  const file = req.file;
  console.log(file.fieldname);
  res.send("Run Server Monday");
})

const cpUpload = upload.fields([{
  name: 'avatar',
  maxCount: 1
}, {
  name: 'gallery',
  maxCount: 8
}])
app.post('/api/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})


exports.app = app;