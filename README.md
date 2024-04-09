#  Management And Billing Application - FrontEnd


## Packages : 

* RazorPay
* Easyinvoice
* SweetAlert2
* Tailwind Css
* DaisyUI
* React Router Dom
* Formik
* Yup


## Features :

* Register
* Login
* Reset Password
* Forgot Password
* Logout
* Add Product
* Edit Product
* Delete Product
* Add to Cart
* Bill Download
* Pay Online(via RazorPay)

## Navigations : 

* Login - to Dashboard Page
* Forgot Password - to Send reset link Page
* Reset Password (From Mail) - to Reset Password Page
* Activate Account - to Login page
* Dashboard - In Topbar(Top left corner)
* Edit - to edit product form page
* Cart Icon - to Cart page
* Add Product - to add product form page
* Logout - In Top Right Corner as dropdown in Profile Button

## Steps to Use : 

### Register

* In Register Form Page, 
* Enter the Username, email address and password and click register button
* If the user is already registered it will not register user and reply as User Email already Registered
* Otherwise it will show as user registered
* User is now <b>registered successfully</b>
* Check the mail to activate your account

### Activate Account

* In Mail, click activate account button
* It will activate your account and navigate to login page
* Now your account is successfully activated

### Login

* In Login Form Page, Enter the registered Email address and password
* Then click <b>Login</b> button to login
* If the email address is not registered it will show as User not registered
* Or the password is not valid it will show as Invalid password
* Otherwise it will login user and navigate the page the dashboard page
* User is now <b>Logged in successfully</b>

### Forgot and Reset Password

* In Login Form Page, Click <b>Forgot Password?</b>
* It will navigate the user to the forgot password page
* In that page, enter the email id and click <b>Forgot Password</b>
* If the email address is not registered it will show as User not registered
* Otherwise it will show response as reset link sent to mail
* Click Reset Password Button to reset password
* It will navigate the user to the reset password page
* In reset password Page enter the new password & confirm password and enter <b>Change Password</b> button
* It will show as <b>Password Reset Successfull</b> and will navigate the user to the Login Page
* Now user can login with the new password

### Logout

* In the Top Right Corner, user can find the profile button
* Click that profile button and it will show a dropdown with two options
* Click logout button to logout and it will navigate user to the login form page

### Add Product

* In the Top Right Corner, user can find the profile button
* Click that profile button and it will show a dropdown with two options
* Click Add product to add new product
* It will navigate to the add new product form page
* Fill in the product details and click add product
* The product will be added and user will be navigated to the dashboard page

### Edit Product

* Click Edit button for which product user need to edit
* It will navigate user to the edit form page
* Edit the product details and click confirm changes
* The product changes will be made and user will be navigated to the dashboard page

### Delete Product

* Click Delete button for which product user need to delete
* It will show a alert message for confirmation and delete the product

### Bill Download

* After adding products to the cart click cart button from the topbar
* Click get bill button and it will automatically download the bill as pdf
* User will automatically navigated to the dashboard page

### Image

![Screenshot (530)](https://github.com/Balajiruse/Management-Application-Frontend/assets/131993048/9f840d3e-8a8f-4125-b2bd-d7ed33225759)
![Screenshot (529)](https://github.com/Balajiruse/Management-Application-Frontend/assets/131993048/0caec8fe-ebf0-4d85-bd98-1e0cbce01c9a)


