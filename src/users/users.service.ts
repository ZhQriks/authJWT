import { Injectable } from '@nestjs/common';
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
};
@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Jarasar',
      username: 'jarasar',
      password: 'zharasar081205',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Miras',
      username: 'miras',
      password: 'kural1337',
      role: 'user',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
