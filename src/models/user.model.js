const { Schema, Types, model } = require('mongoose');

const COLLECTION_NAME = 'users';
const DOCUMENT_NAME = 'User';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    verify: {
      type: Types.Boolean,
      default: false,
    },
    roles: {
      type: Array,
      default: ['user'],
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

module.exports = model(DOCUMENT_NAME, UserSchema);
