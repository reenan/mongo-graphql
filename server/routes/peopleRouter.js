import { Router } from 'express';

import {
    findPeople,
    insertPeople,
    findPeopleById,
    updatePeople,
    deletePeople
} from './../db/model/peopleModel'

const router = new Router()

router.get('/', async ({res}) => {
    const people = await findPeople()
    res.send(people)
})

router.post('/', async (req, res) => {
    console.log('req.body:', req.body)
    try {
        const people = await insertPeople(req.body)
        res.status(201).send(people)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.get('/:peopleId', async (req, res) => {
    const { peopleId } = req.params
    try {
        const people = await findPeopleById(peopleId)
        res.send(people)
    } catch (err) {
        res.sendStatus(404)
    }
})

router.put('/:peopleId', async (req, res) => {
    const { peopleId } = req.params

    try {
        const people = await updatePeople(peopleId, req.body)
        res.send(people)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.delete('/:peopleId', async (req, res) => {
    const { peopleId } = req.params

    try {
        await deletePeople(peopleId)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

export default router;