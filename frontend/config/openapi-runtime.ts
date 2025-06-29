import { CreateClientConfig } from "@/generated/openapi-client/client.gen";

import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

const AUTH_COOKIE_NAME =
  process.env.USE_HTTPS === "true"
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";

const API_URL = process.env.API_URL || "http://localhost:8000";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: API_URL,
  async auth() {
    return getCookie(AUTH_COOKIE_NAME, { cookies });
  },
});
