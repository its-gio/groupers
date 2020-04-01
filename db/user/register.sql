INSERT INTO users
  (fullName, profile_pic, email, hash)
VALUES
  ($1, $2, $3, $4)
RETURNING *;