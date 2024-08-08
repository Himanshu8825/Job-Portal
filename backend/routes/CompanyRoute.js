const express = require('express');
const {
  registerCompany,
  getCompanies,
  getCompanyByID,
  updateCompany,
} = require('../controllers/componyController');
const isAuthenticated = require('../middlewares/isAuthenticated');
const singleUpload = require('../middlewares/multer');

const companyRouter = express.Router();

companyRouter.post('/register', isAuthenticated, registerCompany);

companyRouter.get('/companies', isAuthenticated, getCompanies);

companyRouter.get('/company/:id', isAuthenticated, getCompanyByID);

companyRouter.put('/update/:id', isAuthenticated, singleUpload, updateCompany);

module.exports = companyRouter;
