const mongoose = require('../../database')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    businessSector: {
        type: String,
        required: true,
    },
    consultationDate: {
        type: Date,
        default: Date.now,
        immutable: true,
    }
});

const PersonalDataUser = mongoose.model('PersonalDataUser', UserSchema);

module.exports = PersonalDataUser;