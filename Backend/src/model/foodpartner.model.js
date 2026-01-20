import mongoose from "mongoose";

const foodpartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })


const FoorPartner = mongoose.model("FoorPartner", foodpartnerSchema);

export default FoorPartner;