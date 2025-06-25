import { CreateClientConfig } from "@/generated/openapi-client/client.gen";

import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

const AUTH_COOKIE_NAME =
  process.env.NODE_ENV === "production"
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";

const API_URL = process.env.API_URL || "http://localhost:8000";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: API_URL,
  async auth() {
    const sessionToken = getCookie(AUTH_COOKIE_NAME, { cookies });
    if (!sessionToken) {
      return undefined;
    }

    try {
      // NextAuth JWT 토큰을 디코드하여 Bearer 토큰으로 사용
      const decoded = jwt.verify(sessionToken, process.env.AUTH_SECRET!) as any;

      // 백엔드가 기대하는 JWT 형식으로 새 토큰 생성
      const backendToken = jwt.sign(
        {
          sub: decoded.sub,
          email: decoded.email,
          name: decoded.name,
          picture: decoded.picture,
        },
        process.env.AUTH_SECRET!
      );

      return `Bearer ${backendToken}`;
    } catch (error) {
      console.error("JWT 토큰 처리 중 오류:", error);
      return undefined;
    }
  },
});
