# INVOICE API

## Develop mode

For correct running application on **localhost** you need to create **.env** at root folder file with following content inside (example):

```
PORT = 5050
DB_URL = mongodb+srv://login:password@your-db-aws.jvvnn.mongodb.net/someOfYourDatabase?...
JWT_ACCESS_SECRET = JWT_SECRET_KEY
JWT_REFRESH_SECRET = JWT_SECRET_PASSWORD
SMTP_HOST = mail.domain.com
SMTP_PORT = 465
SMTP_USER = noreply@domain.com
SMTP_PASSWORD = PASSWORD
API_URL = https://domain.com
CLIENT_URL = https://domain.com
```
## Production mode
### Cookies
 
By default application is configured for working with different domains i.e. API runs at **domain.com** and CLIENT runs at **domain.eu**. By default cookies configured as shown below:


```
{maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none', secure: true}
```

If you want to use API and CLIENT with the same domain you can remove **sameSite** and **secure** properties.

### Deploying application on **Heroku**

Heroku allows to deploy NodeJS application within less than 10 minutes. For starting deploy on Heroku follow these steps:

- [ ] Go to [Heroku](https://heroku.com), register or login and follow to dashboard
- [ ] Create the new application
- [ ] Choose name for your application and region
- [ ] Choose your **GitHub** repository at "Deployment method" and connect to it
- [ ] Specify branch from GitHub project that will be start building application
- [ ] **Don't forget** to transfer enviroments variables from **.env** to project deployment settings at **Settings** tab in **Config Vars** section.
![Configuration .env at Heroku](/doc/images/heroku-env-settings.png)

- [x] That's it. Your application will build each time when you whould merge your project to choosen branch 





