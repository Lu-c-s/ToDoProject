interface IToDo {
  id: number;
  title: string;
  body?: string;
  done: boolean;
}

interface IToDoDTO {
  todo: IToDo;
}

class ToDoService {
  allToDos: IToDo[] = [];
  i = 0;

  addTodo({ todo }: IToDoDTO) {
    this.allToDos.push({ id: this.i, ...todo });
    console.log(`Added To do id: ${this.i}, title: ${todo.title}`);
    this.i++;
  }

  deleteToDo(idToBeRemoved: number): void {
    let result = this.allToDos.filter(({ id }) => id !== idToBeRemoved);
    if (result.length === this.allToDos.length) {
      throw new Error(`To do with id ${idToBeRemoved} not added`);
    }

    this.allToDos = result;
  }

  findToDoById(idToFind: number): IToDo {
    return this.allToDos.find(({ id }) => id === idToFind);
  }

  updateTodo(idToUpdate: number, newTodo: IToDo) {
    let result = this.allToDos.map((item) => {
      if (item.id !== idToUpdate) return item;

      return {
        ...item,
        ...newTodo,
      };
    });

    this.allToDos = result;
  }

  listAllToDo(): IToDo[] {
    return this.allToDos;
  }

  getToDosLength(): number {
    return this.allToDos.length;
  }
}

export default ToDoService;
