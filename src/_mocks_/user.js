import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { mockImgAvatar } from '@/utils/mockImages';

const users = [...Array(24)].map((_, index) => ({
    id: faker.string.uuid(),
    avatarUrl: mockImgAvatar(index + 1),
    name: faker.person.fullName(),
    company: faker.company.name(),
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer'
    ])
}));

export default users;
