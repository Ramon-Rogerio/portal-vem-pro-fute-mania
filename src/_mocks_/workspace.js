import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const workspaces = [...Array(24)].map((_, index) => ({
    id: faker.string.uuid(), 
    title: faker.company.name(),
    role: sample([
        'Clássico chaveado',
        'Clássico rodadas',
        'Livre'
       
    ])
}));

export default workspaces;
