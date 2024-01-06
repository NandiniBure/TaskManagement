
import '../../App.css';

// components
import Header from "../Header";
import TodoForm from '../TodoForm';
import Todos from '../Todos';

function Main() {
  return (
    <div >
      <Header />
      <div className='bg-[#F8AD9D] h-screen'>
      <div className=''>
      <TodoForm />
      </div>
      <Todos />
      </div>
    </div>
  );
}

export default Main;
