import { Entity } from '../../common/Entity';
import { UniqueEntityID } from '../../common/UniqueEntityID';

interface IUserProps {
  email: string;
  password: string,
  firstName?: string | null,
  lastName?: string | null,
  middleName?: string | null,
}

export class User extends Entity<IUserProps> {
  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get firstName(): string | null | undefined {
    return this.props.firstName;
  }

  get lastName(): string | null | undefined {
    return this.props.lastName;
  }

  get middleName(): string | null | undefined {
    return this.props.middleName;
  }

  private constructor(props: IUserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: IUserProps,
    id?: UniqueEntityID,
  ): User {
    const defaultValues: IUserProps = { ...props };

    const user = new User(defaultValues, id);

    return user;
  }
}
