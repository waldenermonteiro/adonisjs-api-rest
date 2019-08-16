/** 
*  @swagger
* definitions:
*   NewUser:
*     type: object
*     required:
*       - username
*       - email
*       - password
*     properties:
*       username:
*         type: string
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*   Login:
*     type: object
*     required:
*       - email
*       - password
*     properties:
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*/