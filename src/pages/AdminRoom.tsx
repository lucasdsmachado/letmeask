import { useParams } from 'react-router-dom';
import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import deleteImg from '../assets/delete.svg'
import '../styles/room.scss'
import { database } from '../services/firebase';

export function AdminRoom() {

  const { id } = useParams();
  const { questions, title } = useRoom(id);

  async function handleDeleteQuestion(questionId: string){
    if(window.confirm('Tem certeza que deseja excluir esta pergunta?')){
      await database.ref(`rooms/${id}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={id} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className='room-title'>
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id} 
                content={question.content}
                author={question.author}
              >
                <button
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta"/>
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  );
}