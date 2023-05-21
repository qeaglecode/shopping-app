import { Injectable } from '@nestjs/common';
import { SignUpDto } from '../dtos/signup.dto';

@Injectable()
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return 'hello';
  }
}
