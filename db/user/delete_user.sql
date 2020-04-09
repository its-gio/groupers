DELETE FROM groupers_project
WHERE creator = $1;

DELETE FROM groupers_users
WHERE user_id = $1;