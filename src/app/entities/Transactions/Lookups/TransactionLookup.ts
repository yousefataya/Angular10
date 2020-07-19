import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { TransactionMainInfo } from 'src/app/entities/Transactions/TransactionInfo/TransactionMainInfo';

@Entity()
export class TransactionLookup extends BaseEntity {


  @Column('transactionType')
  transactionType: string;

  @Column('transactionKey')
  transactionKey: string;

  @OneToMany(() => TransactionMainInfo, transaction => transaction.id)
  transactionInfo: TransactionMainInfo[];

}
