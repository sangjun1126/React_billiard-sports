import React from 'react';
import TodoListItem from './TodoListItem';
import './scss/TodoList.scss';

const TodoList = ({ todos = [], onRemove, onToggle }) => { // todos의 기본값을 빈 배열로 설정
  return (
    <div className="TodoList">
      {todos.length > 0 ? (  // todos 배열이 비어 있지 않으면 렌더링
        todos.map((todo) => (
          <TodoListItem 
            todo={todo} 
            key={todo.id} 
            onRemove={onRemove} 
            onToggle={onToggle} 
          />
        ))
      ) : (
        <div>No todos available</div>  // todos 배열이 비어 있을 때 메시지 표시
      )}
    </div>
  );
};

export default TodoList;
