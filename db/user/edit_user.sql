UPDATE groupers_users
SET fullname = $2,
    email = $3
WHERE user_id = $1