import { User } from './user.model';

export interface AuthenticatedUser {
  user: User;
  token: string;
}
