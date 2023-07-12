const express = require('express');
const router = express.Router();
const pacienteControllers = require('../controllers/pacienteControllers');

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: API para gestionar pacientes
 */


/**
 * @swagger
 * /api/pacientes:
 *   get:
 *     summary: Obtiene todos los pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de pacientes obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', pacienteControllers.obtenerPacientes);
/**
 * @swagger
 * /api/pacientes:
 *   post:
 *     summary: Crear un paciente
 *     description: Crea un nuevo paciente.
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: Nuevos datos del paciente.
 *         schema:
 *           type: object
 *           properties:
 *             nombreCompleto:
 *               type: string
 *             porcentajeAzucar:
 *               type: number
 *             porcentajeGrasa:
 *               type: number
 *             porcentajeOxigeno:
 *               type: number
 *             riesgo:
 *               type: string
 *           example:
 *             nombreCompleto: Juan Perez
 *             porcentajeAzucar: 85
 *             porcentajeGrasa: 30
 *             porcentajeOxigeno: 97
 *             riesgo: medio
 *     responses:
 *       200:
 *         description: Paciente creado exitosamente.
 *       400:
 *         description: Error en los datos del paciente.
 */
router.post("/", pacienteControllers.crearPaciente);

router.post("/", pacienteControllers.crearPaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   put:
 *     summary: Actualizar un paciente
 *     description: Actualiza los datos de un paciente existente.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del paciente a actualizar.
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         required: true
 *         description: Nuevos datos del paciente.
 *         schema:
 *           type: object
 *           properties:
 *             nombreCompleto:
 *               type: string
 *             porcentajeAzucar:
 *               type: number
 *             porcentajeGrasa:
 *               type: number
 *             porcentajeOxigeno:
 *               type: number
 *             riesgo:
 *               type: string
 *           example:
 *             nombreCompleto: Juan Perez
 *             porcentajeAzucar: 85
 *             porcentajeGrasa: 30
 *             porcentajeOxigeno: 97
 *             riesgo: medio
 *     responses:
 *       200:
 *         description: Paciente actualizado exitosamente.
 *       400:
 *         description: Error en los datos del paciente.
 *       404:
 *         description: Paciente no encontrado.
 */
router.put("/:id", pacienteControllers.actualizarPaciente);


/**
 * @swagger
 * /api/pacientes/{id}:
 *   get:
 *     summary: Obtiene un paciente por su ID
 *     tags: [Pacientes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del paciente a obtener
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paciente obtenido exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/:id', pacienteControllers.obtenerPaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   delete:
 *     summary: Elimina un paciente existente
 *     tags: [Pacientes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del paciente a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paciente eliminado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Paciente no encontrado
 */
router.delete('/:id', pacienteControllers.eliminarPaciente);

module.exports = router;
