import { peopleSchema } from './../schema/peopleSchema';
import { model } from 'mongoose';

const PeopleModel = model('People', peopleSchema)

const findPeople = () => {
    return PeopleModel.find({}).sort({ name: 1 })
}

const insertPeople = (people) => {
    const newPeople = new PeopleModel(people)
    return newPeople.save()
}

const findPeopleById = (peopleId) => {
    return PeopleModel.findById(peopleId)
}

const updatePeople = async (peopleId, people) => {
    const peopleToUpdate = await findPeopleById(peopleId)
    
    peopleToUpdate.name = people.name
    peopleToUpdate.age = people.age
    
    return peopleToUpdate.save()
}

const deletePeople = async (peopleId) => {
    const people = await findPeopleById(peopleId)
    return people.remove()
}

export {
    findPeople,
    insertPeople,
    findPeopleById,
    updatePeople,
    deletePeople
}

