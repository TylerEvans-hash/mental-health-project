const { Schema, model } = require('mongoose');
// const dateFormat = require("../utils/dateFormat");

const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
            maxLength: 280
        }        ,
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        // activities: [],
        // tags: []
    }
)

const Event = model('Event', eventSchema);

module.exports = Event;