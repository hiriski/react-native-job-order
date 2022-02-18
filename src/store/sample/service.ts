import { AxiosResponse } from 'axios';
import { Todo } from '../../interfaces/todo';
import api from '../../utils/http';

const TodoService = {
  findAll: async (params?: Record<string, string | number>): Promise<AxiosResponse<Todo[]>> => {
    return await api.get('/todos', { params });
  },
};

export default TodoService;
