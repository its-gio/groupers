async function deleteUser(req, res) {
  const { user_id } = req.session.user;
  const db = req.app.get('db');

  try {
    db.user.delete_user(user_id);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }

}

module.exports = {
  deleteUser
}