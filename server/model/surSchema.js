

const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
 
  Que1: {
    type: String,
    required: true,
  },
  Que2: {
    type: [String],
    required: true
  },
  Que3: {

    type: String,
    required: true,
  },
  Que4: {
    type: String,
    required: true,
  },
  Que5: {
    type: String,
    required: true
  },
});

const SurveyDB = mongoose.model('Questian', surveySchema);

module.exports = SurveyDB;
