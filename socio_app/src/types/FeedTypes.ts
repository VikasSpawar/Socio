// export interface IPost {
//     id: string;
//     content: string;
//     creator: {
//       id: string;
//       username: string;
//       photoURL: string | null;
//     };
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
  
//   export interface IFeedContext {
//     posts: IPost[];
//     isLoading: boolean;
//     error: string | null;
//     getPosts: () => Promise<void>;
//   }
  
//   export type FeedActionType =
//     | { type: "SET_POSTS"; payload: IPost[] }
//     | { type: "SET_LOADING"; payload: boolean }
//     | { type: "SET_ERROR"; payload: string | null };
  