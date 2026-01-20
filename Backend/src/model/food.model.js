import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    description: {
        type: String,
    },
    video: {
        type: String,
        required: true
    },
    foodparter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodParter',
    }

}, { timestamps: true });

const Food = mongoose.model('Food', foodSchema);

export default Food;