export class User {
  public name: string;
  public email: string;
  public phone: number;
  public topic: string;
  public timePreference: string;
  public subscribe: boolean;


  constructor(name: string, email: string, phone: number, topic: string, timePreference: string, subscribe: boolean) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.topic = topic;
    this.timePreference = timePreference;
    this.subscribe = subscribe;
  }
}
