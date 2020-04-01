INSERT INTO groupers_project
  (creator, title, description, difficulty, funded, start_time, end_time)
VALUES
  ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;