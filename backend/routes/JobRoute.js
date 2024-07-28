const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
} = require('../controllers/jobController');

const jobRoute = express.Router();

jobRoute.post('/addJob', isAuthenticated, postJob);

jobRoute.get('/allJobs', isAuthenticated, getAllJobs);

jobRoute.get('/jobs/:id', isAuthenticated, getJobById);

jobRoute.get('/adminJob', isAuthenticated, getAdminJobs);

module.exports = jobRoute;
