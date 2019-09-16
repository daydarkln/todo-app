import { withHandlers } from 'recompose';

export default withHandlers({
  getPriority: () => priority => {
    switch (priority) {
      case 1:
        return 'low'
      case 2:
        return 'mid'
      case 3:
        return 'hight'
      case 4:
        return 'max'
    
      default:
        return 'undefined';
    }
  },
  getStatus: () => status => {
    switch (status) {
      case 1:
        return 'бэклог'
      case 2:
        return 'в процессе'
      case 3:
        return 'готово'
      default:
        return 'undefined';
    }
  }
})