import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import peopleOutline from '@iconify/icons-eva/people-outline';
import baselineSportsSoccer from '@iconify/icons-ic/baseline-sports-soccer'
import cardsOutline from '@iconify/icons-mdi/cards-outline';
import scoreboardOutline from '@iconify/icons-mdi/scoreboard-outline';
import trophy from '@iconify/icons-ant-design/trophy'
import podiumGold from '@iconify/icons-mdi/podium-gold'
import homeOutline from '@iconify/icons-mdi/home-outline';
import stadiumOutline from '@iconify/icons-mdi/stadium-outline';
import medalOutline from '@iconify/icons-mdi/medal-outline';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
    {
        title: 'Ínicio',
        path: '/dashboard/app',
        icon: getIcon(homeOutline)
    },
    {
        title: 'Classificação',
        path: '/dashboard/campeonatos',
        icon: getIcon(podiumGold)
    },
    {
        title: 'Campeonato',
        path: '/dashboard/campeonatos',
        icon: getIcon(trophy)
    },
    {
        title: 'Jogos',
        path: '/dashboard/jogos',
        icon: getIcon(scoreboardOutline)
    },
    {
        title: 'Gols',
        path: '/dashboard/gols',
        icon: getIcon(baselineSportsSoccer)
    },
    {
        title: 'Cartões',
        path: '/dashboard/cartoes',
        icon: getIcon(cardsOutline)
    },
    {
        title: 'Jogadores',
        path: '/dashboard/jogadores',
        icon: getIcon(peopleOutline)
    },
    {
        title: 'Estádio',
        path: '/dashboard/estadios',
        icon: getIcon(stadiumOutline)
    },
    {
        title: 'Campeões',
        path: '/dashboard/campeoes',
        icon: getIcon(medalOutline)
    },
    {
        title: 'Arbitros',
        path: '/dashboard/arbitros',
        icon: getIcon(peopleOutline)
    },
    {
        title: 'user',
        path: '/dashboard/users',
        icon: getIcon(peopleFill)
    },
];

export default sidebarConfig;
