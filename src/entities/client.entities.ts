import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Contact } from './contact.entities';

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "varchar", length: 45})
  nome: string;

  @Column({type: "varchar", length: 45, unique: true})
  email: string;

  @Column({type: "varchar", length: 120})
  password: string;

  @Column({type: "varchar", length: 15})
  telefone: string;

  @CreateDateColumn({type: 'date'})
  dataRegistro: string | Date;

  @OneToMany(() => Contact, (contato) => contato.cliente)
  contatos: Contact[];
}
