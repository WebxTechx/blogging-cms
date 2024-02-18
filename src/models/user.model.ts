import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

// Define the interface for the profile location
export interface ProfileLocation {
  country_code: string | null;
  address: string | null;
  pincode: number | null;
}

// Define the interface for social links
export interface SocialLink {
  country_code: string | null;
  address: string | null;
  pincode: number | null;
}

// Define the interface for preference notification
export interface Notification {
  email: boolean;
  push: boolean;
}

// Define the interface for custom permissions
export interface CustomPermissions {
  canWritePosts: boolean;
  canEditOwnPosts: boolean;
  canEditAllPosts: boolean;
  canDeleteOwnPosts: boolean;
  canDeleteAllPosts: boolean;
  canComment: boolean;
  canModerateComments: boolean;
  canManageUsers: boolean;
  // add more permissions as needed
}
export interface UserDocument extends UserInput, mongoose.Document {
  email: string;
  name: string;
  password: string;
  username?: string | null;
  phone_no?: number | null;
  phone_otp?: number | null;
  phone_verified: boolean;
  email_verified: boolean;
  admin_verified: boolean;
  comparePassword(candidatePassword: string): Promise<Boolean>;
  profile: {
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    avatar: string | null;
    cover_img: string | null;
    location: ProfileLocation;
    socialLinks: SocialLink[];
  };
  preference: {
    theme: string;
    notification: Notification;
    language: string;
    timezone: string | null;
  };
  status: string;
  activity: {
    lastLogin: Date | null;
    lastLogout: Date | null;
    loginCount: number | null;
  };
  metadata: {
    IPAddresses: string[];
    deviceInfo: string[];
  };
  permission: {
    roles: string[];
    customPermissions: CustomPermissions;
  };
  analytics: {
    pageViews: number;
    postViews: {
      postId: number;
    };
    // Additional analytics data
  };
  activityLog: {
    action: string | null;
    timestamp: Date;
    details: object;
  }[];
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, unique: true },
    phone_no: { type: Number, unique: true },
    phone_otp: { type: Number, unique: true },
    phone_verified: { type: Boolean, default: false },
    email_verified: { type: Boolean, default: false },
    admin_verified: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['active', 'deactivated', 'banned', 'suspended'],
      default: 'active',
    },

    profile: {
      firstName: { type: String, default: null },
      lastName: { type: String, default: null },
      bio: { type: String, default: null },
      avatar: { type: String, default: null },
      cover_img: { type: String, default: null },

      location: {
        country_code: { type: String, default: null },
        address: { type: String, default: null },
        pincode: { type: Number, default: null },
      },

      socialLinks: [
        {
          platform: { type: String, default: null },
          url: { type: String, default: null },
        },
      ],
    },

    preference: {
      theme: {
        type: String,
        enum: ['light', 'dark', 'auto'],
        default: 'light',
      },
      notification: {
        email: { type: Boolean, default: false },
        push: { type: Boolean, default: true },
      },
      language: { type: String },
      timezone: { type: String, default: null },
    },

    // savedPosts: [Object]
    activity: {
      lastLogin: { type: Date },
      lastLogout: { type: Date },
      loginCount: { type: Date },
    },

    metadata: {
      IPAddresses: [String],
      deviceInfo: [String],
    },

    permission: {
      roles: [
        {
          type: String,
        },
      ],
      customPermissions: {
        canWritePosts: { type: Boolean },
        canEditOwnPosts: { type: Boolean },
        canEditAllPosts: { type: Boolean },
        canDeleteOwnPosts: { type: Boolean },
        canDeleteAllPosts: { type: Boolean },
        canComment: { type: Boolean },
        canModerateComments: { type: Boolean },
        canManageUsers: { type: Boolean },

        // add more
      },
    },

    analytics: {
      pageViews: { type: Number, default: 0 },
      postViews: {
        postId: { type: Number, default: 0 },
      },
      // Additional analytics data
    },

    activityLog: [
      {
        action: { type: String, default: null }, // (e.g., login, logout, post_created)
        timestamp: Date,
        details: {
          type: Object,
        }, // (any additional details about the action)
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre<UserDocument>('save', async function (next) {
  // let user = this as UserDocument;

  if (!this.isModified('password')) {
    return next();
  }

  const saltWorkFactor = config.get<number>('saltWorkFactor');
  const salt = await bcrypt.genSalt(saltWorkFactor);
  const hash = await bcrypt.hashSync(this.password, salt);

  this.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt
    .compare(candidatePassword, user.password)
    .catch((err: any) => false);
};

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
