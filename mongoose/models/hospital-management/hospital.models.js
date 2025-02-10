import mongoose from "mongoose";

const hospitalSchema = new mongoose.model({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specialisesIn: [
        {
            type: string
        }
    ]
}, { timestamps: true });

export const Hospital = mongoose.Schema("Hospital", hospitalSchema);