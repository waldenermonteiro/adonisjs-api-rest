/**
* @swagger
* /api/v1/posts:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Post
*     summary: List Post
*     parameters:
*       - name: title
*         description: Title of the post
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
*   post:
*     security:
*       - Bearer: []
*     tags:
*       - Post
*     summary: Create Post
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewPost'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/posts/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Post
*     summary: Get Post by id
*     parameters:
*       - name: id
*         description: Id of post
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
*       - Post
*     summary: Update Post
*     parameters:
*       - name: id
*         description: Id of post
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewPost'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Post
*     summary: Delete Post by id
*     parameters:
*       - name: id
*         description: Id of post
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
