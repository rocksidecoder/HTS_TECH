/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for authentication in the system
 */

/**
 * @swagger
 * /api/v1/auth/sign-up:
 *   post:
 *     summary: Sign up new user
 *     tags: [Auth]
 *     description: Use this endpoint to create a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 required: true
 *               last_name:
 *                 type: string
 *                 required: true
 *               email:
 *                 type: string
 *                 format: email
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: User sign up successfully
 */


/**
 * @swagger
 * /api/v1/auth/sign-in:
 *   post:
 *     summary: Sign in user
 *     tags: [Auth]
 *     description: Use this endpoint to login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: User login successfully
 */