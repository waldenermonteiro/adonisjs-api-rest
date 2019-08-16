/**
* @swagger
* /users/login:
*   post:
*     tags:
*       - User
*     summary: Login User
*     parameters:
*       - name: Parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/Login'
*     responses:
*       200:
*         example:
*           message: Hello Guess
* /users:
*   get:
*     tags:
*       - User
*     summary: List User
*     responses:
*       200:
*         example:
*           message: Hello Guess
*   post:
*     tags:
*       - User
*     summary: Create User
*     parameters:
*       - name: Parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewUser'
*     responses:
*       200:
*         example:
*           message: Hello Guess
* /users/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - User
*     summary: Get User by id
*     parameters:
*       - name: id
*         description: Id of user
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     security:
*       - Bearer: []
*     tags:
*       - User
*     summary: Update User
*     parameters:
*       - name: id
*         description: Id of User
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewUser'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - User
*     summary: Delete User by id
*     parameters:
*       - name: id
*         description: Id of User
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/