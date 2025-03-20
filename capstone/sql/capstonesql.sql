select *from Users
select *from Jobs
UPDATE Users
SET password = 'newhashedpassword'
WHERE email = 'user1@example.com'
DELETE FROM Users WHERE email = 'user2@example.com';
