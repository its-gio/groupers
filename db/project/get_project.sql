SELECT p.project_id, u.fullname, u.profile_pic, p.title, p.description, p.difficulty, p.funded, p.start_time, p.end_time
FROM groupers_project p
  LEFT JOIN groupers_users u
  ON p.creator = u.user_id
WHERE project_id = $1