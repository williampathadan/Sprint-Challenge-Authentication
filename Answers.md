<!-- Answers to the Short Answer Essay Questions go here -->
## Answers to Sprint (Authentication)

### 1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

**Answer**:

**Middlewares** are functions that runs before the final function gets executed.

**Sessions** are instances which manages data that can only be accessed before that instance expires. 
Session data are just like cookies whereas session data is stored on the server.

**bcrypt** is a function used for hashing password. Password hashing is a way to encrypt a password. In bcrypt, the data cannot be retrieved from the hash.

**JWT** is the short form of **JSON Web Token**. JWT is used to create token for authenticating users. Any data can be passed via JWT, and the token can be set to expire.

---


### 2. What does bcrypt do in order to prevent attacks?

**Answer**:

\t`bcrypt` is a one-way password hashing function. 
Using a `salt` with bcrypt make attacks like *rainbow attacks* & *dictionary attacks* nearly impossible.

---


### 3. What are the three parts of the JSON Web Token?

**Answer**: 

JSON Web Token is in the format `xxxxx.yyyyy.zzzzz`, where `xxxxx` is **Header**, `yyyyy` is **Payload** and `zzzzz` is **Signature**.

----

