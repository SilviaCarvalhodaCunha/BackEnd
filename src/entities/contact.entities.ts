import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Client } from "./client.entities";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45 })
  email: string;

  @Column({ type: "varchar", length: 15 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  dateRegistration: string | Date;

  @ManyToOne(() => Client, (cliente) => cliente.contacts)
  client: Client;

}
