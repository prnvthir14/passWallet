LHL Node Skeleton
=========

## Project Setup

The following steps are only for _one_ of the group members to perform.

1. Create your own copy of this repo using the `Use This Template` button, ideally using the name of your project. The repo should be marked Public
2. Verify that the skeleton code now shows up in your repo on GitHub, you should be automatically redirected
3. Clone your copy of the repo to your dev machine
4. Add your team members as collaborators to the project so that they can push to this repo
5. Let your team members know the repo URL so that they use the same repo (they should _not_ create a copy/fork of this repo since that will add additional workflow complexity to the project)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x



A storage system for passwords for organzations. An organization, like Lighthouse labs, has many different accounts which need to be shared between users. 

If a user needs to log in to a specific website (e.g. Facebook) they can go into the app, find the appropriate password, click a button which copies the password into the clipboard, and log in.

Requirements:
user can register/login and be assigned to an organization
an organization has many users
user can add a new username and password for a specific website
app can generate passwords based on the criteria specified (password length, contains lowercase, contairs uppercase, contains numbers, etc)
user can edit and change their password any time
user has a convinient copy to clipboard button so they dont have to select the password
sites can be categoried, to, social (fb, linkedin), work related (bamboo, harvest), entertainment (snapchat, reddit), etc, etc

## Determine user stories:

  ## Features

  1 - an administrator can login and see all the usernames and passwords for their organization
  2 - A user can generate password according site requirements and then can go register on site ((password length, contains lowercase, contairs uppercase, contains numbers, and contains symbols etc. are pw options))
  3 - OR user can save an existing log in and we will store it



org table:L
multiple admins for same org

different admins for different orgs

## routes

		/login --login 
		/register --register
		/ -- home
		/home -- home
		/home/createNewLogin:user_id 
		/home/editLogin:user_id
		/home/deleteLogin:user_id
		/home/myPasswords:user_id
		/home/myOrganizationPasswords:id
