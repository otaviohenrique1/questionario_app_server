import { Column, Entity, Generated, OneToMany, PrimaryColumn } from "typeorm"
import { Alternativa } from "./Alternativa";
import { Pergunta } from "./Pergunta";
import { Questionario } from "./Questionario";

@Entity()
export class QuemPergunta {
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
  telefone: string;
  
  @Column()
  cpf: string;
  
  @Column()
  data_nascimento: Date;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @OneToMany(() => Questionario, (questionario) => questionario.quemPergunta)
  questionarios: Questionario[];

  @OneToMany(() => Pergunta, (pergunta) => pergunta.quemPergunta)
  perguntas: Pergunta[];

  @OneToMany(() => Alternativa, (alternativa) => alternativa.quemPergunta)
  alternativas: Alternativa[];
}
