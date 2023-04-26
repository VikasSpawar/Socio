// export interface IPost {
//     id: string;
//     content: string;
//     authorId: string;
//     createdAt: number;
//     likes: string[];
//     comments: IComment[];
//   }
  
//   export interface IComment {
//     id: string;
//     content: string;
//     creator: {
//       id: string;
//       username: string;
//       photoURL: string | null;
//     };
//     createdAt: number;
//   }
  
//   export interface IPostContext {
//     post: IPost | null;
//     isLoading: boolean;
//     error: string | null;
//     getPost: (postId: string) => Promise<void>;
//   }
  
//   export type PostActionType =
//     | { type: "SET_POST"; payload: IPost | null }
//     | { type: "SET_LOADING"; payload: boolean }
//     | { type: "SET_ERROR"; payload: string | null };
  