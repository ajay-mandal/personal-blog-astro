---
title: Google OAuth Service
author: Ajay Mandal
pubDatetime: 2024-10-31T09:24:33.568Z
slug: google-oauth-external
featured: false
draft: false
tags:
  - google
  - oauth
  - gcp
description: How to use google OAuth service in own app
---

# Google OAuth Service Configuration on external app
![google-oauth](@assets/images/google-oauth/google-oauth.jpeg)

To use the OAuth service of Google in our app, we need to create a project in our gcp console and create a API service in it.

1. Go to [GCP Console](https://console.cloud.google.com/) and login with your google account. Create a project to get started.

2. Select the created project and click on "API and Services"
![project-selected](@assets/images/google-oauth/project-selected.jpeg)

3. Create a OAuth Consent screen for external access
![oauth-consent-screen](@assets/images/google-oauth/oauth-consent-screen.jpeg)
- Select User Type as "External" and click on Create.

4. Add the webapp details where you will add this Oauth service
![app-registration](@assets/images/google-oauth/app-registration.jpeg)
- Add your App name
- User support email will be the mail which you use to create the project.
- Adding logo for the app is optional

5. Add the authorized domain that is going to use this service. The subsequent sub-domain can use it afterwards.
![auth-domain](@assets/images/google-oauth/auth-domain.jpeg)
- Also add a developer contact email (can be any)

6. Now create a `OAuth client ID` in Credentials
![oauth-client-id](@assets/images/google-oauth/oauth-client-id.jpeg)

7. Add all the details about the domain that is going to use service along with callback url
![oauth-client-details](@assets/images/google-oauth/oauth-client-details.jpeg)
 - Select Application Type as "Web App"
 - Add the Name of App (This will appear to users when trying to authenticate with google)
 - Add the domain or sub-domain in the `Authorized Javascript Origin`
 - The redirect URL formats goes as `{{url}}/api/auth/callback/google`
 - Finally click create to get the client ID and secret to add our app and use the service.

This post can be very helpful while creating OAuth for in-house authentication.