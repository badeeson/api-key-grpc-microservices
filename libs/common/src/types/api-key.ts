import { Observable } from "rxjs";

export const API_KEY_PACKAGE_NAME = "apikey";
export const API_KEY_SERVICE_NAME = "ApiKeyService";

export interface KeyByName {
  name: string;
}

export interface KeyGenerated {
  key: string;
  name: string;
}

export interface Key {
  key: string;
}

export interface IsKeyValid {
  key: string;
  isValid: boolean;
}

export interface KeyRemainingQuota {
  key: string;
  remainingQuota: number;
}

export interface ApiKeyServiceClient {
  generateApiKey(request: KeyByName): Observable<KeyGenerated>;

  validateApiKey(request: Key): Observable<IsKeyValid>;

  getRemainingQuota(request: Key): Observable<KeyRemainingQuota>;
}
