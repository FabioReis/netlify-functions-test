# How to run locally

1. Install netlify cli
   1. https://docs.netlify.com/cli/get-started/ 
2. Link the project with an website in your netlify account
3. Create a .env file with the following information:
   ```.env
	NODE_ENV=development
	GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
	GITHUB_CLIENT_SECRET=YOUR_GITHUB_SECRET
	SECRET=A_SECRET_FOR_YOUR_JWT
   ```
   > To check how to create the app on github please follow the following blog post: https://markus.oberlehner.net/blog/implementing-an-authentication-flow-with-passport-and-netlify-functions/
4. Run `netlify dev` for starting the server of your lambda function

# Hot to use the api
1. Run http://localhost:8888/api/auth/status on your browser to check the current status of the oauth
2. Run http://localhost:8888/api/github to authenticate to github and save the JWT on your cookies

# How to use the Git app locally
1. In the callback url on your github app settings, make sure to edit the URL for the localhost address.
