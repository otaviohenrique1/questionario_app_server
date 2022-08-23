import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
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

  /* Arrumar */
  // @Column()
  // questionario_respostas: Resposta[];
  
  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  data_modificacao_cadastro: Date;
}
