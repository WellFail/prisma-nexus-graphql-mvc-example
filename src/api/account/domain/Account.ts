import { Entity } from '../../common/Entity';
import { AccountCurrency } from './AccountCurrency';
import { UniqueEntityID } from '../../common/UniqueEntityID';

interface IAccountProps {
  name: string;
  currency: AccountCurrency;
  balance: number;
  userId: string;
  createdAt: Date;
}

export class Account extends Entity<IAccountProps> {
  private constructor(props: IAccountProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get name() {
    return this.props.name;
  }

  get currency() {
    return this.props.currency;
  }

  get balance() {
    return this.props.balance;
  }

  get userId() {
    return this.props.userId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  public static create(
    props: IAccountProps,
    id?: UniqueEntityID,
  ): Account {
    const defaultValues: IAccountProps = { ...props };

    const account = new Account(defaultValues, id);

    return account;
  }
}
