import { Entity } from '../../common/Entity';
import { UniqueEntityID } from '../../common/UniqueEntityID';

interface ITransactionProps {
  createdAt: Date;
  amount: number
  accountId: string,
}

export class Transaction extends Entity<ITransactionProps> {
  get createdAt() {
    return this.props.createdAt;
  }

  get amount() {
    return this.props.amount;
  }

  get accountId() {
    return this.props.accountId;
  }

  private constructor(props: ITransactionProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ITransactionProps, id?: UniqueEntityID): Transaction {
    const defaultValues: ITransactionProps = { ...props };

    const user = new Transaction(defaultValues, id);

    return user;
  }
}
