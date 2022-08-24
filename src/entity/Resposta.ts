import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Pergunta } from "./Pergunta";
import { QuemResponde } from "./QuemResponde";
import { Questionario } from "./Questionario";

@Entity("resposta")
export class Resposta {
  @PrimaryColumn()
  id: number;

  @OneToOne(() => QuemResponde, (quemResponde) => quemResponde.resposta)
  @JoinColumn({ name: "quem_responde_id" })
  quemResponde: QuemResponde
  @Column()
  quem_responde_id: number; /* Arrumar */
  
  @OneToOne(() => Questionario, (questionario) => questionario.resposta)
  @JoinColumn({ name: "questionario_id" })
  questionario: Questionario
  @Column()
  questionario_id: number; /* Arrumar */

  @OneToMany(() => Pergunta, (pergunta) => pergunta.questionario_respostas)
  questionario_resposta: Pergunta[]; /* Arrumar */
  
  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  data_modificacao_cadastro: Date;
}
