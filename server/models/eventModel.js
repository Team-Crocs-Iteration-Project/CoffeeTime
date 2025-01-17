const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const EventSchema = new mongoose.Schema({
  host: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  eventTime: { type: String},
  details: {
    title: { type: String, required: true },
    // date: { type: Date, required: true },
    description: String,
    attendees: Array,
  },
});

module.exports = mongoose.model('Event', EventSchema);
