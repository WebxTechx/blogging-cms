import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface PostInput {}

export interface PostDocument extends PostInput, mongoose.Document {
  title: string;
  content: string;
}

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      username: { type: String, required: true },
      avatar: { type: String, required: true },
      role: { type: String, required: true },
    },
    tags: [{ type: String, required: true }],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true,
      },
    ],
    publishedAt: { type: Date },
    scheduledAt: { type: Date },
    status: { type: String },
    visibility: { type: String },
    metadata: {
      attachments: [
        {
          type: String,
          url: String,
        },
      ],
      externalLinks: [{ type: String }],
      hashtags: [{ type: String }],
      mentions: [{ type: String }],
    },
    analytics: {
      engagementRate: { type: Number },
      clickThroughRate: { type: Number },
      impressions: { type: Number },
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model<PostDocument>('Post', postSchema);

export default PostModel;
