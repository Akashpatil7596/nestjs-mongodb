export class UserResources {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;

  constructor(data) {
    this._id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.age = data.age;
  }
}
