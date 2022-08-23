import { Column, CreateDateColumn, Entity, Generated, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Resposta } from "./Resposta";

@Entity()
export class QuemResponde {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  usuario: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  data_modificacao_cadastro: Date;

  /*
    @Column()
    data_cadastro: Date;

    @Column()
    data_modificacao_cadastro: Date;
  */

  @OneToOne(() => Resposta, (resposta) => resposta.quemResponde)
  resposta: Resposta;
}
