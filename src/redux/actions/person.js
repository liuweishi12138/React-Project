import{ ADD_PERSON} from '../action_types';

//创建减的action
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})