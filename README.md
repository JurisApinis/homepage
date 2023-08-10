## ENV variables

---

**Meta data**

`VITE_DESCRIPTION` - set description for meta description

`VITE_KEYS` - set keys for meta keys

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
    
    > Notice that all this changes should be add in all languages (en, lv, rus). To avoid situations where newly added catagory appear only when EN language are selected.

    > All new added maps should have incremented number by one from the previous map.
    
    *homepage*

    Schema

    ```JS
        {
            <incremented number>: {
                heading: string;
                text: string;
            }
        }
    ```

    > optional max count for homepage is 4. To prevent failure with design.

    https://github.com/JurisApinis/homepage/assets/141917132/741af954-141d-4440-8936-c84d498398f3

    Result:

    <img width="1452" alt="Screenshot 2023-08-10 at 20 01 34" src="https://github.com/JurisApinis/homepage/assets/141917132/c9c27eb1-6963-4267-b0fd-2ff490c3dac1">

    ` As you can see more then 4 category broke design`

    *categories*

    Schema

    ```JS
        Category
    
        {
            <incremented number>: {
                category: string;
                head: string;
                options: Object (Map);
            }
        }

        Single option

        {
            option: string
        }
    ```

    > Can be added categories so musch as you need.
    > Each category can contain so much options as you need. (Here can get some design failures).

    Add category
  
    <img width="1260" alt="Screenshot 2023-08-10 at 20 25 49" src="https://github.com/JurisApinis/homepage/assets/141917132/e2d35c1e-153b-4f59-a244-64cd156eac71">

    Filled fields example.

    <img width="611" alt="Screenshot 2023-08-10 at 20 25 28" src="https://github.com/JurisApinis/homepage/assets/141917132/0e12a35d-ef12-4939-b3b1-60275e7af438">

    Result

    <img width="1263" alt="Screenshot 2023-08-10 at 20 20 35" src="https://github.com/JurisApinis/homepage/assets/141917132/f00d74df-b74d-4c00-9be6-427d3938e880">

    ``` diff 
    - Do not provide any changes to another added key. Can be changed only values (string/text) stored under objects keys.
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

---

# Images

---

Are stored at google cloud.

You can simply change it. Remove old and add new with the same name.

> Notice to get correct aspect ratio for image.

> Images with huge resolution will slow down your website.
