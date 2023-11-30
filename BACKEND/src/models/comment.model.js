import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export const CommentModel = model('Comment', CommentSchema );