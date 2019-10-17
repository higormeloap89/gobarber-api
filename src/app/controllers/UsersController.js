import User from '../models/User';

class UsersController {
  async store(request, response) {
    const userExists = await User.findOne({
      where: { email: request.body.email },
    });

    if (userExists) {
      return response.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(request.body);

    return response.json(user);
  }
}

export default new UsersController();
