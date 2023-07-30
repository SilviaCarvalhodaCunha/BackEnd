import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Client } from './client.entities';

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "varchar", length: 45})
  nome: string;

  @Column({type: "varchar", length: 45})
  email: string;

  @Column({type: "varchar", length: 15})
  telefone: string;

  @CreateDateColumn({type: 'date'})
  dataRegistro: string | Date;

  @ManyToOne(() => Client, (cliente) => cliente.contatos)
  cliente: Client;
}
