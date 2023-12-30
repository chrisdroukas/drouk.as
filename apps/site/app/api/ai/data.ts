export const data = {
  openapi: "3.1.0",
  info: {
    title: "drouk.as API",
    description: "Learn information about Chris Droukas with GPT.",
    version: "v1.0.0",
  },
  servers: [
    {
      url: "https://drouk.as/api",
    },
  ],
  paths: {
    "/resume": {
      get: {
        description: "Get resume information about Chris Droukas.",
        operationId: "GetResume",
        deprecated: false,
        "x-openai-isConsequential": false,
      },
    },
    "/activity": {
      get: {
        description: "Get athletic information about Chris Droukas.",
        operationId: "GetActivity",
        deprecated: false,
        "x-openai-isConsequential": false,
      },
    },
  },
};
