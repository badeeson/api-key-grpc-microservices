import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

// export const protobufPackage = "api-key";
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
  // findAllUsers(request: Empty): Observable<Users>;

  // findOneUser(request: FindOneUserDto): Observable<User>;

  // updateUser(request: UpdateUserDto): Observable<User>;

  // removeUser(request: FindOneUserDto): Observable<User>;

  // queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}

// export interface PaginationDto {
//   page: number;
//   skip: number;
// }

// export interface UpdateUserDto {
//   id: string;
//   socialMedia: SocialMedia | undefined;
// }

// export interface FindOneUserDto {
//   id: string;
// }

// export interface Empty {
// }

// export interface Users {
//   users: User[];
// }

// export interface CreateUserDto {
//   username: string;
//   password: string;
//   age: number;
// }

// export interface User {
//   id: string;
//   username: string;
//   password: string;
//   age: number;
//   subscribed: boolean;
//   socialMedia: SocialMedia | undefined;
// }

// export interface SocialMedia {
//   twitterUri?: string | undefined;
//   fbUri?: string | undefined;
// }



// export interface UsersServiceController {
//   createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

//   findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

//   findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

//   updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;

//   removeUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

//   queryUsers(request: Observable<PaginationDto>): Observable<Users>;
// }

// export function UsersServiceControllerMethods() {
//   return function (constructor: Function) {
//     const grpcMethods: string[] = ["createUser", "findAllUsers", "findOneUser", "updateUser", "removeUser"];
//     for (const method of grpcMethods) {
//       const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
//       GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
//     }
//     const grpcStreamMethods: string[] = ["queryUsers"];
//     for (const method of grpcStreamMethods) {
//       const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
//       GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
//     }
//   };
// }

// export const USERS_SERVICE_NAME = "UsersService";
