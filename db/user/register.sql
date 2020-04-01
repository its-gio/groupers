INSERT INTO groupers_users
  (fullName, profile_pic, email, password)
VALUES
  ($1, $2, $3, $4)
RETURNING *;