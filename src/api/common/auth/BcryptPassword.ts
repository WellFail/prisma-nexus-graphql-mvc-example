import bcrypt from 'bcrypt';
import { IPassword } from './IPassword';

interface IBcryptPasswordProps {
  password: string;
}

export class BcryptPassword implements IPassword {
  private props: IBcryptPasswordProps;

  constructor(props: IBcryptPasswordProps) {
    this.props = props;
  }

  public async getHashedPassword(): Promise<string> {
    const hashedPassword = await bcrypt.hash(this.props.password, 10);

    return hashedPassword;
  }
}
