## ENV variables

---

**Default variables**

`VITE_DEFAULT_THEME` - set default theme.

`VITE_DEFAULT_LANG` - set default language.

**Contact variables**

`VITE_PHONE` - set displayed phone on website.

`VITE_EMAIL` - set displayed email on website.

**Social variables**

`VITE_FB_LINK` - set facebook link.

`VITE_YT_LINK` - set youtube link.

`VITE_INSTA_LINK` - set instagram link. 

**Firebase configuration**

`VITE_FB_API_KEY`

`VITE_FB_AUTH_DOMAIN`

`VITE_FB_PROJECT_ID`

`VITE_FB_STORAGE_BUCKET`

`VITE_FB_MSG_SENDER_ID`

`VITE_FB_APP_ID`

`VITE_FB_MEASURMENT_UD`

**ReCaptcha configuration**

`VITE_RECAPTCHA_PUBLIC_KEY`

---

## Github link

---

https://github.com/JurisApinis

---

## ReCaptcha

---

https://www.google.com/recaptcha/about/

---

# EmailJS
---

https://dashboard.emailjs.com/sign-in

---

## Firebase

---

https://console.firebase.google.com/

### Database Guide

- **Translations**

    ``` diff 
    - Do not provide any changes to added key. Can be changed only values (string/text) stored under objects keys.
    ```

- **classWorks**

  https://github.com/JurisApinis/homepage/assets/141917132/0c03aeaa-a3f8-40f6-965f-8584a6f6a626

  > Written keys and types should be identical at video.

  ```JS
      {
          category: string;
          place: string;
          date: timestamp;
      }
  ```

  > Algorithm will automatically filter only actual works. What that's mean ? Algorithm will check what actual time is now (precision in milliseconds), and compare work date and time with actual, if actual is bigger this work not appear in webpage work list.

- **feedbacks**

  https://github.com/JurisApinis/homepage/assets/141917132/0669ea44-212f-4cfb-b4ae-724d84141763

  > Written keys and types should be identical at video.

  > Rate are number in diapozone 1 - 10.
  
  ```JS
      {
          name: string;
          message: string;
          rate: number;
      }
  ``` 




