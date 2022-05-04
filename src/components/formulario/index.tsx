import React from "react"
import { ITarefa } from "../../types/Tarefas"
import Botao from "../botao"
import style from './Formulario.module.scss'
import {v4 as uuiddv4}from 'uuid'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> 
}>{
    state = {
        tarefa:'',
        tempo:'00:00'
    }
    adicionarTarefas(evento: React.FormEvent){
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
             {
                ...this.state,
                selecionado:false,
                completado:false,
                id: uuiddv4(),
            }
        ])
        this.setState({
            tarefa:"",
            tempo:'00:00',
        })
    }
    render(){
        return(
            <form className={style.novaTarefa}onSubmit={this.adicionarTarefas.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="">Digite uma Tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        placeholder="Agenda um estudo"
                        required
                    />
                       
                   
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Digite o tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        step="1"
                        max="02:00:00"
                        min="00:00:00"
                        required 
                        />
                </div>
                <Botao type="submit">
                    Receba !!!
                </Botao>
            </form>
        )
    }
}

export default Formulario