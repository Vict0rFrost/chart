import React from 'react';
import { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd( ref.current!.value)
      ref.current!.value=''
    }
  }

  return (
    <div className="input-field">
      <input
        ref={ref}
        // onChange={changeHandler} 
        // value={title}  
        type="text" 
        id="title" 
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}
