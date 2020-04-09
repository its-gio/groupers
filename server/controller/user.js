async function deleteUser(req, res) {
  const { user_id } = req.session.user;
  const db = req.app.get('db');

  try {
    await db.user.delete_user(user_id);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function editUser(req, res) {
  const { fullname, email } = req.body;
  const { user_id } = req.session.user;
  const db = req.app.get('db');

  const emailCheck = await db.user.get_user(email);
  if (emailCheck.length !== 0 && emailCheck[0].email !== req.session.user.email) return res.status(409).json('Email taken');

  await db.user.edit_user(user_id, fullname, email);
  req.session.user = { user_id, fullname, email }
  return res.status(200).json(req.session.user);
}

module.exports = {
  deleteUser,
  editUser
}