import HttpException from './http.exception';

class UserIDNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `User ID: ${id} not found!`);
  }
}

export default UserIDNotFoundException;
