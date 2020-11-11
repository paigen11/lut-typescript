// interfaces
// essentially replaces named parameters or graphql inputs or types
export interface Person {
  name: string;
  age?: number; // ? optional param
}

// enums - allow us to define a set of named constants (like a select list in a dropdown, you can only choose one of those options)
// this is a numeric enum
export enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz, // 2
}

// this is a string enum
export enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ',
}

// enum options
enum Job {
  WebDev,
  UX,
  PM,
}

export default Job;
