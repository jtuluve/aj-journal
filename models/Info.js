import { Schema, model, models } from 'mongoose';
import { connectToDB } from '@/utils/database';

connectToDB();

// Contact schema
const ContactSchema = new Schema({
    officeAddress: {
        type: String,
        default: '',
    },
    contactForm: {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        regNo: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            required: true,
        },
    },
    googleMapsLocation: {
        type: String,
        default: '',
    },
});

// Instructions schema
const InstructionsSchema = new Schema({
    forReaders: {
        type: String,
        default: '',
    },
    forAuthors: {
        type: String,
        default: '',
    },
    forLibrarians: {
        type: String,
        default: '',
    },
});

// Footer schema
const FooterSchema = new Schema({
    FooterDetails: {
        type: String,
        default: '',
    },
    mobileNo: {
        type: String,
        default: '',
    },
    elPhNo: {
        type: String,
        default: '',
    },
});

// About schema
const AboutSchema = new Schema({
    aboutSection: {
        type: String,
        default: '',
    },
    aimScopeSection: {
        type: String,
        default: '',
    },
    indexingSection: {
        type: String,
        default: '',
    },
    peerReviewingSection: {
        type: String,
        default: '',
    },
    licensePolicySection: {
        type: String,
        default: '',
    },
    researchCenterSection: {
        type: String,
        default: '',
    },
    disclaimerSection: {
        type: String,
        default: '',
    },
    announcementsSection: {
        type: String,
        default: '',
    },
});

// Info schema including embedded schemas
const InfoSchema = new Schema({
    aboutjournal: {
        type: String,
        required: true,
        default: '',
    },
    Footerinfo: FooterSchema,
    instructionsinfo: InstructionsSchema,
    editorialinfo: {
        type: String,
        required: true,
        default: ' ',
    },
    contactinfo: ContactSchema,
    aboutinfo: AboutSchema,
});

const Info = models.Info || model("Info", InfoSchema);

export default Info;
