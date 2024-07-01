import "./scss/TodoTemplate.scss";

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리하기</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;