const dev = {
  STRIPE_KEY: "pk_test_5SvOKfa2OxLltmewW8DSxwhj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-4-api-dev-attachmentsbucket-ogl4r9f5lzhy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rv6fg7aqr9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TCnVDSdD8",
    APP_CLIENT_ID: "79p5p8tr5uti13brdq1agf3mpd",
    IDENTITY_POOL_ID: "us-east-1:180f0582-d3db-4f85-9930-bb8b4734c8d6"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_5SvOKfa2OxLltmewW8DSxwhj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-4-api-prod-attachmentsbucket-158ajw3ow74et"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://lrkrgibyfa.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_F3rZzgXTq",
    APP_CLIENT_ID: "1b7o022bd6d1vgmlvcihuihhq8",
    IDENTITY_POOL_ID: "us-east-1:b84076f7-e662-44cb-9778-d48a6178c8e3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
