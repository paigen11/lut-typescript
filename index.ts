// boolean type
const isOpen: boolean = false;

// string type
const myName: string = 'Paige';

// number type
const myAge: number = 31.6;

// array type
const list: number[] = [0, 1, 2, 3];

// array of various types
const me: [string, number, boolean] = ['Paige', 31, false];

// enum options
enum Job {
  WebDev,
  UX,
  PM,
}
const job: Job = Job.WebDev;

// the old fallback, catch all of type any
const phone: any = 'Pixel';
const tablet: any = 2;

// not sure what never is for, except maybe function results?
const desktop: any = 1;

// functions in typescript
// question mark for optional params
const sayWord = (word?: string): string => {
  console.log(word || 'hello');
  return word || 'hello';
};

sayWord();

// default params
// rest params work as expected
const sayDefaultWord = (word = 'Hi', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayDefaultWord('Paige', 'Sean');

// implicit types work in TS too
let newName: string = 'Cindy';
newName = 'George';

// gets type from initial declaration
let newNameTwo = newName;
newNameTwo = 'John';

// union types with |
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px;`;
};

makeMargin(10);
makeMargin('Paige');
// makeMargin(false);

// null types
let dog: string | undefined = 'Maddie';
dog = null;
console.log('dog ', dog);
dog = 'Kate';
dog = undefined;

// interfaces
// essentially replaces named parameters or graphql inputs or types
interface Person {
  name: string;
  age?: number; // ? optional param
}

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

sayName({ name: 'Paige', age: 31 });
sayName({ age: 31, name: 'Paige' });

// enums - allow us to define a set of named constants (like a select list in a dropdown, you can only choose one of those options)
// this is a numeric enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz, // 2
}

const createContent = (contentType: Type) => {};
createContent(Type.Quiz);

console.log(Type.Quiz);

// this is a string enum
enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ',
}

const createContent2 = (contentType: Type2) => {};
createContent2(Type2.Quiz);
console.log('Type2.Quiz', Type2.Quiz);

// classes
class Team {
  teamName: string;
  // public teamName: string; this is the same as above
  // private teamName: string; prevents outside usage
  // readonly teamName: string; prevents variable from being reassigned

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    console.log(this.teamName);
    return 'goal!';
  }
}

const atlUnited = new Team('Atlanta United');
atlUnited.score();
atlUnited.teamName;
