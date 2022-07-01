import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true},
    country: {type: String, required: true},
    currency: {type: String, required: true},
    occupation: {type: String, required: true},
    referral: {type: String},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: true}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;