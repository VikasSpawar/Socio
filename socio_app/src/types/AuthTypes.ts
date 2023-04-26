// export interface IUser {
//     id: string;
//     email: string;
//     username: string;
//     photoURL: string | null;
//   }
  
//   export interface IUserCredentials {
//     email: string;
//     password: string;
//   }
  
//   export interface IAuthContext {
//     user: IUser | null;
//     signIn: (credentials: IUserCredentials) => Promise<void>;
//     signUp: (credentials: IUserCredentials) => Promise<void>;
//     signOut: () => Promise<void>;
//   }
  
//   export type AuthActionType =
//     | { type: "SET_USER"; payload: IUser | null }
//     | { type: "SIGN_OUT" };
  