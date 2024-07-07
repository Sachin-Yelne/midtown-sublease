import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          state: {
            type: String,
            required: true,
          },
          country: {
            type: String,
            required: true,
          },
          zipCode: {
            type: String,
            required: true,
          },
          latitude: {
            type: Number,
            required: false,
          },
          longitude: {
            type: Number,
            required: false, 
          },
        regularPrice: {
            type: Number,
            required: true,
        },
        discountPrice: {
            type: Number,
            required: true,
        },
        bathrooms: {
            type: Number,
            required: true,
        },
        bedrooms: {
            type: Number,
            required: true,
        },
        furnished: {
            type: Boolean,
            required: true,
        },
        parking: {
            type: Boolean,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        offer: {
            type: Boolean,
            required: true,
        },
        imageURLs: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
        availableFrom: {
            type: Date,
            required: true,
        },
        availableTo: {
            type: Date,
            required: true,
        },

        
    }, {timestamps:true}
)

const Listing = mongoose.model('Listing', listingSchema)

export default Listing