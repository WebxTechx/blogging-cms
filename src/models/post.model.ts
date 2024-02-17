import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface PostInput {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  tags: string[];
  categories: mongoose.Types.ObjectId[];
  publishedAt?: Date;
  scheduledAt?: Date;
  status?: 'draft' | 'published' | 'scheduled';
  visibility?: 'public' | 'private';
  metadata?: {
    attachments?: {
      type: string;
      url: string;
    }[];
    externalLinks?: string[];
    hashtags?: string[];
    mentions?: string[];
  };
  analytics?: {
    engagementRate?: number;
    clickThroughRate?: number;
    impressions?: number;
  };
}

export interface PostDocument extends PostInput, mongoose.Document {}

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
    status: {
      type: String,
      enum: ['draft', 'published', 'scheduled'],
      default: 'draft',
    },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
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
